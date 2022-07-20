import { ComponentMeta, ComponentStory } from '@storybook/react';
import AcknowledgementCard from '.';

export default {
  title: 'components/Organisms/AcknowledgementCard',
  component: AcknowledgementCard,
} as ComponentMeta<typeof AcknowledgementCard>;

export const Template: ComponentStory<typeof AcknowledgementCard> = () => (
  <AcknowledgementCard open={true} handleClose={() => {}} />
);
