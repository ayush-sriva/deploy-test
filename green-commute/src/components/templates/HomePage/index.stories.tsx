import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomePageTemplate from '.';
import Header from '../../organisms/Header';
import SideMenu from '../../organisms/SideMenu';

export default {
  title: 'components/Templates/HomePageTemplate',
  component: HomePageTemplate,
} as ComponentMeta<typeof HomePageTemplate>;

const Template: ComponentStory<typeof HomePageTemplate> = (args) => <HomePageTemplate {...args} />;

export const TemplateHomePage = Template.bind({});

TemplateHomePage.args = {
  header: <Header userLocation='East Maredpally, Secunderabad' />,
  sideMenu: <SideMenu toggler={()=>{}}/>,
  children: '',
};
