import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomTabs from ".";
import Icon from "../../atoms/icon";
import bike from "../../../assets/icons/bike.svg";
import bus from "../../../assets/icons/bus.svg";
import car from "../../../assets/icons/car.svg";
import train from "../../../assets/icons/train.svg";
import selectedbus from "../../../assets/icons/SelectedBus.svg";
import selectedcar from "../../../assets/icons/selectedCar.svg";
//import {BrowserRouter} from 'react-router-dom';

const tabs = [
  {
    value: 0,
    label: "HELLOW2",

  },
  {
    value: 1,
    label: "",
  },
];

const mockCallback = jest.fn();

test("should render 2 tabs for 2 length data", () => {
  render(<CustomTabs tabs={tabs} stateHandler={mockCallback}></CustomTabs>);
  const tabsElement = screen.getAllByTestId(/tab-/);
  expect(tabsElement.length).toBe(2);
});

test("tabs should be present in document", () => {
  render(<CustomTabs tabs={tabs} stateHandler={mockCallback}></CustomTabs>);
  const selectElement = screen.getByTestId("tabbox");
  expect(selectElement).toBeInTheDocument();
});

test("change tabs", () => {
  render(<CustomTabs tabs={tabs} stateHandler={mockCallback}></CustomTabs>);
  const selectElement = screen.getAllByRole("tab");
  fireEvent.click(selectElement[1]);
  screen.debug(undefined, Infinity);
});
