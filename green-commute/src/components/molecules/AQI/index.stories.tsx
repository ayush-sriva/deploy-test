import AQIIndex from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Molecules/AQI',
  component: AQIIndex,
} as ComponentMeta<typeof AQIIndex>;

const AQIIndexTemplate: ComponentStory<typeof AQIIndex> = (args: any) => (
  <div style={{ background: 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)' }}>
    <AQIIndex {...args} />
  </div>
);

export const AQIIndex1 = AQIIndexTemplate.bind({});
AQIIndex1.args = {
  index: '984',
  children: 'Enter your location to know Air Quality Index (AQI)',
};
