import responsiveTheme from '../../../theme';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonComponent from '.';

export default {
  title: 'Components/Atoms/Button',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const ButtonTemplate: ComponentStory<typeof ButtonComponent> = (args: any) => (
  <ButtonComponent {...args}>{args.children}</ButtonComponent>
);

export const PrimaryButton = ButtonTemplate.bind({});
PrimaryButton.args = {
  buttonVariant: 'contained',
  color: 'primary',
  type: 'button',
  size: 'medium',
  children: 'Next',
  typoVariant: 'captionBold',
};

export const SecondaryButton = ButtonTemplate.bind({});
SecondaryButton.args = {
  buttonVariant: 'outlined',
  color: 'primary',
  children: 'Save',
  size: 'medium',
  type: 'button',
  typoVariant: 'captionBold',
};

export const SkipButton = ButtonTemplate.bind({});
SkipButton.args = {
  typoVariant: 'captionBold',
  color: 'primary',
  size: 'medium',
  children: 'Skip',
  type: 'submit',
};
