import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./index";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primarycheckbox = Template.bind({});
Primarycheckbox.args = {};
