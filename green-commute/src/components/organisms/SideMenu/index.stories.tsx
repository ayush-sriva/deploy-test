import { ComponentMeta, ComponentStory } from '@storybook/react';
import SideMenu from '.';

export default {
  title: 'components/organisms/SideMenu',
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

export const Template: ComponentStory<typeof SideMenu> = () => <SideMenu toggler={()=>{}}/>;
