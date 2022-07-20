import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
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

export default {
  title: 'components/Templates/JobDescriptionTemplate',
  component: JobDescriptionTemplate,
} as ComponentMeta<typeof JobDescriptionTemplate>;

export const Template: ComponentStory<typeof JobDescriptionTemplate> = () => (
    <JobDescriptionTemplate description={description} aboutCompany={aboutCompany} currentLocation={'Hyderabad'} destination={'Mumbai'} jobDescData={data}/>
);
