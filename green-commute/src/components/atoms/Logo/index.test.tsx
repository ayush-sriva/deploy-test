import React from 'react';
import { render, screen } from '@testing-library/react';

import Logo from '.';

describe('Atoms', () => {
  test('renders logo', () => {
    render(<Logo url={'../../../../public/assets/logos/logoGreen.png'} />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});
