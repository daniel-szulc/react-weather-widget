import React from 'react';
import './styles/styles.scss';
import openWeather from './providers/openWeather.js';
import {useEffect, useState} from "react";
import {weatherIcon} from "./icons/weather-icons.js";
import {langText} from "./lang.js";
import {ipFind, geoFind} from  "./geoLocalization"
import openMeteo from "./providers/openMeteo";

const WeatherWidget = ({
                           provider='openWeather',
                           tempUnit = 'C',
                           windSpeedUnit = 'kmph',
                           lang = 'en',
                           apiKey,
                           autoLocate,
                           location,
                           lat,
                           lon,
                       }) => {
    const [_data, setData] = useState();

    useEffect(()=>{
        let autoLocalization = new Promise((resolve) => {
            switch (autoLocate){
                case "gps":{
                geoFind().then(res => {
                    if(res===null)
                    {
                        autoLocate='ip';
                    }
                    else
                    {
                        lat = res.lat;
                        lon = res.lon;
                        resolve();
                    }
                }).catch(() => {
                    ipFind().then(res => {
                            lat = res.lat;
                            lon = res.lon;
                            resolve();
                    }).catch(() => resolve())
                })
                    break;
            }
                case 'ip':
            {
                ipFind().then(res => {
                    lat = res.lat;
                    lon = res.lon;
                    resolve();
                }).catch(() => resolve())
                break;
            }
                default:
            {
                resolve();
                break;
            }}
        })
        autoLocalization.then(() =>{
        switch (provider) {
            case "openWeather":{
                openWeather
                ({apiKey, location, lat, lon, lang, tempUnit, windSpeedUnit}).then((result) => {
                    setData(result)
                });
                break;
            }
            case "openMeteo":{
                openMeteo
                ({location, lat, lon, lang, tempUnit, windSpeedUnit}).then((result) => {
                    setData(result)
                });
                break;
            }
            default:{
                openMeteo
                ({location, lat, lon, lang, tempUnit, windSpeedUnit}).then((result) => {
                    setData(result)
                });
                break;
            }
        }})
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
                        <div className="weather-inset">
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