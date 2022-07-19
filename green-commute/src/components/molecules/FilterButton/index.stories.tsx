import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterButton from '.';
import Icon from '../../atoms/Icon';

export default {
  title: 'components/molecules/FilterButton',
  component: FilterButton,
} as ComponentMeta<typeof FilterButton>;

const Template: ComponentStory<typeof FilterButton> = (args) => <FilterButton {...args} />;

export const FilterButtonDemo = Template.bind({});

FilterButtonDemo.args = {
  startIcon: <Icon url={'/assets/icons/filterIcon.png'} />,
  children: 'Filter',
};
