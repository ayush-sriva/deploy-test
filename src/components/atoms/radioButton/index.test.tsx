import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RadioButton from ".";

it("Radio Button should Render", () => {
  render(<RadioButton />);
  const radioElement = screen.getByTestId("radioButton");
  expect(radioElement).toBeInTheDocument();
});
