import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckBoxLabel from "./index";

export default {
  title: "Molecules/CheckBoxLabel",
  component: CheckBoxLabel,
} as ComponentMeta<typeof CheckBoxLabel>;

const Template: ComponentStory<typeof CheckBoxLabel> = (args) => (
  <CheckBoxLabel {...args} />
);

export const DistanceCheckBox = Template.bind({});
DistanceCheckBox.args = {
  label: "10-20 Kms",
};

export const JobTypeCheckBox = Template.bind({});
JobTypeCheckBox.args = {
  label: "Full Time",
};

export const ExperienceCheckBox = Template.bind({});
ExperienceCheckBox.args = {
  label: "Fresher",
};
