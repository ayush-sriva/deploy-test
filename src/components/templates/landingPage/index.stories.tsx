import { ComponentStory, ComponentMeta } from "@storybook/react";
import LandingPage from "./index";

export default {
  title: "Templates/LandingPage",
  component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = (args) => (
  <LandingPage {...args} />
);

export const Main = Template.bind({});
Main.args = {};
