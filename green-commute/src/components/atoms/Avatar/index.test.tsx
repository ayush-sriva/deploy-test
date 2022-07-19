import renderer from 'react-test-renderer';
import Avatar from '.';

describe('Avatar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Avatar alt='test-user-avatar' src='../../../../public/assets/illustrations/user-img.png' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
