
import React, { useState } from 'react';
import {render, screen} from '@testing-library/react';
import { ReactComponent as savedJobs } from '../../../../public/assets/sideMenuIcons/SavedJobs.svg';
import renderer from 'react-test-renderer';

import JobList from '.';

const filters = ["10 - 20kms", "Past 24 hours", "Full time", "Freshers", "Green Commute Routes"]

const handleDelete = () => {
    console.log("You have clicked delete")
  };

describe('Organisms', () => {
    test('renders Job list', () => {
        render(<JobList filters={filters} handleDelete={handleDelete} />);
        let button = screen.getAllByRole('button');
        expect(button).toHaveLength(6);
    })
});


it('renders correctly when filter has no items', () => {
    const tree = renderer.create(<JobList />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly when filter has items', () => {
    const tree = renderer.create(<JobList filters={filters}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


