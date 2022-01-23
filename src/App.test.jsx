import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

describe("ProductsPageTests", () => {
  test("should render without error", () => {
    render(<App />);
    expect(screen.getByText("Hide Sold Items")).toBeInTheDocument();
  });
  test("should contain dropdown menu - currentl hardcoded 4", () => {
    render(<App />);
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
