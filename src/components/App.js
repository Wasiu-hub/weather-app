/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import "../styles/App.css";
import React, { useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  const { city, country } = location;

  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  function handleForecastSelect(date) {
    setSelectedDate(date);
  }

  return (
    <div className="weather-app">
      {/* <h1>Weather App</h1> */}
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
}

export default App;
