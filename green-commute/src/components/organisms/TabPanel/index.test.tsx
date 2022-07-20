import ReactTestRenderer from 'react-test-renderer';
import TabPanel from '.';

describe('Tab Panel Test', () => {
  it('renders the tab panel', () => {
    const tree = ReactTestRenderer.create(<TabPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
