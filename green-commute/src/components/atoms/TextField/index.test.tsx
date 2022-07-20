import renderer from 'react-test-renderer';
import TextField from '.';

describe('Single Input Textfield', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TextField placeholderText={'Hello world'} eventHandler={()=>{}} value={''} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
