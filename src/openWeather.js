import request from './request';
import  {unitConvert, getTempUnit, getSpeedUnit} from "./unitsConverter";
function getWeatherType(name, iconCode, id)

{
    switch (name) {
        case 'Thunderstorm': {
            if(200<=id<=202 || 230<=id<=232)
                return 'ThunderstormRain';
            return name;
        }
        case 'Drizzle': {
            switch(id)
            {
                case 300: {
                    return 'LightShowerRain';
                }
                case 310: {
                    return 'LightShowerRain';
                }
                 default: {
                    return 'ShowerRain';
                 }
            }
        }
        case 'Rain': {
            switch(id)
            {
                case 500: {
                    return 'LightRain';
                }
                case 501: {
                    return 'ModerateRain';
                }
                case 511:
                {
                    return 'FreezingRain';
                }
                case 520:
                {
                    return 'LightShowerRain';
                }
                case 521:
                {
                    return 'ShowerRain';
                }
                case 522:
                {
                    return 'ShowerRain';
                }
                case 531:
                {
                    return 'ShowerRain';
                }
                default: {
                    return name;
                }
            }
        }
        case 'Snow': {
            switch(id)
            {
                case 600: {
                    return 'LightSnow';
                }
                case 602: {
                    return 'HeavySnow';
                }
                case 611:
                {
                    return 'HeavySnow';
                }
                case 612:
                {
                    return 'LightShowerSnow';
                }
                case 613:
                {
                    return 'ShowerSnow';
                }
                case 615:
                {
                    return 'SnowAndRain';
                }
                case 616:
                {
                    return 'SnowAndRain';
                }
                case 520:
                {
                    return 'ShowerRain';
                }
                case 620:
                {
                    return 'LightShowerSnow';
                }
                case 621:
                {
                    return 'ShowerSnow';
                }
                case 622:
                {
                    return 'ShowerSnow';
                }
                default: {
                    return name;
                }
            }
        }
        case 'Atmosphere':{
            return 'Fog'
        }
        case 'Clear': {
            return name;
        }
        case 'Clouds': {
            switch(id)
            {
                case 801:
                {
                    return 'Cloudy';
                }
                default:
                {
                    return name;
                }
            }
        }
        default:
            return name;
    }
}

function isNight(sunrise, sunset, dt)
{
    return dt < sunrise || dt > sunset;
}

function castData(data, opts)
{

    return {
        location: data.name,
        isNight: isNight(data.sys.sunrise, data.sys.sunset, data.dt),
        temperature: Math.round(unitConvert(data.main.temp, opts.tempUnit)),
        humidity: data.main.humidity,
        weather_desc: data.weather[0].description,
        weather_type: getWeatherType(data.weather[0].main, data.weather[0].icon, data.weather[0].id),
        feels_like: Math.round(unitConvert(data.main.feels_like, opts.tempUnit)),
        wind: Math.round((unitConvert(data.wind.speed, opts.windSpeedUnit))*10)/10,
        units:{
            temp: getTempUnit(opts.tempUnit),
            wind: getSpeedUnit(opts.windSpeedUnit)
        }
    };
}

function openWeather(opts) {
    if (opts) {

        const body = {
            params: {
                q: opts.location,
                appid: opts.apiKey,
                lang: opts.lang,
                units: 'standard',
            }
        };
        const url = 'https://api.openweathermap.org/data/2.5/weather';
        const requestOptions = {
            url,
            body,
            followRedirect: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        };
        return new Promise(async (result) => {
                request(requestOptions)
                    .then((res) => castData(res, opts)).then((data) => result(data))
        });
    }

}

export default openWeather;