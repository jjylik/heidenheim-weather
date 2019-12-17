import React from "react";

const WeatherIcon = ({ iconName }) => {
  const className = `wi ${iconName}`;
  return <i className={className}></i>;
};

export default WeatherIcon;
