import { screen, render } from "@testing-library/react";
import Checkbox from ".";
import "@testing-library/jest-dom";

it("CheckBox should Render", () => {
  render(<Checkbox/>);
  const checkBoxElement = screen.getByTestId("checkbox");
  expect(checkBoxElement).toBeInTheDocument();
});
