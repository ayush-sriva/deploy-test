import { render, screen } from "@testing-library/react";
import AirQualityIndex from ".";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(
      <AirQualityIndex airQuality="1600"></AirQualityIndex>
  );
  const linkElement = screen.getByTestId("aqi");
  expect(linkElement).toBeInTheDocument();
})
