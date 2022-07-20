import { render, screen } from '@testing-library/react';
import Typography from '.';

describe('Typography', () => {
  test('Render h1', () => {
    render(<Typography children='h1 text' variant='h1' />);
    expect(screen.getByText('h1 text')).toBeInTheDocument();
  });

  test('Render h2', () => {
    render(<Typography children='h2 text' variant='h2' />);
    expect(screen.getByText('h2 text')).toBeInTheDocument();
  });
});
