import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilterListChips from "./index";
export default {
  title: "molecules/FilterListChips",
  component: FilterListChips,
} as ComponentMeta<typeof FilterListChips>;

const Template: ComponentStory<typeof FilterListChips> = (args) => <FilterListChips {...args} />;

export const Main = Template.bind({});
Main.args = {
    text: "UI/UX Designer"
}