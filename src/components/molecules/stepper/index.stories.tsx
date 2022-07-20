import { ComponentStory, ComponentMeta } from "@storybook/react";
import StepperComponent from "./index";
import Typography from "@mui/material/Typography";

const steps = [
  <Typography variant="subtitle1">Your Location</Typography>,
  <Typography variant="subtitle2">Job Location</Typography>,
  <Typography variant="subtitle2">Your Skills</Typography>,
];
export default {
  title: "Molecules/Stepper",
  component: StepperComponent,
} as ComponentMeta<typeof StepperComponent>;

const Template: ComponentStory<typeof StepperComponent> = (args) => (
  <StepperComponent {...args} />
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  active: 1,
  steps: steps,
};
