import Box from '@mui/material/Box';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import JobCard from '.';
import HP from '../../../../public/assets/company-logos/hp.svg';

export default {
  title: 'components/organisms/Card',
  component: JobCard,
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => (
  <Box sx={args.style}>
    <JobCard {...args} />
  </Box>
);

export const DemoJobCard = Template.bind({});

DemoJobCard.args = {
  company: 'HP',
  title: 'User Experience Designer',
  location: 'Hyderabad, Telangana, India',
  companyLogo: HP,
  square: true,
  postedDate: '1hr 36min ago',
  style: {
    width: '350px',
  },
};

export const DemoJobCardTwo = Template.bind({});

DemoJobCardTwo.args = {
  company: 'HP',
  title: 'User Experience Designer',
  location: 'Hyderabad, Telangana, India',
  companyLogo: HP,
  square: false,
  postedDate: '1hr 36min ago',
  style: {
    width: '500px',
  },
};
