import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import LandingPage from '.';

function renderLandingPage() {
    render(<LandingPage />);
}
describe('LandingPage', () => {
    it('Landing Page snapshot', () => {
        const tree = renderer
        .create(<LandingPage />)
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
        let textElement = screen.getByText('Enter Location to know Time Air Quality Index(AQI)');
        expect(textElement).toBeInTheDocument();
        textElement = screen.getByText('Skip');
        expect(textElement).toBeInTheDocument();
        textElement = screen.getByText('Where do you stay?');
        expect(textElement).toBeInTheDocument();
    });

    test('Renders textbox correctly', () => {
        renderLandingPage();
        const inputElement = screen.getByPlaceholderText('Enter your location');
        expect(inputElement).toBeInTheDocument();
    });

    test('Renders button correctly', () => {
        renderLandingPage();
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
})