import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import JobDetailsCard from '.';

const description =
  'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.';
const aboutCompany =
  'High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.';

function renderJobDetailsCard() {
  render(<JobDetailsCard description={description} aboutCompany={aboutCompany} />);
}

describe('CabCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<JobDetailsCard description={description} aboutCompany={aboutCompany} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Text should render correctly', () => {
    renderJobDetailsCard();
    const textElement = screen.getByText(`${description}`);
    expect(textElement).toBeInTheDocument();
  });
  test('Text should render correctly', () => {
    renderJobDetailsCard();
    const textElement = screen.getByText(`${aboutCompany}`);
    expect(textElement).toBeInTheDocument();
  });
  test('Button element rendered correctly', () => {
    renderJobDetailsCard();
    const ButtonElement = screen.getByTestId('Button1001');
    expect(ButtonElement).toBeInTheDocument();
  });
});
