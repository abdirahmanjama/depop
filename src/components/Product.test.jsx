import React from "react";
import { screen, render } from "@testing-library/react";
import Product from "./Product";

describe("Product Page Tests", () => {
  test("should render without error", () => {
    render(
      <Product brand="Nike" size="m" price="3.40" img="asas" sold={false} />
    );
    expect(screen.getByText("Nike")).toBeInTheDocument();
  });

  test("should add the word 'size' to the size prop if it does not exist already", () => {
    render(
      <Product brand="Nike" size="m" price="3.40" img="asas" sold={false} />
    );
    expect(screen.getByText("Size m")).toBeInTheDocument();
  });

  test("should add pound sign to price", () => {
    render(
      <Product brand="Nike" size="m" price="3.40" img="asas" sold={false} />
    );
    expect(screen.getByText("£3.40")).toBeInTheDocument();
  });

  //   test("should mark product as liked (red as shown in design) according to boolean value: toggleLike ", () => {
  //     render(
  //       <Product brand="Nike" size="m" price="3.40" img="asas" sold={false} />
  //     );
  //     expect(screen.getBy("£3.40")).toBeInTheDocument();
  //   });
});
