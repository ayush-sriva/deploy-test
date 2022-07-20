import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Sidebar from "./index";
import { MemoryRouter } from "react-router-dom";
const jobs = [
  {
    id: 1,
    time: "4 days ago",
    title: "User Experience Designer",
    companyName: "Myntra",
    companyIcon: "/assets/icons/myntra.svg",
    location: "Hyderabad, Telangana, India",
    description:
      "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
    about:
      "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.Excellent written and oral communication and presentation skills  SEE MORE",
    greenCommute: true,
    experienceLevel: "Fresher",
    jobType: "Internship",
    datePosted: "Past 24 Hours",
    distance: "6",
  },
  {
    id: 2,
    time: "10 Days ago",
    title: "Product Designer",
    companyName: "BMW",
    companyIcon: "/assets/icons/bmw.svg",
    location: "Hyderabad , Telangana,India",
    description:
      "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
    about:
      "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products. Excellent written and oral communication and presentation skills  SEE MORE",
    greenCommute: true,
    experienceLevel: "Mid Level",
    jobType: "Contract",
    datePosted: "Past Week",
    distance: "22",
  },
];

const savedJobs = [
  {
    id: 1,
    time: "4 days ago",
    title: "User Experience Designer",
    companyName: "Myntra",
    companyIcon: "/assets/icons/myntra.svg",
    location: "Hyderabad, Telangana, India",
    description:
      "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
    about:
      "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.Excellent written and oral communication and presentation skills  SEE MORE",
    greenCommute: true,
    experienceLevel: "Fresher",
    jobType: "Internship",
    datePosted: "Past 24 Hours",
    distance: "6",
  },
  {
    id: 2,
    time: "10 Days ago",
    title: "Product Designer",
    companyName: "BMW",
    companyIcon: "/assets/icons/bmw.svg",
    location: "Hyderabad , Telangana,India",
    description:
      "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
    about:
      "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products. Excellent written and oral communication and presentation skills  SEE MORE",
    greenCommute: true,
    experienceLevel: "Mid Level",
    jobType: "Contract",
    datePosted: "Past Week",
    distance: "22",
  },
];

const setJobs = jest.fn();
const setSavedJobs = jest.fn();
it("renders sidebar", () => {
  render(
    <MemoryRouter>
      <Sidebar
        location="East Marredpally, Secunderabad"
        jobs={jobs}
        setJobs={setJobs}
        savedJobs={savedJobs}
        setSavedJobs={setSavedJobs}
        index={1}
      />
    </MemoryRouter>
  );
  const testIcon = screen.getByTestId("sidebar");
  expect(testIcon).toBeInTheDocument();
});