import { render, screen } from '@testing-library/react';
import JobSearch from '.';

describe('Search Bar', () => {
  test('render whole organism', () => {
    render(<JobSearch onClickHandler={()=>{}}/>);
    expect(screen.getByTestId('searchbar')).toBeInTheDocument();
  });

  test('render skill search field', () => {
    render(<JobSearch onClickHandler={()=>{}}/>);
    expect(screen.getByTestId('skill')).toBeInTheDocument();
  });

  test('render location search field ', () => {
    render(<JobSearch onClickHandler={()=>{}}/>);
    expect(screen.getByTestId('location')).toBeInTheDocument();
  });

  test('render search button icon', () => {
    render(<JobSearch onClickHandler={()=>{}} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
