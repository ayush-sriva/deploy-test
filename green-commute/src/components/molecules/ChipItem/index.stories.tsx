
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChipItem from './index';


export default {
  title: 'Components/Molecules/ChipItem',
  component: ChipItem,
} as ComponentMeta<typeof ChipItem>;

const handleClick = () => {
  console.info('You clicked the Chip.');
};

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const Template: ComponentStory<typeof ChipItem> = (args) => <ChipItem {...args}/>;

export const ChipItemComponent = Template.bind({});

ChipItemComponent.args = {
    label: 'Hyderabad',
    handleClick: handleClick,
    handleDelete: handleDelete,
    color: 'primary',
}

