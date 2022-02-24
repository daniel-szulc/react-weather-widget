import React from 'react';
import './scss/styles.scss';
import openWeather from './openWeather';
import { useEffect, useState} from "react";

import {weatherIcon} from "./icons/weather-icons";
import {langText} from "./lang";
import testWeatherProvider from "./testWeatherProvider"

const WeatherWidget = ({
                        provider='openWeather',
                       /* tempUnit,
                        windSpeedUnit,
                        showForecast,*/
                        lang = 'en',
                        apiKey,
                        location = 'Warsaw',
                      }) => {
    const [_data, setData] = useState();

    useEffect(()=>{
        switch (provider) {
            case "openWeather":{
                openWeather
                ({apiKey, location, lang}).then((result) => {
                    setData(result)
                });
                break;
            }
            case "test":{
                testWeatherProvider({location, lang}).then((result) => {
                    setData(result)
                });
                break;
            }

                }


        }, [])


  return (
      <React.Fragment>
      <div className="container">
          {!_data && <div className='loading-area'>
              <div className='spinner'/>
          </div>}
          {_data && (
              <div className={"container " + (_data.isNight ? "night-mode" : "")}>
          <div className="background" />

            <div className="content">
            <h2>{_data.location}</h2>
            </div>
            <div className="weather-icon">
                <div className="inset">
                    {weatherIcon[_data.weather_type]}
                </div>
            </div>
            <div className="current-weather">
            <h1>{_data.temperature}<span className="degree">°</span></h1>
            <h3>{_data.weather_desc}</h3>
            </div>
            <div className="details">
                <div className="detail-item">
                    <div><h4>{langText[lang].Wind}</h4></div>
                        <div><h2>{_data.wind}</h2></div>
                </div>
                <div className="detail-item">
                    <div><h4>{langText[lang].Humidity}</h4></div>
                    <div><h2>{_data.humidity}</h2></div>
                </div>
                <div className="detail-item">
                    <div><h4>{langText[lang].FeelsLike}</h4></div>
                        <div><h2>{_data.feels_like}<span className="degree">°</span></h2></div>
                </div>
            </div>
            <div>

            </div >
       </div>
              )}</div>
      </React.Fragment>
  );
}

export default WeatherWidget;
