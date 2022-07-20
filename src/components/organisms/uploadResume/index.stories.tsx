import { ComponentStory, ComponentMeta } from "@storybook/react";
import UploadResume from "./index";

export default {
  title: "Organisms/Upload Resume",
  component: UploadResume,
} as ComponentMeta<typeof UploadResume>;

const Template: ComponentStory<typeof UploadResume> = (args) => (
  <UploadResume {...args} />
);

export const Default = Template.bind({});
Default.args = {};
