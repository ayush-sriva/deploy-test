import Icon from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const IconComponent = {
  title: 'Components/Atoms/Icon/Png',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Template: ComponentStory<typeof Icon> = (args: any) => <Icon {...args} />;

Template.args = {
  url: '/assets/icons/filterIcon.png',
};

export default IconComponent;
