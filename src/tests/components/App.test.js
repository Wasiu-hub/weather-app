/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App";

describe("App", () => {
  it("renders correctly", () => {
    render(<App />);
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
