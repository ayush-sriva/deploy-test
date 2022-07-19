import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomTextField from '.';

export default {
  title: 'Components/Atoms/TextField',
  component: CustomTextField,
} as ComponentMeta<typeof CustomTextField>;

const Template: ComponentStory<typeof CustomTextField> = (args) => <CustomTextField {...args} />;

export const DemoTextField = Template.bind({});

DemoTextField.args = {
  placeholderText: 'Enter your location',
  value: '',
  eventHandler: () => {},
};
