import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import RadioButtonComponent from '.';

describe('Atoms', () => {
  test('renders radio button', () => {
    render(<RadioButtonComponent label={'Yes'} />);
    const radioLabel: HTMLInputElement = screen.getByLabelText('Yes');
    expect(radioLabel.checked).toEqual(false);
    fireEvent.click(radioLabel);
    expect(radioLabel.checked).toEqual(true);
  });
});

describe('Atoms', () => {
  test('renders snapshot of radio button', () => {
    const tree = renderer.create(<RadioButtonComponent label='Yes' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
