/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */

import React from "react";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

function ForecastSummaries({ forecasts, onForecastSelect }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
          onSelect={onForecastSelect}
        />
      ))}
    </div>
  );
}

// JUST BELOW IS AN IMPLIED ARROW FUNCTION
// const ForecastSummaries = ({ forecasts }) => (
//   <div className="forecast-summaries">
//     {forecasts.map((forecast) => (
//       <ForecastSummary
//         key={forecast.date}
//         date={forecast.date}
//         description={forecast.description}
//         icon={forecast.icon}
//         temperature={forecast.temperature}
//       />
//     ))}
//   </div>
// );

// const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
//   return (
//     <div className="forecast-summaries">
//       {forecasts.map((forecast) => {
//         const { date, description, icon, temperature } = forecast;
//         return (
//           <ForecastSummary
//             key={date}
//             date={date}
//             description={description}
//             icon={icon.toString()}
//             temperature={temperature}
//             onSelect={onForecastSelect}
//           />
//         );
//       })}
//     </div>
//   );
// };

export default ForecastSummaries;
