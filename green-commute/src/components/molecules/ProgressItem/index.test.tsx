import { render, screen } from '@testing-library/react';
import ProgressItem from '.';

describe('Progress Item', () => {
  test('Grid container', () => {
    render(<ProgressItem status='Future' value={1} label='Your Location'></ProgressItem>);
    expect(screen.getByText('Your Location')).toBeInTheDocument();
  });

  test('Test using test-id', () => {
    render(<ProgressItem status='Future' value={2} label='Your Skills' />);
    expect(screen.getByTestId('item-container')).toBeInTheDocument();
  });
});
