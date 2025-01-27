import request from '../request.js';
import {unitConvert, getTempUnit, getSpeedUnit} from "../unitsConverter.js";
import openMeteoTranslations from "../resources/openMeteoTranslations";

const codeWeather = {
    0: { key: "Clear", description: "ClearSky" },
    1: { key: "Cloudy", description: "MainlyClear" },
    2: { key: "Cloudy", description: "PartlyCloudy" },
    3: { key: "Cloudy", description: "Overcast" },
    45: { key: "Fog", description: "Fog" },
    48: { key: "Fog", description: "DepositingRimeFog" },
    51: { key: "LightShowerRain", description: "LightDrizzle" },
    53: { key: "ShowerRain", description: "ModerateDrizzle" },
    55: { key: "ShowerRain", description: "DenseDrizzle" },
    56: { key: "FreezingRain", description: "LightFreezingDrizzle" },
    57: { key: "FreezingRain", description: "DenseFreezingDrizzle" },
    61: { key: "LightRain", description: "SlightRain" },
    63: { key: "ModerateRain", description: "ModerateRain" },
    65: { key: "ShowerRain", description: "HeavyRain" },
    66: { key: "FreezingRain", description: "LightFreezingRain" },
    67: { key: "FreezingRain", description: "HeavyFreezingRain" },
    71: { key: "LightSnow", description: "SlightSnow" },
    73: { key: "HeavySnow", description: "ModerateSnow" },
    75: { key: "HeavySnow", description: "HeavySnow" },
    77: { key: "ShowerSnow", description: "SnowGrains" },
    80: { key: "LightShowerRain", description: "SlightShowerRain" },
    81: { key: "ShowerRain", description: "ModerateShowerRain" },
    82: { key: "ShowerRain", description: "ViolentShowerRain" },
    85: { key: "LightShowerSnow", description: "SlightShowerSnow" },
    86: { key: "ShowerSnow", description: "HeavyShowerSnow" },
    95: { key: "Thunderstorm", description: "Thunderstorm" },
    96: { key: "ThunderstormRain", description: "ThunderstormWithSlightHail" },
    99: { key: "ThunderstormRain", description: "ThunderstormWithHeavyHail" },
};

function isNight(sunrise, sunset, dt) {
    return new Date(dt).getTime() < new Date(sunrise).getTime() || new Date(dt).getTime() > new Date(sunset).getTime();
}

function castData(data, opts) {
    const description = codeWeather[data.current.weather_code].description;
    const translation = openMeteoTranslations[description]?.[opts.lang] || description;

    return {
        location: opts.location,
        isNight: isNight(data.daily.sunrise[0], data.daily.sunset[0], data.current.time),
        temperature: Math.round(unitConvert((data.current.temperature_2m + 273.15), opts.tempUnit)),
        humidity: data.current.relative_humidity_2m,
        weather_desc: translation,
        weather_type: codeWeather[data.current.weather_code].key,
        feels_like: Math.round(unitConvert(data.current.apparent_temperature + 273.15, opts.tempUnit)),
        wind: Math.round((unitConvert(data.current.wind_speed_10m, opts.windSpeedUnit)) * 10) / 10,
        units: {
            temp: getTempUnit(opts.tempUnit), wind: getSpeedUnit(opts.windSpeedUnit)
        }
    };
}

function localize(opts) {

    let body;
    let url;

    if (opts.lon != null && opts.lat != null) {
        body = {
            params: {
                latitude: opts.lat, longitude: opts.lon, localityLanguage: opts.language
            }
        };

        url = "https://api.bigdatacloud.net/data/reverse-geocode-client"
    } else {
        body = {
            params: {
                name: opts.location, language: opts.language
            }
        };

        url = "https://geocoding-api.open-meteo.com/v1/search?count=1"
    }

    const requestOptions = {
        url, body, followRedirect: true, headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    };

    return new Promise(async (result) => {
        request(requestOptions).then((data) => result(data))
    });
}

function openMeteo(opts) {
    if (opts) {
        const url = 'https://api.open-meteo.com/v1/forecast?current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&daily=sunrise,sunset&wind_speed_unit=ms&timezone=GMT'

        return new Promise(async (result) => {
            await localize(opts).then(async (res) => {


                const body = {
                    params: {
                        longitude: res.longitude != null ? res.longitude : res.results[0].longitude,
                        latitude: res.latitude != null ? res.latitude : res.results[0].latitude,
                    }
                };

                const requestOptions = {
                    url, body, followRedirect: true, headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }
                };
                opts.location = res.city == null ? res.results[0].name : res.city;
                await request(requestOptions).then(response => castData(response, opts)).then((data) => result(data));
            })
        });
    }

}

export default openMeteo;
