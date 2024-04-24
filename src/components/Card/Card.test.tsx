import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card component", () => {
  test("renders card content", () => {
    render(<Card />);

    const divElement = screen.getByRole("container");

    expect(divElement).toBeInTheDocument();
  });
});
