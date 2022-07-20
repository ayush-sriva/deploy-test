import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import SavedJobs from "./index";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
it("renders navbar", () => {
  render(
    <MemoryRouter>
      <SavedJobs jobs={[]} setJobs={jest.fn()} />
    </MemoryRouter>
  );
  const testIcon = screen.getByTestId("savedJobs");
  expect(testIcon).toBeInTheDocument();
});
it("Handle Card Click", async () => {
  const data = [
    {
      id: 66,
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
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <MemoryRouter>
      <SavedJobs
        jobs={[
          {
            id: 66,
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
        ]}
        setJobs={jest.fn()}
      />
    </MemoryRouter>
  );
  const cardElement = await screen.findByTestId("jobCardElement");
  fireEvent.click(cardElement);
});
