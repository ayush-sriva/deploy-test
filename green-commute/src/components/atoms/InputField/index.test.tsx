import React from 'react';
import { render, screen } from '@testing-library/react';

import InputComponent from '.';

describe('Atoms', () => {
  test('renders input field', () => {
    const handleClick = () => {
      console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
      console.info('You clicked the delete icon.');
    };
    render(
      <InputComponent
        placeholder={'Search by job location'}
        handleClick={handleClick}
        handleDelete={handleDelete}
        eventHandler={function (location: string[]): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
