import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import SideNav from './index';
export default {
  title: 'Organisms/SideNav',
  component: SideNav,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aAZmibHibDJ541oKCpxVso/Green-Commute?node-id=98%3A3631',
    },
  },
} as ComponentMeta<typeof SideNav>;

const Template: ComponentStory<typeof SideNav> = (args) => (
  <SideNav {...args} />
);

export const SideNavBar = Template.bind({});
