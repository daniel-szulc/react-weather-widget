<h1 align="center"> React-Weather-Widget  </h1>
<div align="center">

[![npm-package](https://img.shields.io/npm/v/@daniel-szulc/react-weather-widget?label=npm%20package)](https://www.npmjs.com/package/@daniel-szulc/react-weather-widget)
[![downloads-npm](https://img.shields.io/npm/d18m/@daniel-szulc/react-weather-widget)](https://www.npmjs.com/package/@daniel-szulc/react-weather-widget)
[![bundlephobia](https://img.shields.io/bundlephobia/min/@daniel-szulc/react-weather-widget?label=size)](https://bundlephobia.com/package/@daniel-szulc/react-weather-widget)
![ReactJS](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

## About

🌦 A simple weather widget created using  React.js ☀. This Component loading forecast data from weather providers ⛈ ( [Open-Meteo](https://open-meteo.com) or [OpenWeather API](https://openweathermap.org)). You can enter a specific location or let weather-widget locate the user by itself.

Please check out [the demo](https://daniel-szulc.github.io/#/react-weather-widget).

<img src="/weather_widget.png"  alt="Weather Widget"/>

## Installation

Just run:

```sh
$ npm install @daniel-szulc/react-weather-widget
```

Using the Open-Meteo provider, you don't need to generate your own API key. </br>
Using the OpenWeather provider, you need to [register on OpenWeather](https://home.openweathermap.org/users/sign_up) to get an API key.

## Usage examples

```js
import {WeatherWidget} from "@daniel-szulc/react-weather-widget"

const App = () => {
  return (
    <WeatherWidget
        autoLocate="gps"
    />
  );
};
```

```js
import {WeatherWidget} from "@daniel-szulc/react-weather-widget"

const App = () => {
  return (
    <WeatherWidget
        provider='openWeather'
        apiKey='YOUR-API-KEY'
        location='Warsaw'
        tempUnit="F"
        windSpeedUnit="mps"
        lang="pl"
    />
  );
};
```

## Props

| Props           | Options                                                                 | Default      | Description                                                                                                                                                                                                                                                                                                                                             |
|-----------------|-------------------------------------------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `apiKey`        | -                                                                       | -            | (only for openWeather) Your api key from the openweather.                                                                                                                                                                                                                                                                                               |
| `location`      | -                                                                       | -            | Your location for weather checking, e.g. "Warsaw".                                                                                                                                                                                                                                                                                                      |
| `lat`           | -                                                                       | -            | Your latitude of the location for weather checking, e.g. "52.2317".                                                                                                                                                                                                                                                                                     |
| `lon`           | -                                                                       | -            | Your longitude of the location for weather checking, e.g. "21.0057".                                                                                                                                                                                                                                                                                    |
| `autoLocate`    | "gps", "ip"                                                             | -            | Automatic user locating. "gps" for geolocation by the browser (requires the user's permission), "ip" for location by IP address. Leave empty if you want to enter a specific location.                                                                                                                                                                  |
| `provider`      | "openWeather", "openMeteo"                                              | "openMeteo"  | Name of the weather data provider.                                                                                                                                                                                                                                                                                                                      |
| `tempUnit`      | "C", "F", "K"                                                           | "C"          | Temperature unit for presenting data. Available are: degrees Celsius, degrees Fahrenheit and Kelvin.                                                                                                                                                                                                                                                    |
| `windSpeedUnit` | "mps", "mph", "fps", "kmph"                                             | "kmph"       | Speed unit for presenting data. Available are: meters per second, miles per hour, feet per second, kilometers per hour.                                                                                                                                                                                                                                 |
| `lang`          | "en", "pl", "de", "es", "fr", "ru", "zh", "ja", "ko", "it", "pt", "ar"  | "en"         | Interface language and weather provider. You can edit `lang.js` and `openMeteoTranslations.js` (for OpenMeteo provider) in `resources` to add more languages. The available languages for the OpenWeather provider are listed at: [https://openweathermap.org/current#multi](https://openweathermap.org/current#multi) |

## Try It

🔗 [daniel-szulc.github.io/WeatherWidget](https://daniel-szulc.github.io/#/react-weather-widget)
