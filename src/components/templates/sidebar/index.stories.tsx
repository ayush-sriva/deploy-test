import { ComponentStory, ComponentMeta } from "@storybook/react";
import Sidebar from "./index";
export default {
  title: "Templates/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = ({location}) => <Sidebar location={location}/>;

export const Main = Template.bind({});

Main.args = {
  location: "East Marredpally, Secunderabad"
}