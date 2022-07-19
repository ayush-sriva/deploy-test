import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography from '.';

export default {
  title: 'Components/Atoms/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const h1Text = Template.bind({});

h1Text.args = {
  variant: 'h1',
  children: 'h1 Text',
};

export const h2Text = Template.bind({});

h2Text.args = {
  variant: 'h2',
  children: 'h2 Text',
};

export const body1 = Template.bind({});

body1.args = {
  variant: 'body1',
  children: 'body1 text',
};

export const body2 = Template.bind({});

body2.args = {
  variant: 'body2',
  children: 'body2 text',
  style: {
    color: 'red',
  },
};

export const subtitle1 = Template.bind({});

subtitle1.args = {
  variant: 'subtitle1',
  children: 'subtitle1 text',
  style: {
    color: 'green',
  },
};

export const subtitle2 = Template.bind({});

subtitle2.args = {
  variant: 'subtitle2',
  children: 'subtitle2 text',
  style: {
    color: 'red',
  },
};

export const caption1 = Template.bind({});

caption1.args = {
  variant: 'captionBold',
  children: 'caption1 text',
};

export const caption2 = Template.bind({});

caption2.args = {
  variant: 'caption',
  children: 'caption2 text',
};
