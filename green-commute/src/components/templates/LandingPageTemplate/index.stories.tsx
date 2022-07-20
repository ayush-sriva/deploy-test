import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Logo from '../../atoms/Logo';
import MainCard from '../../organisms/MainCard';
import LandingPageTemplate from './index';
import useState from 'storybook-addon-state';

export default {
  title: 'Components/Templates/LandingPage',
  component: LandingPageTemplate,
} as ComponentMeta<typeof LandingPageTemplate>;

const [currentPage, setCurrentPage] = useState<number>('Current page', 0);

const backClickHandlerWrap = (_event: React.MouseEvent<HTMLButtonElement>) => {
  if (currentPage > 0) {
    setCurrentPage(currentPage - 1);
  }
};

const nextClickHandlerWrap = (_event: React.MouseEvent<HTMLButtonElement>) => {
  if (currentPage < 2) {
    setCurrentPage(currentPage + 1);
  }
};

const Template: ComponentStory<typeof LandingPageTemplate> = (args) => <LandingPageTemplate {...args}/>;

export const PrimaryTemplate = Template.bind({});

PrimaryTemplate.args = {
    children: '',
    logoChildren: <Logo url='assets/logos/logoGreen.png' />,
    cardChildren: <MainCard currentPage={currentPage} backClickHandlerWrap={backClickHandlerWrap} nextClickHandlerWrap={nextClickHandlerWrap}/>
}

