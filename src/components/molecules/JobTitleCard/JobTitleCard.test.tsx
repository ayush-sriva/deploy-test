import React from "react";
import { screen,render } from "@testing-library/react";
import JobTitleCard from "./JobTitleCard";
import MyntraLogo from "../../../assets/icons/myntra.svg";
import "@testing-library/jest-dom/extend-expect";

describe("JobTitle Card component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <JobTitleCard
        id={1}
        companyLogo={MyntraLogo}
        companyName={"Myntra"}
        jobTitle={"User Experience Designer"}
        companyAddress={"Hitech city, Hyderabad - 500072"}
        jobUploadedTime={"36 min ago"}
      />
    );
    const testIcon = screen.getByTestId("jobTitleCard");
    expect(testIcon).toBeInTheDocument();
  });
});
