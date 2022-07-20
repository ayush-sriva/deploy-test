import renderer from 'react-test-renderer';
import AQIIndexLocation from '.';

const data = [
  {
    id: 'AQIL01',
    index: '894',
    location: 'Hyderabad',
  },
  {
    id: 'AQIL02',
    index: '900',
    location: 'Mumbai',
  },
];

describe('AQIIndexLocation', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AQIIndexLocation children='description' data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
