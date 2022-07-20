import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioButtonComponent from './index';

export default {
  title: 'Components/Atoms/RadioButton',
  component: RadioButtonComponent,
} as ComponentMeta<typeof RadioButtonComponent>;

const Template: ComponentStory<typeof RadioButtonComponent> = (args) => <RadioButtonComponent {...args} />;

export const PrimaryRadioButton = Template.bind({});

PrimaryRadioButton.args = {
  label: 'Yes',
};
