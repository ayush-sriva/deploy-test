import ReactTestRenderer from 'react-test-renderer';
import Header from '.';

describe('Header test', () => {
  it('renders the app header correctly', () => {
    const tree = ReactTestRenderer.create(<Header userLocation='Hyderabad' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
