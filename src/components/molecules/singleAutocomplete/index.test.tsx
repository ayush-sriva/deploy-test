import { screen, render, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import SingleAutoComplete from ".";

const onChange = jest.fn();

it("AutoComplete should Render", () => {
  render(
    <SingleAutoComplete
      options={[
        "UI/UX Designer",
        "Full Stack Developer",
        "Front End Engineer",
        "Back End Engineer",
        "DevOps Engineer",
      ]}
      onChange={onChange}
    />
  );
  const radioElement = screen.getByRole("combobox");
  expect(radioElement).toBeInTheDocument();
});

it("Radio Button should Render", async () => {
  render(
    <SingleAutoComplete
      options={[
        "UI/UX Designer",
        "Full Stack Developer",
        "Front End Engineer",
        "Back End Engineer",
        "DevOps Engineer",
      ]}
      onChange={onChange}
    />
  );
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "UI/UX Designer" } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
});
