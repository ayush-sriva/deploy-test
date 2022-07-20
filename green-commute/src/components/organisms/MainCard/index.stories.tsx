import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainCard from '.';

export default {
  title: 'components/organisms/Main Card',
  component: MainCard,
} as ComponentMeta<typeof MainCard>;

const Template: ComponentStory<typeof MainCard> = (args) => <MainCard {...args} />;

export const DemoMainCard = Template.bind({});

DemoMainCard.args = {};
