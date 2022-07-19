import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CommonRoutesCard from '.';

function renderCommonRoutesCard() {
  render(
    <CommonRoutesCard
      currentLocation={'E Marredpally, Secunderabad'}
      destination={'Hitech City, Telanagana, Hyderabad.'}
      onClickHandler={() => {}}
      routeToggle={() => {}}
    />
  );
}

describe('CabCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <CommonRoutesCard
          currentLocation={'E Marredpally, Secunderabad'}
          destination={'Hitech City, Telanagana, Hyderabad.'}
          onClickHandler={() => {}}
          routeToggle={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Text should render correctly', () => {
    renderCommonRoutesCard();
    const HeaderElement = screen.getByText(/Common Routes/);
    expect(HeaderElement).toBeInTheDocument();
  });
  test('Text should render correctly', () => {
    renderCommonRoutesCard();
    const LocationElement = screen.getByText('E Marredpally, Secunderabad');
    expect(LocationElement).toBeInTheDocument();
  });
  test('Text should render correctly', () => {
    renderCommonRoutesCard();
    const ButtonElement = screen.getByText('Hitech City, Telanagana, Hyderabad.');
    expect(ButtonElement).toBeInTheDocument();
  });
});
