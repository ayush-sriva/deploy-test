import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobList from "./index";
import hpIcon from "../../../assets/icons/hp.svg";
import Myntra from "../../../assets/icons/myntra.svg";
import Instagram from "../../../assets/icons/instagram.svg";

export default {
  title: "Organisms/JobList",
  component: JobList,
} as ComponentMeta<typeof JobList>;

const Template: ComponentStory<typeof JobList> = (args) => (
  <JobList {...args} />
);
const onClick = () => {};
export const Main = Template.bind({});
Main.args = {
  title: "Recommended for you",
  subHeading: "Based on your profile, skills and search history",
  jobs: [
    {
      companyLogo: hpIcon,
      company: "HP",
      post: "User Experience Designer",
      location: "Hitech city, Hyderabad - 500072",
      time: "1hr 36 mins ago",
    },
    {
      companyLogo: Myntra,
      company: "Myntra",
      post: "User Experience Designer",
      location: "Hitech city, Hyderabad - 500072",
      time: "4 days ago",
    },
    {
      companyLogo: Instagram,
      company: "Meta",
      post: "User Experience Designer",
      location: "Hitech city, Hyderabad - 500072",
      time: "45 mins ago",
    },
  ],
  onClick: onClick 
};
