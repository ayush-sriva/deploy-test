import { ComponentStory, ComponentMeta } from "@storybook/react";
import SavedJobs from ".";
export default {
  title: "Molecules/SavedJobs",
  component: SavedJobs,
} as ComponentMeta<typeof SavedJobs>;
const onClick = () => {};
const Template: ComponentStory<typeof SavedJobs> = (props) => (
  <SavedJobs jobs={props.jobs} onClick={onClick} />
);

export const Main = Template.bind({});
