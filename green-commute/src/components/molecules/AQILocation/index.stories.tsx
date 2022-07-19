import AQIIndexLocation from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Molecules/AQILocation',
  component: AQIIndexLocation,
} as ComponentMeta<typeof AQIIndexLocation>;

const AQIIndexTemplate: ComponentStory<typeof AQIIndexLocation> = (args: any) => (
  <div
    style={{
      background: 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)',
      paddingTop: '70px',
      padding: '30px',
    }}
  >
    {' '}
    <AQIIndexLocation {...args} />
  </div>
);

export const AQILocation1 = AQIIndexTemplate.bind({});
AQILocation1.args = {
  index: '984',
  location: 'Mumbai',
};
