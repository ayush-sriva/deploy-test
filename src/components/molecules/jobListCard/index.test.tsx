import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import Myntra from "../../../assets/icons/myntra.svg";
import JobListCard from ".";
const mockCallback = jest.fn();
it("JobListCard should Render", () => {
  render(
    <JobListCard
      companyLogo={Myntra}
      company={"Myntra"}
      post={"User Experience Designer"}
      location={"Hitech city, Hyderabad - 500072"}
      time={"45 days ago"}
      onClick={mockCallback}
    />
  );
  const companyName = screen.getByText("Myntra");
  expect(companyName).toBeInTheDocument();
  const companyPost = screen.getByText("User Experience Designer");
  expect(companyPost).toBeInTheDocument();
});
