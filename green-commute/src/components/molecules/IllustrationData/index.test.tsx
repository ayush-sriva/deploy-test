import renderer from 'react-test-renderer';
import IllustrationData from '.';

describe('IllustrationData', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<IllustrationData children='descreption' url='/assets/illustrations/illustration3.png' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
