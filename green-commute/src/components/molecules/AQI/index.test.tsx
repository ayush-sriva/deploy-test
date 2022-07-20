/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */
import renderer from 'react-test-renderer';
import AQIIndex from '.';

describe('AQIIndex', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AQIIndex children='descreption' index='900' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
