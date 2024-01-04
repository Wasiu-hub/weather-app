/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React from "react";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>

      <div className="forecast-summary__temperature">
        Max Temperature: {temperature.max} &deg;C
      </div>
      <div className="forecast-summary__temperature">
        Min Temperature: {temperature.min} &deg;C
      </div>
      <div className="forecast-summary__wind">Wind Speed: {wind.speed}mph</div>
      <div className="forecast-summary__humidity">Humidity: {humidity}%</div>
    </div>
  );
}

export default ForecastDetails;
