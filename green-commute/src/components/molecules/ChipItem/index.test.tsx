
import React from 'react';
import {render, screen} from '@testing-library/react';

import ChipItem from '.';

const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
};


describe('Molecules', () => {
    test('renders chip', () => {
        render(<ChipItem label={"Hyderabad"} handleClick={handleClick} handleDelete={handleDelete} color={'primary'}/>);
        // screen.getAllByRole("");
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByTestId("icon")).toBeInTheDocument();
        expect(screen.getByText("Hyderabad")).toBeInTheDocument();
    })
});