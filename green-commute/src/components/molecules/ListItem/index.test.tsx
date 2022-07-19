import { render, screen } from '@testing-library/react';
import ReactTestRenderer from 'react-test-renderer';
import ListItem from '.';

describe('List Item molecule', () => {
  test('Ola list item molecule', () => {
    render(
      <ListItem
        logoUrl='../../../../public/assets/logos/ola.png'
        company='Ola'
        approx={''}
        fare={''}
      ></ListItem>
    );
    expect(screen.getByText('Ola')).toBeInTheDocument();
    expect(screen.getByTestId('book-now')).toBeInTheDocument();
  });

  test('Rapido list item molecule with approx and fare', () => {
    render(
      <ListItem
        logoUrl='../../../../public/assets/logos/rapido.png'
        company='Rapido'
        approx='Approximately'
        fare='70'
      ></ListItem>
    );
    expect(screen.getByText(/Approximately/)).toBeInTheDocument();
    expect(screen.getByText(/70/)).toBeInTheDocument();
  });

  test('Uber list item molecule logo rendering test', () => {
    render(
      <ListItem
        logoUrl='../../../../public/assets/logos/uber.png'
        company='Uber'
        fare='30'
        approx={''}
      ></ListItem>
    );
    expect(screen.getByTestId('logo-grid')).toBeInTheDocument();
  });
});

describe('List Item Snapshot', () => {
  it('renders list item correctly', () => {
    const tree = ReactTestRenderer.create(
      <ListItem
        logoUrl='../../../../public/assets/logos/rapido.png'
        company='Rapido'
        approx='Approximately'
        fare='70'
      ></ListItem>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
