import renderer from 'react-test-renderer';
import AQIIndexGroup from '.';

describe('AQIIndexGroup', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AQIIndexGroup index='894' location='Delhi' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
