/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React from "react";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-summary">
      <div className="forecast-details">{formattedDate}</div>

      <div className="forecast-details__temperature">
        Max Temperature: {temperature.max} &deg;C
      </div>
      <div className="forecast-details__temperature">
        Min Temperature: {temperature.min} &deg;C
      </div>
      <div className="forecast-details__wind">Wind Speed: {wind.speed}mph</div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
    </div>
  );
}

export default ForecastDetails;
