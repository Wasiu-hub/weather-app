/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import App from "../../components/App";
import forecast from "../../data/forecast.json";

describe("App", () => {
  // NOTE: WHEN THIS IS NOT COMMENTED OUT (for weather App in App.js)
  // test("renders learn react link", () => {
  //   // eslint-disable-next-line react/react-in-jsx-scope
  //   // render(<App location={{}} />);
  //   // render(<App location />);
  //   const linkElement = screen.getByText(/Weather App/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  test("renders App component correctly", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
