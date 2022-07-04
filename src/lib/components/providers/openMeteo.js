import React from 'react';
import request from '../request.js';
import  {unitConvert, getTempUnit, getSpeedUnit} from "../unitsConverter.js";

const codeWeather = {
    0: ["Clear", "Clear sky"],
    1: ["Cloudy", "Mainly clear"],
    2: ["Cloudy", "Partly cloudy"],
    3: ["Cloudy", "Overcast"],
    45:["Fog", "Fog"],
    48:["Fog","Depositing rime fog"],
    51:["LightShowerRain","Light drizzle"],
    53:["ShowerRain", "Moderate drizzle"],
    55:["ShowerRain", "Dense drizzle"],
    56:["FreezingRain", "Light freezing drizzle"],
    57:["FreezingRain", "Dense freezing drizzle"],
    61:["LightRain", "Slight rain"],
    63:['ModerateRain', "Moderate rain"],
    65:['ShowerRain', "Heavy rain"],
    66:['FreezingRain', "Light freezing rain"],
    67:['FreezingRain', "Heavy freezing rain"],
    71:['LightSnow',"Slight snow"],
    73:['HeavySnow', "Moderate snow"],
    75:['HeavySnow', "Heavy snow"],
    77:['ShowerSnow', "Snow grains"],
    80:['LightShowerRain', 'Slight shower rain'],
    81:['ShowerRain', 'Moderate shower rain'],
    82:['ShowerRain', 'Violent shower rain'],
    85:['LightShowerSnow', 'Slight shower snow'],
    86:['ShowerSnow', 'Heavy shower snow'],
    95:['Thunderstorm', "Thunderstorm"],
    96:['ThunderstormRain', "Thunderstorm with slight hail"],
    99:['ThunderstormRain', "Thunderstorm with heavy hail"],
}

function isNight(sunrise, sunset, dt)
{
    return new Date(dt).getTime() < new Date(sunrise).getTime() || new Date(dt).getTime() > new Date(sunset).getTime();
}

function castData(data, opts)
{
    return {
        location: opts.location,
        isNight: isNight(data.daily.sunrise[0], data.daily.sunset[0], data.current_weather.time),
        temperature: Math.round(unitConvert((data.current_weather.temperature + 273.15), opts.tempUnit)),
        humidity: data.hourly.relativehumidity_2m[data.hourly.time.indexOf(data.current_weather.time)],
        weather_desc: codeWeather[data.current_weather.weathercode][1], //data.weather[0].description, /////////!!!! from code
        weather_type:   codeWeather[data.current_weather.weathercode][0] , // getWeatherType(data.current_weather.weathercode),
        feels_like: Math.round(unitConvert(data.hourly.apparent_temperature[data.hourly.time.indexOf(data.current_weather.time)] + 273.15, opts.tempUnit)),
        wind: Math.round((unitConvert(data.current_weather.windspeed, opts.windSpeedUnit))*10)/10,
        units:{
            temp: getTempUnit(opts.tempUnit),
            wind: getSpeedUnit(opts.windSpeedUnit)
        }
    };
}

function localize(opts){

    let body;
    let url;

    if(opts.lon!=null && opts.lat!=null)
    {
        body = {
            params: {
                latitude: opts.lat,
                longitude: opts.lon,
                localityLanguage: opts.language
            }
        };

        url = "https://api.bigdatacloud.net/data/reverse-geocode-client"
    }
    else
    {
        body = {
            params: {
                name: opts.location,
                language: opts.language
            }
        };

        url = "https://geocoding-api.open-meteo.com/v1/search?count=1"

    }

      const requestOptions = {
        url,
        body,
        followRedirect: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    };

    return new Promise( async(result) =>{ request(requestOptions).then((data) => result(data))});
}

function openMeteo(opts) {
    if (opts) {

        const url = 'https://api.open-meteo.com/v1/forecast?hourly=relativehumidity_2m,apparent_temperature&daily=sunrise,sunset&current_weather=true&windspeed_unit=ms&timezone=Europe%2FLondon'

        return new Promise(async (result) => {await localize(opts).then( async (res) => {


            const body = {
                params: {
                    longitude: res.longitude !=null ? res.longitude : res.results[0].longitude,
                    latitude: res.latitude !=null ?  res.latitude :  res.results[0].latitude ,
                }
            };

            const requestOptions = {
                url,
                body,
                followRedirect: true,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            };
                opts.location = res.city == null ? res.results[0].name : res.city;
                await request(requestOptions).then(response => castData(response, opts)).then((data) => result(data));
            }
        )
        });
    }

}

export default openMeteo;