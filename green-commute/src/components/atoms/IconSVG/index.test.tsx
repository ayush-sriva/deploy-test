import { render, screen } from '@testing-library/react';
import { ReactComponent as CustomIcon } from '../../../../public/assets/icons/locationIconOrange.svg';
import CustomSvgIcon from '.';

describe('Atoms', () => {
  test('renders svg icon', () => {
    render(<CustomSvgIcon component={CustomIcon} />);

    expect(screen.getByTestId('SVGIcon')).toBeInTheDocument();
  });
});
