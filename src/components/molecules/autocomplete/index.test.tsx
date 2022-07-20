import { screen, render, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import AutoComplete from ".";

const setValue = jest.fn();

it("AutoComplete should Render", () => {
  render(
    <AutoComplete
      title="Where do you want to work"
      placeholder="Enter your job"
      option={[
        { title: "UI/UX Designer" },
        { title: "Full Stack Developer" },
        { title: "Front End Engineer" },
        { title: "Back End Engineer" },
        { title: "DevOps Engineer" },
      ]}
      setValue={setValue}
      selectedValue={[]}
    />
  );
  const radioElement = screen.getByTestId("autoCompleteLabel");
  expect(radioElement).toBeInTheDocument();
});

it("Radio Button should Render", () => {
  render(
    <AutoComplete
      title="Where do you want to work"
      placeholder="Enter your job"
      option={[
        { title: "UI/UX Designer" },
        { title: "Full Stack Developer" },
        { title: "Front End Engineer" },
        { title: "Back End Engineer" },
        { title: "DevOps Engineer" },
      ]}
      setValue={setValue}
      selectedValue={[]}
    />
  );
  const inputElement = screen.getByTestId("autocompleteInput");
  fireEvent.focus(inputElement);
  expect(inputElement).toBeInTheDocument();
});
it("Radio Button should Render", async () => {
  render(
    <AutoComplete
      title="Where do you want to work"
      placeholder="Enter your job"
      option={[
        { title: "UI/UX Designer" },
        { title: "Full Stack Developer" },
        { title: "Front End Engineer" },
        { title: "Back End Engineer" },
        { title: "DevOps Engineer" },
      ]}
      setValue={setValue}
      selectedValue={[]}
    />
  );
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "UI/UX Designer" } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
});
