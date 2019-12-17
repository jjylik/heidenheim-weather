import React from 'react';
import WeatherIcon from './WeatherIcon';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<WeatherIcon iconName="icon" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});