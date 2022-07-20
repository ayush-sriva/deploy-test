import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBoxComponent from './index';

export default {
  title: 'Components/Atoms/Checkbox',
  component: CheckBoxComponent,
} as ComponentMeta<typeof CheckBoxComponent>;

const Template: ComponentStory<typeof CheckBoxComponent> = (args) => <CheckBoxComponent {...args} />;

export const PrimaryCheckBox = Template.bind({});

PrimaryCheckBox.args = {
  label: '11 - 20Kms',
  labelChecked:true
};
