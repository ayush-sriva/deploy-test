import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CabCard from '.';
import Olaurl from '../../../../public/assets/logos/ola.png';
import Rapido from '../../../../public/assets/logos/rapido.png';
import Uber from '../../../../public/assets/logos/uber.png';
  
const data = [
    {
      id: 'CabData1001',
      logoUrl: `${Olaurl}`,
      company: 'Ola',
      approx: 'Approximately  ',
      fare: '45',
    },
    {
      id: 'CabData1002',
      logoUrl: `${Rapido}`,
      company: 'Ola',
      approx: 'Approximately  ',
      fare: '45',
    },
    {
      id: 'CabData1003',
      logoUrl: `${Uber}`,
      company: 'Ola',
      approx: 'Approximately  ',
      fare: '45',
    },
  ];

function renderCabCard() {

  render(<CabCard data={data} />);
}

describe('CabCard', () => {

  it('renders correctly', () => {
     const tree = renderer.create(<CabCard data={data} />).toJSON();
       expect(tree).toMatchSnapshot();
  });

  test('Text should render correctly', () => {
    renderCabCard();
    const ButtonElement = screen.getByText(/catch a blue line metro towards Raidurg./);
    expect(ButtonElement).toBeInTheDocument();
  });

  test('Element for ola should be rendered', () => {
    renderCabCard();
    const CabElement = screen.getByTestId('CabData1001');
    expect(CabElement).toBeInTheDocument();
  });
  test('Element rapido should be rendered', () => {
    renderCabCard();
    const CabElement = screen.getByTestId('CabData1002');
    expect(CabElement).toBeInTheDocument();
  });
  test('Element uber should be rendered', () => {
    renderCabCard();
    const CabElement = screen.getByTestId('CabData1003');
    expect(CabElement).toBeInTheDocument();
  });
});
