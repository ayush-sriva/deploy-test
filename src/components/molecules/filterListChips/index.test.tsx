import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import FilterChips from "./index";
const onDelete = jest.fn();
it("renders mui icons", () => {
  render(<FilterChips text="UI/UX Designer" index={1} />);
  const testIcon = screen.getByTestId("chips");
  expect(testIcon).toBeInTheDocument();
});
