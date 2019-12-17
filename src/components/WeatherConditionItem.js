import React from "react";
import { useSpring, animated } from "react-spring";
import WeatherIcon from './WeatherIcon'


const WeatherConditionItem = ({
  delay = 0,
  label,
  value,
  icon,
  children,
  round = val => val
}) => {
  const numberAnimation = useSpring({
    delay: delay + 500,
    number: value,
    from: { number: 0 }
  });
  const opacityAnimation = useSpring({
    opacity: 1,
    delay: delay,
    from: { opacity: 0 }
  });
  return (
    <animated.div style={opacityAnimation} className="weather-row">
      <WeatherIcon iconName={icon} />
      <span>{label}</span>
      <div>
        <animated.span>
          {numberAnimation.number.interpolate(round)}
        </animated.span>
        {children}
      </div>
    </animated.div>
  );
};

export default WeatherConditionItem;