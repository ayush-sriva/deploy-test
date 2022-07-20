import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import JobSearch from "./index";

it("renders Job Search Bar", () => {
  render(<JobSearch />);
  const testIcon = screen.getByTestId("jobsearch");
  expect(testIcon).toBeInTheDocument();
});
it("Search Button Should Work", () => {
  render(<JobSearch />);
  const searchButton = screen.getByTestId("handleSearchButton");
  fireEvent.click(searchButton);
  expect(searchButton).toBeInTheDocument();
});
