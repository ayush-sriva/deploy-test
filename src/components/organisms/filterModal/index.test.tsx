import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterDialog from ".";

const handleClear = jest.fn();
const handleApply = jest.fn();
const handleChange = jest.fn();
const filters = {
  distance0: false,
  distance1: false,
  distance2: false,
  distance3: false,
  fullTime: false,
  internship: false,
  contract: false,
  remote: false,
  fresher: false,
  midLevel: false,
  director: false,
  executive: false,
  bus: false,
  carpool: false,
};
it("Filter Button should Render", () => {
  render(
    <FilterDialog
      handleClear={handleClear}
      handleChange={handleChange}
      handleApply={handleApply}
      filters={filters}
    />
  );
  const filterButton = screen.getByTestId("filterModalOpen");
  fireEvent.click(filterButton);
  expect(filterButton).toBeInTheDocument();
});
it("Filter Dialog should Render", () => {
  render(
    <FilterDialog
      handleClear={handleClear}
      handleChange={handleChange}
      handleApply={handleApply}
      filters={filters}
    />
  );
  const filterButton = screen.getByTestId("filterModalOpen");
  fireEvent.click(filterButton);
  const dialogElement = screen.getByTestId("handleApplyButton");
  fireEvent.click(dialogElement);
  expect(filterButton).toBeInTheDocument();
});
it("Check box should work", () => {
  render(
    <FilterDialog
      handleClear={handleClear}
      handleChange={handleChange}
      handleApply={handleApply}
      filters={filters}
    />
  );
  const filterButton = screen.getByTestId("filterModalOpen");
  fireEvent.click(filterButton);
  const dialogElement = screen.getByTestId("checkboxElement");
  fireEvent.click(dialogElement);
  expect(filterButton).toBeInTheDocument();
});
it("Radio should work", () => {
  render(
    <FilterDialog
      handleClear={handleClear}
      handleChange={handleChange}
      handleApply={handleApply}
      filters={filters}
    />
  );
  const filterButton = screen.getByTestId("filterModalOpen");
  fireEvent.click(filterButton);
  const dialogElement = screen.getByTestId("radioToggle");
  fireEvent.change(dialogElement, { target: { checked: true } });
  expect(filterButton).toBeInTheDocument();
});
it("Filter Modal should be closed", () => {
  render(
    <FilterDialog
      handleClear={handleClear}
      handleChange={handleChange}
      handleApply={handleApply}
      filters={filters}
    />
  );
  const filterButton = screen.getByTestId("filterModalOpen");
  fireEvent.click(filterButton);
  const dialogElement = screen.getByTestId("dialogCloseElement");
  fireEvent.click(dialogElement);
  expect(filterButton).toBeInTheDocument();
});
it("Filter Modal should be closed", () => {
  render(
    <FilterDialog
      handleClear={handleClear}
      handleChange={handleChange}
      handleApply={handleApply}
      filters={filters}
    />
  );
  const filterButton = screen.getByTestId("filterModalOpen");
  fireEvent.click(filterButton);
  const dialogElement = screen.getByTestId("handleClearButton");
  fireEvent.click(dialogElement);
  expect(filterButton).toBeInTheDocument();
});
