import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VehicleTab from './VehicleTab';
export default {
  title: 'Organisms/VehicleTab',
  component: VehicleTab,
} as ComponentMeta<typeof VehicleTab>;

const Template: ComponentStory<typeof VehicleTab> = (args) => (
  <VehicleTab {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
