import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputComponent from './index';

export default {
  title: 'Components/Atoms/InputField',
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

export const PrimaryInput = Template.bind({});

const handleClick = () => {
  console.info('You clicked the Chip.');
};

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const handleLocation = () => {
  console.info('you handled location');
};
PrimaryInput.args = {
  placeholder: 'Enter your job location',
  values: [],
  eventHandler: handleLocation,
  handleClick: handleClick,
  handleDelete: handleDelete,
};
