import React from 'react';
import { render, screen } from '@testing-library/react';

import IconButtonComponent from '.';

import responsiveTheme from '../../../theme';
import Icon from '../../atoms/Icon';

const iconButtonStyle = {
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '22px',
  color: responsiveTheme.palette.secondary.dark,
  width: '137px',
  height: '56px',
  backgroundColor: responsiveTheme.palette.primary.contrastText,
  borderRadius: '32px',
  '& .MuiButton-startIcon': {
    marginRight: '16px',
  },
};

describe('Molecules', () => {
  test('renders filter button', () => {
    render(
      <IconButtonComponent
        style={iconButtonStyle}
        startIcon={<Icon url={'/assets/icons/filterIcon.png'} />}
        children='Filter'
      />
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Filter');
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
