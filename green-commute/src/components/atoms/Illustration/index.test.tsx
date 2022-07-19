
import { render, screen } from '@testing-library/react';

import Illustration from '.';

describe('Atoms', () => {
  test('renders Illustration', () => {
    render(<Illustration url={'../../../../public/assets/illustrations/illustration2.png'} />);

    expect(screen.getByAltText('illustration')).toBeInTheDocument();
  });
});
