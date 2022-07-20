import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilterDialog from "./index";

export default {
  title: "Organisms/FilterDialog",
  component: FilterDialog,
} as ComponentMeta<typeof FilterDialog>;

const Template: ComponentStory<typeof FilterDialog> = (args) => (
  <FilterDialog {...args} />
);

export const Default = Template.bind({});
Default.args = {};
