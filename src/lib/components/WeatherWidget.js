import React from 'react';
import './styles/styles.scss';
import openWeather from './openWeather.js';
import {useEffect, useState} from "react";
import {weatherIcon} from "./icons/weather-icons.js";
import {langText} from "./lang.js";

const WeatherWidget = ({
                        provider='openWeather',
                        tempUnit = 'C',
                        windSpeedUnit = 'km/h',
                        lang = 'en',
                        apiKey,
                        location = 'Warsaw',
                      }) => {
    const [_data, setData] = useState();

    useEffect(()=>{
        switch (provider) {
            default:{
                openWeather
                ({apiKey, location, lang, tempUnit, windSpeedUnit}).then((result) => {
                    setData(result)
                });
                break;
            }
                }
        }, [])



  return (
      <div className="daniel-szulc-weather-widget">
          {!_data && <div className='loading-area'>
              <div className='spinner'/>
          </div>}
          {_data && (
      <div className={"weather-widget " + (_data.isNight ? "night-mode" : "")}>
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
            <h1>{_data.temperature}<span className="light-font" dangerouslySetInnerHTML={{ __html: (_data.hasOwnProperty('units') ?  _data.units.temp : "°" ) }} /></h1>
            <h3>{_data.weather_desc}</h3>
            </div>
            <div className="details">
                <div className="detail-item">
                    <div><h4>{langText.hasOwnProperty(lang) && langText[lang].hasOwnProperty('Wind') ? langText[lang].Wind : langText['en'].Wind}</h4></div>
                        <div><h2>{_data.wind}<span className="light-font">{_data.hasOwnProperty('units') ? _data.units.wind : " "}</span></h2></div>
                </div>
                <div className="detail-item">
                    <div><h4>{langText.hasOwnProperty(lang) && langText[lang].hasOwnProperty('Humidity') ? langText[lang].Humidity : langText['en'].Humidity}</h4></div>
                    <div><h2>{_data.humidity}<span className="light-font">%</span></h2></div>
                </div>
                <div className="detail-item">
                    <div><h4>{langText.hasOwnProperty(lang) && langText[lang].hasOwnProperty('FeelsLike') ? langText[lang].FeelsLike : langText['en'].FeelsLike}</h4></div>

                        <div><h2>{_data.feels_like}<span className="light-font" dangerouslySetInnerHTML={{ __html: (_data.hasOwnProperty('units') ?  _data.units.temp : "°" )}} /></h2></div>
                </div>
            </div>
            <div>

            </div >
       </div>
              )}
      </div>
  );
}

export default WeatherWidget;