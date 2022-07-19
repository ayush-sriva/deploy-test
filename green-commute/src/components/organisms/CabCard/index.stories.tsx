import { ComponentMeta, ComponentStory } from '@storybook/react';
import CabCard from '.';
import Olaurl from '../../../../public/assets/logos/ola.png';
import Rapido from '../../../../public/assets/logos/rapido.png';
import Uber from '../../../../public/assets/logos/uber.png';

export default {
  title: 'components/Organisms/CabCard',
  component: CabCard,
} as ComponentMeta<typeof CabCard>;
const data = [
  {
    id: 'CabData1001',
    logoUrl: `${Olaurl}`,
    company: 'Ola',
    approx: 'Approximately  ',
    fare: '45',
  },
  {
    id: 'CabData1002',
    logoUrl: `${Rapido}`,
    company: 'Ola',
    approx: 'Approximately  ',
    fare: '45',
  },
  {
    id: 'CabData1003',
    logoUrl: `${Uber}`,
    company: 'Ola',
    approx: 'Approximately  ',
    fare: '45',
  },
];

const Template: ComponentStory<typeof CabCard> = (args) => <CabCard {...args} />;

export const CabCardComponent = Template.bind({});

CabCardComponent.args = {
  data: data,
};
