import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

it("renders mui button", () => {
  render(
    <Button
      variant="text"
      color="primary"
      focusColor="#F1EDF5"
      hoverColor="#F1EDF5"
    >
      Save
    </Button>
  );
  const testIcon = screen.getByTestId("Button");
  expect(testIcon).toBeInTheDocument();
});