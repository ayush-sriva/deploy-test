import { ComponentStory, ComponentMeta } from "@storybook/react";
import AutoComplete from "./index";

import { stateOptions, skillOptions } from "./constants";
export default {
  title: "Molecules/AutoComplete",
  component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = (args) => (
  <AutoComplete {...args} />
);

export const Location = Template.bind({});
Location.args = {
  title: "Where do you want to work?",
  placeholder: "Enter your Job Location",
  option: stateOptions,
  setValue: () => {},
};

export const Skills = Template.bind({});
Skills.args = {
  title: "What do you want to do?",
  placeholder: "Enter your skills",
  option: skillOptions,
  setValue: () => {},
};
