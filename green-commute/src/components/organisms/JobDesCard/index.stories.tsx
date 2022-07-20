import { ComponentStory, ComponentMeta } from '@storybook/react';
import JobDescCard from '.';
import HP from '../../../../public/assets/logos/hp.png';

export default {
  title: 'components/organisms/Job Description Card',
  component: JobDescCard,
} as ComponentMeta<typeof JobDescCard>;

const Template: ComponentStory<typeof JobDescCard> = (args) => <JobDescCard {...args} />;

export const DemoJobCard = Template.bind({});

DemoJobCard.args = {
  company: 'HP',
  title: 'User Experience Designer',
  location: 'Hyderabad, Telangana, India',
  companyLogo: HP,
  postedDate: '36min ago',
};
