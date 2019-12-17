import React, { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    fetch('/api/weather', {
      method: 'GET',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json',},

    }).then((response) => response.json())
    .then((responseJson) => {
      return setCurrentWeather(responseJson.currently)
    })
  }, [])

  if (currentWeather) {
    return (
      <div className="App container">
        <CurrentWeather currentWeather={currentWeather} />
      </div>
    );
  }
  return (
    <div className="App container">
      <span>Loading...</span>
    </div>
  );
}

export default App;
