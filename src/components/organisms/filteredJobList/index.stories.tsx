import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilteredJobList from "./index";
import myntra from "../../../../public/assets/icons/myntra.svg";
import instagram from "../../../assets/icons/instagram.svg";
import bmw from "../../../assets/icons/bmw.svg";
export default {
  title: "Organisms/FilteredJobList",
  component: FilteredJobList,
} as ComponentMeta<typeof FilteredJobList>;

const Template: ComponentStory<typeof FilteredJobList> = (args) => (
  <FilteredJobList {...args} />
);
const onClick = () => {};
export const Main = Template.bind({});
Main.args = {
  jobObj: {
    id: 1,
    time: "4 days ago",
    title: "User Experience Designer",
    companyName: "Myntra",
    companyIcon: myntra,
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
  jobs: [
    {
      id: 1,
      time: "4 days ago",
      title: "User Experience Designer",
      companyName: "Myntra",
      companyIcon: myntra,
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
      companyIcon: bmw,
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
    {
      id: 3,
      time: "45 min ago",
      title: "User Experience Designer",
      companyName: "Instagram",
      companyIcon: instagram,
      location: "Hyderabad , Telangana,India",
      description:
        "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
      about:
        "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products. Excellent written and oral communication and presentation skills  SEE MORE",
      greenCommute: true,
      experienceLevel: "Executive",
      jobType: "Full time",
      datePosted: "Past month",
      distance: "32",
    },
  ],
  onClick: onClick,
  title: "Recommended for you",
  subHeading: "Based on your profile, skills and search history",
  currindex: 1
};
