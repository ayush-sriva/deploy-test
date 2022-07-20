import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobSearch from "./index";
export default {
  title: "Organisms/Job Search",
  component: JobSearch,
} as ComponentMeta<typeof JobSearch>;

const Template: ComponentStory<typeof JobSearch> = () => (
  <JobSearch  />
);

export const Main = Template.bind({});

