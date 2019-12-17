import React from 'react';
import CurrentWeather from './CurrentWeather';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const currentWeather = {
    uvIndex: 0,
    temperature: 12.3,
    summary: "Partially cloudy",
    icon: "cloudy",
    precipProbability: 0.3
  }
  const tree = renderer
    .create(<CurrentWeather currentWeather={currentWeather} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});