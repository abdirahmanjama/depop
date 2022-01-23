import React from "react";
import { screen, render } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Header/Nav Tests", () => {
  test("should render without error", () => {
    render(<Navigation />);
  });
});
