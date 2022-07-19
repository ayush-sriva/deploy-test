import { render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import LandingPageTemplate from '.';
import Logo from '../../atoms/Logo';
import IllustrationData from '../../molecules/IllustrationData';
import MainCard from '../../organisms/MainCard';

const renderLandingPage = () => {
  let currentPage = 0;

  const backClickHandlerWrap = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage > 0) {
      currentPage = currentPage - 1;
    }
  };

  const nextClickHandlerWrap = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage < 2) {
      currentPage = currentPage + 1;
    }
  };

    render(<LandingPageTemplate children={<IllustrationData url= '/assets/illustrations/illustration2.png' children= {'Enter Location to know Time Air Quality Index(AQI)'}/>} logoChildren={ <Logo url='assets/logos/logoGreen.png' />} cardChildren={<MainCard currentPage={currentPage} backClickHandlerWrap={backClickHandlerWrap} nextClickHandlerWrap={nextClickHandlerWrap}/>}/>)
}
describe('LandingPageTemplate', () => {
    it('LandingPageTemplate snapshot', () => {
      let currentPage = 0;

  const backClickHandlerWrap = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage > 0) {
      currentPage = currentPage - 1;
    }
  };

  const nextClickHandlerWrap = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage < 2) {
      currentPage = currentPage + 1;
    }
  };  

        const tree = renderer
        .create(<LandingPageTemplate children={<IllustrationData url= '/assets/illustrations/illustration2.png' children= {'Enter Location to know Time Air Quality Index(AQI)'}/>} logoChildren={ <Logo url='assets/logos/logoGreen.png' />} cardChildren={<MainCard currentPage={currentPage} backClickHandlerWrap={backClickHandlerWrap} nextClickHandlerWrap={nextClickHandlerWrap}/>}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Renders logo correctly', () => {
        renderLandingPage();
        const logoElement = screen.getByTestId('logo');
        expect(logoElement).toBeInTheDocument();
    });

    test('Renders illustration correctly', () => {
        renderLandingPage();
        const illustrationElement = screen.getByAltText('illustration');
        expect(illustrationElement).toBeInTheDocument();
    });

    test('Renders text correctly', () => {
        renderLandingPage();
        let textElement = screen.getByText("More than 2000 people are using Green Commute");
        expect(textElement).toBeInTheDocument();
        textElement = screen.getByText("Enter Location to know Time Air Quality Index(AQI)");
        expect(textElement).toBeInTheDocument();
    });

    test('Renders input correctly', () => {
        renderLandingPage();
        const placeholderText = screen.getByPlaceholderText('Enter your location');
        expect(placeholderText).toBeInTheDocument();
    })
})