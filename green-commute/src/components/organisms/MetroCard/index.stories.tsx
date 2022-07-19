import { ComponentMeta, ComponentStory } from '@storybook/react';
import MetroCard from '.';

export default {
  title: 'components/Organisms/MetroCard',
  component: MetroCard,
} as ComponentMeta<typeof MetroCard>;

export const Template: ComponentStory<typeof MetroCard> = (args) => <MetroCard />;
