/* eslint-disable react/react-in-jsx-scope */
import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  const { city, country } = location;
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={city} country={country} />
    </div>
  );
}

export default App;
