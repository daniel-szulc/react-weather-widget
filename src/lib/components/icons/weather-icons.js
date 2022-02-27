import React from 'react';
import * as WeatherIcon from "./icon-objects"

const Clouds = () => {
    return (
        <div className="clouds">
            <WeatherIcon.Cloud/>
        </div>
    );
}

const LightRain = () => {
    return (
        <div className="fall rain">
            <div className="cloudy">
                <WeatherIcon.Sun/>
                <WeatherIcon.Cloud/>
            </div>
            <div className="drops">
                <div className="shape drop-shape"/>
            </div>
        </div>
    );
}


const ModerateRain = () => {
    return (
        <div className="fall rain">
            <div className="cloudy">
                <WeatherIcon.Sun/>
                <WeatherIcon.Cloud/>
            </div>
            <div className="drops">
                <div className="shape drop-shape"/>
                <div className="shape drop-shape"/>
            </div>
        </div>
    );
}

const Rain = () => {
    return (
        <div className="fall rain">
            <div className="cloudy">
                <WeatherIcon.Sun/>
                <WeatherIcon.Cloud/>
            </div>
            <div className="drops">
                <div className="shape drop-shape"/>
                <div className="shape drop-shape"/>
                <div className="shape drop-shape"/>
            </div>
        </div>
    );
}

const LightShowerRain = () => {
    return (
        <div className="fall rain">
            <WeatherIcon.Cloud/>
            <div className="drops">
                <div className="shape drop-shape"/>
            </div>
        </div>
    );
}

const ShowerRain = () => {
    return (
        <div className="fall rain">
            <WeatherIcon.Cloud/>
            <div className="drops">
            <div className="shape drop-shape"/>
            <div className="shape drop-shape"/>
            <div className="shape drop-shape"/>
            </div>
        </div>
    );
}

const Cloudy = () => {
    return (
        <div className="cloudy">
            <WeatherIcon.Sun/>
            <WeatherIcon.Cloud/>
        </div>
    );
}

const Clear = () => {
    return (
        <div className="clear">
            <WeatherIcon.Sun/>
        </div>
    );
}

const Thunderstorm = () => {
    return (
        <div className="thunderstorm">
            <WeatherIcon.Cloud/>
            <div className="thunder">
                <WeatherIcon.Flash/>
            </div>
        </div>

    );
}

const ThunderstormRain = () => {
    return (
        <div className="thunderstorm">
            <WeatherIcon.Cloud/>
            <div className="drops">
                <div className="shape drop-shape"/>
                <WeatherIcon.Flash/>
                <div className="shape drop-shape"/>
            </div>
        </div>

    );
}


const LightSnow = () => {
    return (
        <div className="fall snow">
            <div className="cloudy">
                <WeatherIcon.Sun/>
                <WeatherIcon.Cloud/>
            </div>
            <div className="drops">
                <WeatherIcon.Snowflake/>
            </div>
        </div>
    );
}


const HeavySnow = () => {
    return (
        <div className="fall snow">
            <div className="cloudy">
                <WeatherIcon.Sun/>
                <WeatherIcon.Cloud/>
            </div>
            <div className="drops">
                <WeatherIcon.Snowflake/>
                <WeatherIcon.Snowflake/>
            </div>
        </div>
    );
}

const Snow = () => {
    return (
        <div className="fall snow">
            <div className="cloudy">
                <WeatherIcon.Sun/>
                <WeatherIcon.Cloud/>
            </div>
            <div className="drops">
                <WeatherIcon.Snowflake/>
                <WeatherIcon.Snowflake/>
                <WeatherIcon.Snowflake/>
            </div>
        </div>
    );
}

const LightShowerSnow = () => {
    return (
        <div className="fall snow">
            <WeatherIcon.Cloud/>
            <div className="drops">
                <WeatherIcon.Snowflake/>
            </div>
        </div>
    );
}

const ShowerSnow = () => {
    return (
        <div className="fall snow">
            <WeatherIcon.Cloud/>
            <div className="drops">
                <WeatherIcon.Snowflake/>
                <WeatherIcon.Snowflake/>
                <WeatherIcon.Snowflake/>
            </div>
        </div>
    );
}

const FreezingRain = () => {
    return (
        <div className="fall rain snow">
            <WeatherIcon.Cloud/>
            <div className="drops">
                <div className="shape drop-shape"/>
                <WeatherIcon.Snowflake/>
                <div className="shape drop-shape"/>
            </div>
        </div>
    );
}

const SnowAndRain = () => {
    return (
        <div className="fall snow rain">
            <WeatherIcon.Cloud/>
            <div className="drops">
                <WeatherIcon.Snowflake/>
                <div className="shape drop-shape"/>
                <WeatherIcon.Snowflake/>
            </div>
        </div>
    );
}


const Fog = () => {
    return (
        <div className="fog">
            <div className="cloud-foggy">
            <WeatherIcon.Cloud/>
            </div>
            <WeatherIcon.Mist/>
        </div>
    );
}

export const weatherIcon = {
    'Clear': <Clear/>,
    'Clouds': <Clouds/>,
    'Cloudy':<Cloudy/>,
    'Rain':<Rain/>,
    'LightRain': <LightRain/>,
    'ModerateRain': <ModerateRain/>,
    'ShowerRain': <ShowerRain/>,
    'LightShowerRain': <LightShowerRain/>,
    'Snow':<Snow/>,
    'LightSnow': <LightSnow/>,
    'HeavySnow': <HeavySnow/>,
    'ShowerSnow': <ShowerSnow/>,
    'LightShowerSnow': <LightShowerSnow/>,
    'Thunderstorm': <Thunderstorm/>,
    'ThunderstormRain': <ThunderstormRain/>,
    'FreezingRain': <FreezingRain/>,
    'SnowAndRain': <SnowAndRain/>,
    'Fog': <Fog/>,

}