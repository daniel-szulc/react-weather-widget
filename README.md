<h1 align="center"> React-Weather-Widget  </h1>
<div align="center">

[![npm-package](https://img.shields.io/npm/v/@daniel-szulc/react-weather-widget?label=npm%20package)](https://www.npmjs.com/package/@daniel-szulc/react-weather-widget)
[![downloads-npm](https://img.shields.io/npm/dw/@daniel-szulc/react-weather-widget)](https://www.npmjs.com/package/@daniel-szulc/react-weather-widget)
[![bundlephobia](https://img.shields.io/bundlephobia/min/@daniel-szulc/react-weather-widget?label=size)](https://bundlephobia.com/package/@daniel-szulc/react-weather-widget)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

## About

🌦 A simple weather widget created using  React.js ☀. This Component loading forecast data from various weather providers ⛈ (currently [OpenWeather API](https://openweathermap.org) only).

Please check out [the demo](https://daniel-szulc.github.io/#/react-weather-widget).

<img src="/weather_widget.png"  alt="Weather Widget"/>

## Installation

First you need to [register on OpenWeather](https://home.openweathermap.org/users/sign_up) to get an API key.

Then run:

```sh
$ npm install @daniel-szulc/react-weather-widget
```

## Usage

```js
import {WeatherWidget} from "@daniel-szulc/react-weather-widget"

const App = () => {
  return (
    <WeatherWidget
        apiKey='YOUR-API-KEY'
        location='Warsaw'
    />
  );
};
```

## Props

| Props           | Options                      | Default       | Description                                                                                                                                                                                                                                                                      |
|-----------------|------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `apiKey`        | -                            | -             | your api key from the openweather.                                                                                                                                                                                                                                               |
| `location`      | -                            | "Warsaw"      | your location for weather checking.                                                                                                                                                                                                                                              |
| `provider`      | "openWeather"                | "openWeather" | name of the weather data provider.                                                                                                                                                                                                                                               |
| `tempUnit`      | "C", "F", "K"                | "C"           | Temperature unit for presenting data. Available are: degrees Celsius, degrees Fahrenheit and Kelvin.                                                                                                                                                                             |
| `windSpeedUnit` | "m/s", "mph", "fps", "km/h"  | "km/h"        | Speed unit for presenting data. Available are: meters per second, miles per hour, feet per second, kilometers per hour.                                                                                                                                                          |
| `lang`          | "en", "pl", "de", "es", "ru" | "en"          | Interface language and weather provider. You can edit lang.js to add more languages for "Wind", "Humidity" and "FeelsLike". The available languages for the weather provider are listed at: [https://openweathermap.org/current#multi](https://openweathermap.org/current#multi) |

## Try It

🔗 [daniel-szulc.github.io/WeatherWidget](https://daniel-szulc.github.io/#/react-weather-widget)