import ReactTestRenderer from 'react-test-renderer';
import JobCard from '.';

describe('Job card test', () => {
  it('renders the app header correctly', () => {
    const tree = ReactTestRenderer.create(
      <JobCard title={'Dev'} company={'HP'} location={'Hyderabad'} companyLogo={''} square={true}></JobCard>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
