import Logo from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const LogoComponent = {
  title: 'Components/Atoms/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Template: ComponentStory<typeof Logo> = (args: any) => <Logo {...args} />;

Template.args = {
  url: '/assets/logos/logoGreen.png',
};

export default LogoComponent;
