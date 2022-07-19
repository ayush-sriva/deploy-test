import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressItem from '.';
import DoneIcon from '@mui/icons-material/Done';

export default {
  title: 'components/molecules/ProgressItem',
  component: ProgressItem,
} as ComponentMeta<typeof ProgressItem>;

const Template: ComponentStory<typeof ProgressItem> = (args) => <ProgressItem {...args} />;

export const FirstProgressItem = Template.bind({});

FirstProgressItem.args = {
  value: '1',
  label: 'Your Location',
  status: 'Future',
};

export const SecondProgressItem = Template.bind({});

SecondProgressItem.args = {
  value: '2',
  label: 'Job Location',
  status: 'Current',
};

export const CurrentProgressItem = Template.bind({});

CurrentProgressItem.args = {
  value: <DoneIcon />,
  label: 'Your Skills',
  status: 'Current',
};
