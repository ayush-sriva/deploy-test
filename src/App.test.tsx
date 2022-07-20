import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./App";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import "@testing-library/jest-dom";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
it("Registration Page Should Render", async () => {
  const jobs = [
    {
      id: 1,
      description:
        "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
      createdAt: "Past 24 Hours",
      company: {
        id: 4,
        name: "HP",
        description:
          "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
        about:
          "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products. Excellent written and oral communication and presentation skills  SEE MORE",
        logo: "/images/hp.png",
      },
      skill: {
        id: 2,
        name: "UI/UX Designer",
      },
      location: {
        id: 1,
        pin: 110085,
        name: "Hyderabad",
        aqi: 894,
      },
    },
    {
      id: 2,
      description:
        "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
      createdAt: "Past Week",
      company: {
        id: 1,
        name: "Myntra",
        description:
          "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
        about:
          "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products. Excellent written and oral communication and presentation skills  SEE MORE",
        logo: "/images/myntra.png",
      },
      skill: {
        id: 3,
        name: "Full Stack Developer",
      },
      location: {
        id: 2,
        pin: 110085,
        name: "Mumbai",
        aqi: 953,
      },
    },
    {
      id: 3,
      description:
        "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
      createdAt: "Past Month",
      company: {
        id: 3,
        name: "Instagram",
        description:
          "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
        about:
          "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products. Excellent written and oral communication and presentation skills  SEE MORE",
        logo: "/images/instagram.png",
      },
      skill: {
        id: 2,
        name: "UI/UX Designer",
      },
      location: {
        id: 1,
        pin: 110085,
        name: "Hyderabad",
        aqi: 894,
      },
    },
    {
      id: 4,
      description:
        "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
      createdAt: "Past Month",
      company: {
        id: 4,
        name: "HP",
        description:
          "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
        about:
          "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products. Excellent written and oral communication and presentation skills  SEE MORE",
        logo: "/images/hp.png",
      },
      skill: {
        id: 1,
        name: "Product Designer",
      },
      location: {
        id: 4,
        pin: 110085,
        name: "New Delhi",
        aqi: 564,
      },
    },
  ];

  const savedJobs = [
    {
      id: 17,
      user: {
        id: 1,
        email: "gayatri@gmail.com",
        name: "Gayatri",
        location: {
          id: 1,
          pin: 110085,
          name: "Hyderabad",
          aqi: 894,
        },
        password: "12345",
      },
      job: {
        id: 1,
        description:
          "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
        createdAt: "Past 24 Hours",
        company: {
          id: 4,
          name: "HP",
          description:
            "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
          about:
            "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products. Excellent written and oral communication and presentation skills  SEE MORE",
          logo: "/images/hp.png",
        },
        skill: {
          id: 2,
          name: "UI/UX Designer",
        },
        location: {
          id: 1,
          pin: 110085,
          name: "Hyderabad",
          aqi: 894,
        },
      },
      applied: 0,
    },
    {
      id: 19,
      user: {
        id: 1,
        email: "gayatri@gmail.com",
        name: "Gayatri",
        location: {
          id: 1,
          pin: 110085,
          name: "Hyderabad",
          aqi: 894,
        },
        password: "12345",
      },
      job: {
        id: 2,
        description:
          "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
        createdAt: "Past Week",
        company: {
          id: 1,
          name: "Myntra",
          description:
            "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
          about:
            "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products. Excellent written and oral communication and presentation skills  SEE MORE",
          logo: "/images/myntra.png",
        },
        skill: {
          id: 3,
          name: "Full Stack Developer",
        },
        location: {
          id: 2,
          pin: 110085,
          name: "Mumbai",
          aqi: 953,
        },
      },
      applied: 0,
    },
  ];
  const resp = { jobs: jobs, savedJobs: savedJobs };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const buttonElement = await screen.findByTestId("handleNextStepper");
  fireEvent.click(buttonElement);

  expect(buttonElement).toBeInTheDocument();
});
