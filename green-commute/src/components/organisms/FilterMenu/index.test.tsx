import { render, screen } from '@testing-library/react';
import FilterMenu from '.';

const data = [
  {
    id: 'Distance',
    name: 'Distance',
    inputs: ['0 - 10 Kms', '11 - 20 Kms', '21 - 30 Kms', '31 - 40 Kms'],
  },
  {
    id: 'Date_Posted',
    name: 'Date Posted',
    inputs: ['Past 24 hours', 'Past week', 'Past month', 'Anytime'],
  },
  {
    id: 'Green_Commute',
    name: 'Green Commute',
    inputs: ['Yes', 'No'],
  },

  {
    id: 'Job_Type',
    name: 'Job Type',
    inputs: ['Full time', 'Internship', 'Contract', 'Remote'],
  },

  {
    id: 'Experience_Level',
    name: 'Experience Level',
    inputs: ['Fresher', 'Mid-level', 'Director', 'Executive'],
  },
  {
    id: 'Transport',
    name: 'Transport',
    inputs: ['Metro', 'Bus', 'Car pooling', 'Motor Cycle'],
  },
];

describe('Filter menu organism', () => {
  test('renders all parts of filter menu', () => {
    render(<FilterMenu data={data} filterMenuState={false} handleClose={() => {}} />);
    let checkboxes = screen.getAllByRole('checkbox');
    let buttons = screen.getAllByRole('button');
    expect(checkboxes).toHaveLength(20);
    expect(buttons).toHaveLength(2);
  });
});
