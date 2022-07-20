import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import FileUploadCard from '.';

function renderFileUploadCard() {
  render(<FileUploadCard open={true} toggle={false} />);
}

describe('FileUploadCard', () => {
 
  test('Text should render correctly', () => {
    renderFileUploadCard();
    const textElement = screen.getByText('File Upload');
    expect(textElement).toBeInTheDocument();
  });
  test('Number of Icons should be 2', () => {
    renderFileUploadCard();
    const textElement = screen.getAllByAltText('Icon');
    console.log(textElement);
    expect(textElement.length).toBe(1);
  });
  test('Button element rendered correctly', () => {
    renderFileUploadCard();
    const ButtonElement = screen.getByTestId('Button1004');
    expect(ButtonElement).toBeInTheDocument();
  });
});
