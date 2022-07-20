import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckBoxLabel from ".";

it("CheckBox Label should Render", () => {
  render(<CheckBoxLabel label="Full Time" />);
  const checkBoxElement = screen.getByText("Full Time");
  expect(checkBoxElement).toBeInTheDocument();
});
