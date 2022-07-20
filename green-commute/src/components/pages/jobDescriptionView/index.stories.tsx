import { ComponentStory, ComponentMeta } from '@storybook/react';
import JobDescriptionView from '.';

export default {
  title: 'components/pages/JobDescriptionView',
  component: JobDescriptionView,
} as ComponentMeta<typeof JobDescriptionView>;

const Template: ComponentStory<typeof JobDescriptionView> = () => <JobDescriptionView />;

export const MainHomePage = Template.bind({});



