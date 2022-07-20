import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomePage from '.';

export default {
  title: 'components/pages/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const MainHomePage = Template.bind({});
