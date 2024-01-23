/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import "../styles/App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App() {
  const [forecasts, setForecasts] = useState([]);

  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  function handleForecastSelect(date) {
    setSelectedDate(date);
  }

  const getForecast = () => {
    const endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
    // axios.get(endpoint).then((response) => console.log(response.data));
    axios.get(endpoint).then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    });
  };

  useEffect(() => {
    getForecast();
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
