import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingTemplate from ".";

it("Radio Button should Render", () => {
  render(<LandingTemplate />);
  const pageElement = screen.getByTestId("svgBackground");
  expect(pageElement).toBeInTheDocument();
});
