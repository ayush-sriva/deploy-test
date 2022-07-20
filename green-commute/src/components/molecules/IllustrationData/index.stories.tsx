import IllustrationData from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Molecules/IllustrationData',
  component: IllustrationData,
} as ComponentMeta<typeof IllustrationData>;

const IllustrationDataTemplate: ComponentStory<typeof IllustrationData> = (args: any) => (
  <div style={{ background: 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)', padding: '30px' }}>
    {' '}
    <IllustrationData {...args} />
  </div>
);

export const IllustrationData1 = IllustrationDataTemplate.bind({});
IllustrationData1.args = {
  url: '/assets/illustrations/illustration2.png',
  children: 'Enter Location to know Time Air Quality index (AQI)',
};

export const IllustrationData2 = IllustrationDataTemplate.bind({});
IllustrationData2.args = {
  url: '/assets/illustrations/illustration4.png',
  children: 'Enter Location to know Time Air Quality (AQI)',
};

export const IllustrationData3 = IllustrationDataTemplate.bind({});
IllustrationData3.args = {
  url: '/assets/illustrations/illustration3.png',
  children: 'Enter your Skills to know how many jobs are in this Location',
};
