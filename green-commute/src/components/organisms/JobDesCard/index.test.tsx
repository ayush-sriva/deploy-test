import ReactTestRenderer from 'react-test-renderer';
import JobDescCard from '.';
import HP from '../../../../public/assets/company-logos/hp.svg';

describe('Job Description Test', () => {
  it('renders the job description', () => {
    const tree = ReactTestRenderer.create(
      <JobDescCard
        companyLogo={HP}
        company={'HP'}
        title={'Developer'}
        location={'Hyderabad'}
        postedDate={'12min ago'}
        onClickHandler={() => {}}
      ></JobDescCard>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
