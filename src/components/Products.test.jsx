import React from "react";
import { screen, render } from "@testing-library/react";
import Products from "./Products";

describe("ProductsPageTests", () => {
  test("should render without error", () => {
    render(<Products />);
    expect(screen.getByText("Hide Sold Items")).toBeInTheDocument();
  });
  test("should retrieve products", () => {
    render(<Products />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
