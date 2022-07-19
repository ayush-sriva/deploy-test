import { ComponentStory, ComponentMeta } from '@storybook/react';
import LandingPage from './index';

export default {
  title: 'Components/Pages/LandingPage',
  component: LandingPage,
} as ComponentMeta<typeof LandingPage>;


const Template: ComponentStory<typeof LandingPage> = (args) => <LandingPage/>;

export const PrimaryTemplate = Template.bind({});