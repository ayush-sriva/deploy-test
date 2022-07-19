import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommonRoutesCard from '.';

export default {
  title: 'components/Organisms/CommonRoutesCard',
  component: CommonRoutesCard,
} as ComponentMeta<typeof CommonRoutesCard>;

export const Template: ComponentStory<typeof CommonRoutesCard> = (args) => (
  <CommonRoutesCard
    currentLocation={'E Marredpally, Secunderabad'}
    onClickHandler={() => {}}
    routeToggle={() => {}}
    destination={'Hitech City, Telanagana, Hyderabad.'}
  />
);
