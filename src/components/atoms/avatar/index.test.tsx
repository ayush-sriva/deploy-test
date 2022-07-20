import { render, screen } from "@testing-library/react";
import Avatar from ".";
import "@testing-library/jest-dom";

it("should renders the avatar", () => {
  render(<Avatar name={"Abc"} />);
  const ReactElement = screen.getByTestId("avatar");
  expect(ReactElement).toBeInTheDocument();
});
