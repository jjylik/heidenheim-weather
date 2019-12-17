import React from "react";
import { useSpring, animated } from "react-spring";
import { API_ICON_TO_WEATHER_ICON } from "../constants/icons";
import getCardinal from "../utils/cardinal";
import WeatherIcon from './WeatherIcon'
import WeatherConditionItem from './WeatherConditionItem'

const CurrentWeather = ({ currentWeather }) => {
  const opacityAnimation = useSpring({
    opacity: 1,
    delay: 100,
    from: { opacity: 0 }
  });
  const summaryIcon =
    API_ICON_TO_WEATHER_ICON[currentWeather.icon] || "wi-day-sunny";
  return (
    <>
      <animated.h1>Commuting weather in Heidenheim</animated.h1>
      <WeatherIcon iconName={summaryIcon} />
      <animated.h2 style={opacityAnimation}>
        {currentWeather.summary}
      </animated.h2>
      <div className="weather-item-container">
        <WeatherConditionItem
          label="Temperature"
          value={currentWeather.temperature}
          icon="wi-thermometer"
          round={val => Math.round(val)}
        >
          <span>°C</span>
        </WeatherConditionItem>
        <WeatherConditionItem
          label="Chance of rain"
          value={currentWeather.precipProbability * 100}
          icon="wi-rain"
          delay={2000}
          round={val => Math.floor(val)}
        >
          <span>%</span>
        </WeatherConditionItem>
        <WeatherConditionItem
          label="Wind speed"
          value={currentWeather.windSpeed}
          delay={3000}
          icon="wi-strong-wind"
          round={val => Math.round(val * 100) / 100}
        >
          <span>m/s from </span>
          <span>{getCardinal(currentWeather.windBearing)}</span>
        </WeatherConditionItem>
        <WeatherConditionItem
          label="UV index"
          delay={4000}
          value={currentWeather.uvIndex}
          icon="wi-barometer"
          round={val => Math.floor(val)}
        ></WeatherConditionItem>
      </div>
    </>
  );
};

export default CurrentWeather;
