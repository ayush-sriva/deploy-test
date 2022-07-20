import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from "react";
import Typography from "./index";
export default  {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {
    name: {
      control: "text",
      description: "The source of the typography",
      defaultValue: 'greencommute',
    }    
  },
} as ComponentMeta<typeof Typography>;

export const Template: ComponentStory<typeof Typography> = (args: any) => (
  <Typography {...args}>Green Commute</Typography>
);
