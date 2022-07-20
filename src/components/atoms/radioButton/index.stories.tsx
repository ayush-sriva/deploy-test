import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioButton from "./index";

export default {
  title: "Atoms/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {};
