import React from 'react';
import WeatherConditionItem from './WeatherConditionItem';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<WeatherConditionItem delay={200} label="Rain chance" value={200} ><span>Hello</span></WeatherConditionItem>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});