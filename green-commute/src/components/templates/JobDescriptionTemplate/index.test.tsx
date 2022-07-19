import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import JobDescriptionTemplate from '.';
import HP from '../../../../public/assets/logos/hp.png'


const description =
  'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.';
const aboutCompany =
  'High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.';
  const data={
    company: 'HP',
    title: 'User Experience Designer',
    location: 'Hyderabad, Telangana, India',
    companyLogo: HP,
    postedDate: '36min ago'
   }

function renderJobDescriptionTemplate() {
  render( <JobDescriptionTemplate description={description} aboutCompany={aboutCompany} currentLocation={'Hyderabad'} destination={'Mumbai'}  jobDescData={data}/>);
}

describe('JobDescriptionTemplate', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<JobDescriptionTemplate description={description} aboutCompany={aboutCompany} currentLocation={'Hyderabad'} destination={'Mumbai'}  jobDescData={data}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Text should render correctly', () => {
    renderJobDescriptionTemplate();
    const textElement = screen.getByText('Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.');
    expect(textElement).toBeInTheDocument();
  });
  test('Text should render correctly', () => {
    renderJobDescriptionTemplate();
    const textElement = screen.getByText('Hyderabad, Telangana, India');
    expect(textElement).toBeInTheDocument();
  });
  test('Number of Icons should be 2', () => {
    renderJobDescriptionTemplate();
    const textElement = screen.getAllByAltText('company_logo');
    console.log(textElement);
    expect(textElement.length).toBe(1);
  });
  test('Button element rendered correctly', () => {
    renderJobDescriptionTemplate();
    const ButtonElement = screen.getByTestId('Button1001');
    expect(ButtonElement).toBeInTheDocument();
  });
});
