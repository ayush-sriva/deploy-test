/**
 * @author Bhavani Somanchi <bhavani.somanchi@zemosolabs.com>
 */

import TemplateHomePage from '../../templates/HomePage';
import Header from '../../organisms/Header';
import SideMenu from '../../organisms/SideMenu';
import { Grid, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';
import { useState, useEffect } from 'react';
import JobCard from '../../organisms/FindCard';
import { fetchAllSavedJobs } from '../../../service/JobService';
import { userLocation } from '../../../utils/constants';

const MainContainer2 = styled(Grid)({
  marginTop: '30px',
  [theme.breakpoints.up('lg')]: {
    marginTop: '6rem',
    paddingLeft: '19rem',
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: '30px',
    paddingLeft: '0',
  },
});
const JobsContainer2 = styled(Grid)({
  minHeight: '100vh',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: '19rem',
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '0',
    marginBottom: '5rem',
  },
});
const JobGrid2 = styled(Grid)({
  marginRight: '15px',
  [theme.breakpoints.up('sm')]: {
    marginTop: '1rem',
    width: '576px !important',
    height: '159px ',
    borderRadius: '12px',
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: '1rem',
  },
});

const NewJobCard2 = styled(JobCard)({
  [theme.breakpoints.up('xl')]: {
    padding: '0.5rem',
  },
});

interface CompanyDetails {
  company: string;
  title: string;
  location: string;
  companyLogo: string;
  postedDate: string;
}
interface Job {
  id: string;
  jobTitle: string;
  company: string;
  datePosted: string;
  location: string;
  logo: string;
  description: string;
  aboutCompany: string;
  details: CompanyDetails;
}

const SavedJobsPage = () => {
  const [jobData2, setJobData2] = useState<Array<Job>>([]);

  const getJobData2 = async () => {
    fetchAllSavedJobs().then((jobsData) => {
      setJobData2(jobsData);
    });
  };

  useEffect(() => {
    getJobData2();
  }, []);

  const renderDescription2 = () => {
    return jobData2.map((jobData) => {
      return (
        <JobGrid2 key={jobData.id} item>
          <NewJobCard2
            id={jobData.id}
            company={jobData.company}
            title={jobData.jobTitle}
            location={jobData.location}
            square={false}
            companyLogo={jobData.logo}
            postedDate={jobData.datePosted}
          />
        </JobGrid2>
      );
    });
  };

  return (
    <TemplateHomePage
      header={<Header userLocation={userLocation} />}
      sideMenu={<SideMenu toggler={()=>{}}/>}
      data-testid='home-template'
    >
      <MainContainer2 container direction='row'>
        <Grid item xs={9} lg={9}>
          <Typography variant='h2'>Saved Jobs</Typography>
        </Grid>
      </MainContainer2>
      <JobsContainer2 container>
        <Grid container direction='row'>
          <Grid item xs={12}>
            <Grid container>{renderDescription2()}</Grid>
          </Grid>
        </Grid>
      </JobsContainer2>
    </TemplateHomePage>
  );
};

export default SavedJobsPage;
