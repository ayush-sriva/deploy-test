import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Myntra from '../../../assets/icons/myntra.svg';
import JobDescriptionCard from '../JobDescriptionCard/JobDescriptionCard';
describe('Job description card', () => {
  it('should match snapshot of initial render', () => {
    render(
      <JobDescriptionCard
        id={1}
        companyLogo={Myntra}
        companyName={'Myntra'}
        jobTitle={'User Experience Designer'}
        companyAddress={'HitechCity , Hyderabad 123456'}
        jobUploadedTime={new Date().toDateString()}
        jobDescription={
          'JobDescription will be added fom table for now this is what you should be happy with'
        }
        aboutTheCompany={
          'you can google it for now, we will add it later point of time'
        }
      />
    );
    const jobDescriptionCard = screen.getByTestId('jobDescriptionCard');

    expect(jobDescriptionCard).toBeVisible;

    const greenRoutesCard = screen.getByTestId('greenRoutes');
    expect(greenRoutesCard).toBeTruthy();
  });

  test('on click on greenRoutesButton the vehicle tab must be visible', () => {
    render(
      <JobDescriptionCard
        id={1}
        companyLogo={Myntra}
        companyName={'Myntra'}
        jobTitle={'User Experience Designer'}
        companyAddress={'Hitech city , Hyderabad 123456'}
        jobUploadedTime={new Date().toDateString()}
        jobDescription={
          'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.'
        }
        aboutTheCompany={
          'High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.Excellent written and oral communication and presentation skills'
        }
      />
    );

    const jobDescriptionCard = screen.getByTestId('jobDescriptionCard');

    expect(jobDescriptionCard).toBeVisible;
    const greenRoutesButton = screen.getByTestId('greenRoutes');
    expect(greenRoutesButton).toBeTruthy();
    fireEvent.click(greenRoutesButton);
  });
});
