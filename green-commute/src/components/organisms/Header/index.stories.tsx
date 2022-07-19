import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '.';

export default {
  title: 'components/organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const AppHeader = Template.bind({});

AppHeader.args = {
  userLocation: 'East Maredpally, Secunderabad',
};
