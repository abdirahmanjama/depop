import React from "react";
import { screen, render } from "@testing-library/react";
import CustomAlert from "./CustomAlert";

describe("Custom Alert Tests", () => {
  test("should render without error", () => {
    render(<CustomAlert />);
  });
});
