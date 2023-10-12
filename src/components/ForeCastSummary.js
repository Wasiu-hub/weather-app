/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prefer-template */
import React from "react";
import iconData from "../data/iconData.json";

function ForecastSummary(props) {
  const { date, description, icon, temperature } = props;
  // console.log(icon);

  // eslint-disable-next-line prettier/prettier
  const weatherCode = icon.slice(0, 1) + "00"; // understand what's happening here
  // console.log(weatherCode);

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {/* {icon}ß */}
        <img src={iconData[weatherCode]} alt="Weather Icon" />
      </div>

      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

export default ForecastSummary;
