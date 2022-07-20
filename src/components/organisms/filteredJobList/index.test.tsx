import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import FilteredJobList from ".";
it("JobListCard should Render", () => {
  render(
    <FilteredJobList
      title="Recommended for you"
      subHeading="Based on your skills"
      jobs={[
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
      ]}
      onClick={jest.fn()}
      jobObj={{
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
          createdAt: "Past 24 Hour",
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
      }}
      currindex={1}
    />
  );
  const element = screen.getByText("Past 24 Hour");
  expect(element).toBeInTheDocument();
  const companyPost = screen.getByText("Past 24 Hours");
  expect(companyPost).toBeInTheDocument();
});
