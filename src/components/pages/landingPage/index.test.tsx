import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from ".";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import "@testing-library/jest-dom";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
const getUserLocation = jest.fn();
it("Registration Page Should Render", async () => {
  const data = [
    {
      id: 1,
      name: "Hyderabad",
      aqi_value: 894,
    },
    {
      id: 2,
      name: "Mumbai",
      aqi_value: 953,
    },
    {
      id: 3,
      name: "Haryana",
      aqi_value: 358,
    },
    {
      id: 4,
      name: "New Delhi",
      aqi_value: 564,
    },
    {
      id: 5,
      name: "Punjab",
      aqi_value: 786,
    },
    {
      id: 6,
      name: "Chandigarh",
      aqi_value: 656,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <MemoryRouter>
      <LandingPage getUserLocation={getUserLocation} />
    </MemoryRouter>
  );
  const buttonElement = await screen.findByTestId("handleNextStepper");
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});
it("Next Button Should Work", async () => {
  const data = [
    {
      id: 1,
      name: "Hyderabad",
      aqi_value: 894,
    },
    {
      id: 2,
      name: "Mumbai",
      aqi_value: 953,
    },
    {
      id: 3,
      name: "Haryana",
      aqi_value: 358,
    },
    {
      id: 4,
      name: "New Delhi",
      aqi_value: 564,
    },
    {
      id: 5,
      name: "Punjab",
      aqi_value: 786,
    },
    {
      id: 6,
      name: "Chandigarh",
      aqi_value: 656,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <MemoryRouter>
      <LandingPage getUserLocation={getUserLocation} />
    </MemoryRouter>
  );
  const buttonElement = await screen.findByTestId("handleNextStepper");
  fireEvent.click(buttonElement);
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "Hyderabad" } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  fireEvent.click(buttonElement);
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});
it("Next Button Should Work", () => {
  const data = [
    {
      id: 1,
      name: "Hyderabad",
      aqi_value: 894,
    },
    {
      id: 2,
      name: "Mumbai",
      aqi_value: 953,
    },
    {
      id: 3,
      name: "Haryana",
      aqi_value: 358,
    },
    {
      id: 4,
      name: "New Delhi",
      aqi_value: 564,
    },
    {
      id: 5,
      name: "Punjab",
      aqi_value: 786,
    },
    {
      id: 6,
      name: "Chandigarh",
      aqi_value: 656,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <MemoryRouter>
      <LandingPage getUserLocation={getUserLocation} />
    </MemoryRouter>
  );

  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "Hyderabad" } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });

  expect(input).toBeInTheDocument();
});
it("Next Button Should Work", async () => {
  const data = [
    {
      id: 1,
      name: "Hyderabad",
      aqi_value: 894,
    },
    {
      id: 2,
      name: "Mumbai",
      aqi_value: 953,
    },
    {
      id: 3,
      name: "Haryana",
      aqi_value: 358,
    },
    {
      id: 4,
      name: "New Delhi",
      aqi_value: 564,
    },
    {
      id: 5,
      name: "Punjab",
      aqi_value: 786,
    },
    {
      id: 6,
      name: "Chandigarh",
      aqi_value: 656,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <MemoryRouter>
      <LandingPage getUserLocation={getUserLocation} />
    </MemoryRouter>
  );
  const buttonElement = await screen.getByTestId("handleNextStepper");
  fireEvent.click(buttonElement);
  fireEvent.click(buttonElement);
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "UI/UX Designer" } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });

  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});
it("Next Button Should Work", async () => {
  const data = [
    {
      id: 1,
      name: "Hyderabad",
      aqi_value: 894,
    },
    {
      id: 2,
      name: "Mumbai",
      aqi_value: 953,
    },
    {
      id: 3,
      name: "Haryana",
      aqi_value: 358,
    },
    {
      id: 4,
      name: "New Delhi",
      aqi_value: 564,
    },
    {
      id: 5,
      name: "Punjab",
      aqi_value: 786,
    },
    {
      id: 6,
      name: "Chandigarh",
      aqi_value: 656,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <MemoryRouter>
      <LandingPage getUserLocation={getUserLocation} />
    </MemoryRouter>
  );
  const buttonElement = await screen.getByTestId("handleNextStepper");
  fireEvent.click(buttonElement);
  const buttonElementBack = screen.getByTestId("handleBackStepper");
  fireEvent.click(buttonElementBack);
  expect(buttonElement).toBeInTheDocument();
});
