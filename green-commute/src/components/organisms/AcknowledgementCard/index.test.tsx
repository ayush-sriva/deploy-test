import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AcknowledegementCard from '.';

function renderAcknowledgementCard() {
  render(<AcknowledegementCard open={true} handleClose={() => {}} />);
}

describe('AcknowledgementCard', () => {
  test('Text should render correctly', () => {
    renderAcknowledgementCard();
    const textElement = screen.getByText('Your Resume got Uploaded Successfully !');
    expect(textElement).toBeInTheDocument();
  });
  test('Number of Icons should be 2', () => {
    renderAcknowledgementCard();
    const textElement = screen.getAllByAltText('Icon');
    console.log(textElement);
    expect(textElement.length).toBe(2);
  });
  test('Button element rendered correctly', () => {
    renderAcknowledgementCard();
    const ButtonElement = screen.getByTestId('Button1003');
    expect(ButtonElement).toBeInTheDocument();
  });
});
