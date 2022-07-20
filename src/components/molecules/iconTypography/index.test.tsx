import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import IconTypography from './index';

test('iconTypography', () => {
  render(<IconTypography name='Search Skills'/>);
  const linkElement = screen.getByTestId("icontypography");
  expect(linkElement).toBeInTheDocument();
});