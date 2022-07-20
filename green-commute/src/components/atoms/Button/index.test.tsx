import { render, screen } from '@testing-library/react';
import ButtonComponent from '.';

test('it renders Button', () => {
  const buttonProps = {
    color: 'primary',
    children: 'Hello',
  };
  const typovariant = {
    typoVariant: 'caption',
  };
  render(
    <ButtonComponent
      buttonVariant={'contained'}
      children={'Hello'}
      color={'primary'}
      size={'medium'}
      typoVariant={'caption'}
      type={'button'}
    />
  );
  const typoElement = screen.getByRole('button');
  expect(typoElement).toBeInTheDocument();
});
