import { ComponentMeta, ComponentStory } from '@storybook/react';
import Olaurl from '../../../../public/assets/logos/ola.png';
import Rapido from '../../../../public/assets/logos/rapido.png';
import Uber from '../../../../public/assets/logos/uber.png';
import ListItem from '.';

export default {
  title: 'components/Molecules/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const OlaListItem = Template.bind({});

OlaListItem.args = {
  logoUrl: `${Olaurl}`,
  company: 'Ola',
  approx: 'Approximately  ',
  fare: '45',
};

export const RapidoListItem = Template.bind({});

RapidoListItem.args = {
  logoUrl: `${Rapido}`,
  company: 'Ola',
  approx: 'Approximately  ',
  fare: '45',
};

export const UberListItem = Template.bind({});

UberListItem.args = {
  logoUrl: `${Uber}`,
  company: 'Ola',
  approx: 'Approximately  ',
  fare: '45',
};
