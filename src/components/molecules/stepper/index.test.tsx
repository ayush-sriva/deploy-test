import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stepper from ".";
import { steps } from "../../pages/landingPage/constants";

it("Stepper Component should Render", () => {
  render(<Stepper active={2} steps={steps} />);
  const stepperElement = screen.getByTestId("stepper");
  expect(stepperElement).toBeInTheDocument();
});
