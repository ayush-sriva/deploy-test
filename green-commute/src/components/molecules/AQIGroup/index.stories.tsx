import AQIIndexGroup from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Molecules/AQIGroup',
  component: AQIIndexGroup,
} as ComponentMeta<typeof AQIIndexGroup>;
const data = [
  {
    id: 'AQIL01',
    index: '894',
    location: 'Hyderabad',
  },
  {
    id: 'AQIL02',
    index: '900',
    location: 'Mumbai',
  },
];


const AQIIndexTemplate: ComponentStory<typeof AQIIndexGroup> = (args: any) => (
  <div style={{ background: 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)' }}>
    {' '}
    <AQIIndexGroup {...args} />
  </div>
);

export const AQIGroup1 = AQIIndexTemplate.bind({});
AQIGroup1.args = {
  children: 'Realtime Air Quality Index (AQI) in this location',
  data: data
};
