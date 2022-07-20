import { render, screen } from '@testing-library/react';

import Icon from '.';

describe('Atoms', () => {
  test('renders png icon', () => {
    render(<Icon url={'../../../../public/assets/icons/filterIcon.png'} />);

    expect(screen.getByAltText('Icon')).toBeInTheDocument();
  });
});
