import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SavedJobs from "./index";
it("renders saved jobs", () => {
  render(<SavedJobs onClick={jest.fn()} jobs={[]} />);
  const testIcon = screen.getByTestId("savedjobs");
  expect(testIcon).toBeInTheDocument();
});
