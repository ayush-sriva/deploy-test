import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import JobTitleCard from "./JobTitleCard";
import MyntraLogo from "../../../assets/icons/myntra.svg";

export default {
  title: "Molecules/JobTitleCard",
  component: JobTitleCard,
} as ComponentMeta<typeof JobTitleCard>;

const Template: ComponentStory<typeof JobTitleCard> = (args) => (
  <JobTitleCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  companyLogo: MyntraLogo,
  companyName: "Myntra",
  jobTitle: "User Experience Designer",
  companyAddress: "Hitech city, Hyderabad - 500072",
  jobUploadedTime: "36 min ago",
};
