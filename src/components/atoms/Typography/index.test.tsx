import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Typography from './index';

test('should render typography', () => {
  render(<Typography fontWeight={'bold'} fontSize={'12px'} color={'grey'}  />);
  const textElement = screen.getByTestId("typography");
  expect(textElement).toBeInTheDocument();
});
