import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterMenu from './index';

export default {
  title: 'Components/Organisms/Filter',
  component: FilterMenu,
} as ComponentMeta<typeof FilterMenu>;

const data = [
  {
    id: 'Distance',
    name: 'Distance',
    inputs: ['0 - 10 Kms', '11 - 20 Kms', '21 - 30 Kms', '31 - 40 Kms'],
  },
  {
    id: 'Date_Posted',
    name: 'Date Posted',
    inputs: ['Past 24 hours', 'Past week', 'Past month', 'Anytime'],
  },
  {
    id: 'Green_Commute',
    name: 'Green Commute',
    inputs: ['Yes', 'No'],
  },

  {
    id: 'Job_Type',
    name: 'Job Type',
    inputs: ['Full time', 'Internship', 'Contract', 'Remote'],
  },

  {
    id: 'Experience_Level',
    name: 'Experience Level',
    inputs: ['Fresher', 'Mid-level', 'Director', 'Executive'],
  },
  {
    id: 'Transport',
    name: 'Transport',
    inputs: ['Metro', 'Bus', 'Car pooling', 'Motor Cycle'],
  },
];

const Template: ComponentStory<typeof FilterMenu> = (args) => <FilterMenu {...args} />;

export const PrimaryFilterItem = Template.bind({});

PrimaryFilterItem.args = {
  data: data,
  filterMenuState: true,
  handleClose: () => {},
};
