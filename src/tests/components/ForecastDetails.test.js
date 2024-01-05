/* eslint-disable prettier/prettier */
import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    humidity: "Stub humidity",
    temperature: {
      min: 12,
      max: 22,
    },
    wind: "Stub wind",
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
