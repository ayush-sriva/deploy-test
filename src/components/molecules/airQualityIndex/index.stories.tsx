import { ComponentStory, ComponentMeta } from "@storybook/react";
import AirQualityIndex from "./index";
export default {
  title: "molecules/AirQualityIndex",
  component: AirQualityIndex,
} as ComponentMeta<typeof AirQualityIndex>;

const Template: ComponentStory<typeof AirQualityIndex> = (args) => <AirQualityIndex {...args} />;

export const Main = Template.bind({});
Main.args = {
    airQuality: "1600"
}