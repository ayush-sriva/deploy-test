import WorkOutline from '@mui/icons-material/WorkOutline';
import renderer from 'react-test-renderer';
import FilterButton from '.';

describe('Filter Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FilterButton startIcon={<WorkOutline />} children='Filter' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
