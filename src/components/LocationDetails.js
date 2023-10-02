import React from "react";

// function LocationDetails({props}) // why not?
function LocationDetails(props) {
  const { city, country } = props;
  return <h1>{`${city}, ${country}`}</h1>;
}

export default LocationDetails;
