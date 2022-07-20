import { ComponentMeta, ComponentStory } from '@storybook/react';
import JobDetailsCard from '.';

const description =
  'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.';
const aboutCompany =
  'High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.';

export default {
  title: 'components/Organisms/JobDetailsCard',
  component: JobDetailsCard,
} as ComponentMeta<typeof JobDetailsCard>;

export const Template: ComponentStory<typeof JobDetailsCard> = (args) => (
  <JobDetailsCard description={description} aboutCompany={aboutCompany} />
);
