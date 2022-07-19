import { render, screen } from '@testing-library/react';
import JobDescriptionView from '.';

describe('Home Page test', () => {
  test('render the components', () => {
    render(<JobDescriptionView />);

    expect(screen.getAllByAltText('Logo')).toHaveLength(9);
    expect(screen.getAllByRole('menuitem')).toHaveLength(8);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
