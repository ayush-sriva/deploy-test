import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Icon from ".";
import save from "../../../assets/icons/save.svg";
export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    src: {
      control: "text",
      description: "The source of the icon",
      defaultValue: save,
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: save,
};
