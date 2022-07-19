
import Illustration from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Atoms/Illustration',
  component: Illustration,
} as ComponentMeta<typeof Illustration>;

const IlllustrationTemplate: ComponentStory<typeof Illustration> = (args: any) => <Illustration {...args} />;

export const Illustration1 = IlllustrationTemplate.bind({});
Illustration1.args = {
  url: '/assets/illustrations/illustration2.png',
};

export const Illustration2 = IlllustrationTemplate.bind({});
Illustration2.args = {
  url: '/assets/illustrations/illustration3.png',
};

export const Illustration3 = IlllustrationTemplate.bind({});
Illustration3.args = {
  url: '/assets/illustrations/illustration4.png',
};
