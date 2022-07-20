import { ComponentStory, ComponentMeta } from '@storybook/react';
import JobList from './index';
import { ReactComponent as savedJobs } from '../../../../public/assets/sideMenuIcons/SavedJobs.svg';

export default {
  title: 'Components/Organisms/JobList',
  component: JobList,
} as ComponentMeta<typeof JobList>;

const filters = ['10 - 20kms', 'Past 24 hours', 'Full time', 'Freshers', 'Green Commute Routes'];

const handleDelete = () => {
  console.log('You have clicked delete');
};

const handleClick = () => {
  filters.splice(0, filters.length);
  console.log('This button is clicked');
};

const Template: ComponentStory<typeof JobList> = (args) => (
  <div style={{ backgroundColor: '#E5E5E5', width: '571px', padding: '5px' }}>
    <JobList {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  filters: filters,
  handleDelete: handleDelete,
  handleClick: handleClick,
};
