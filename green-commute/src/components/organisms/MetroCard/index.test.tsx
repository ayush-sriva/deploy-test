import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MetroCard from '.';

function renderMetroCard() {
  render(<MetroCard/>);
}

describe('CabCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MetroCard/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Text should render correctly', () => {
    renderMetroCard();
    const textElement = screen.getByText('catch a blue line metro towards Raidurg.');
    expect(textElement).toBeInTheDocument();
  });
  test('Text should render correctly', () => {
    renderMetroCard();
    const textElement = screen.getByAltText('illustration');
    expect(textElement).toBeInTheDocument();
  });
  test('Number of Icons should be 2', () => {
    renderMetroCard();
    const textElement = screen.getAllByAltText('Icon');
    console.log(textElement);
    expect(textElement.length).toBe(2);
  });
  test('Button element rendered correctly', () => {
    renderMetroCard();
    const ButtonElement = screen.getByTestId('Button1002');
    expect(ButtonElement).toBeInTheDocument();
  });
});
