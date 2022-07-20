import { screen, render, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import SingleAutoComplete from ".";
import work from "../../../assets/icons/work.svg";
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
      icon={work}
      placeholder="Enter your skills"
      width="44%"
      marginLeft="0px"
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
      icon={work}
      placeholder="Enter your skills"
      width="44%"
      marginLeft="0px"
    />
  );
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "UI/UX Designer" } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
});
