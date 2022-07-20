import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UploadResume from ".";

it("Upload Resume should Render", () => {
  render(<UploadResume />);
  const buttonElement = screen.getByTestId("openUploadDialog");
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});

it("Upload File Button should Render", () => {
  render(<UploadResume />);
  const buttonElement = screen.getByTestId("openUploadDialog");
  fireEvent.click(buttonElement);
  const uploadbuttonElement = screen.getByTestId("uploadFileElement");
  fireEvent.click(uploadbuttonElement);
  expect(uploadbuttonElement).toBeInTheDocument();
});
