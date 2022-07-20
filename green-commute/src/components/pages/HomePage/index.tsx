/**
 * @author Abhishek Bhemisetty <abhishek.bhemisetty@zemosolabs.com>
 */

import TemplateHomePage from '../../templates/HomePage';
import Header from '../../organisms/Header';
import SideMenu from '../../organisms/SideMenu';
import JobSearch, { NewValueType } from '../../organisms/JobSearch';
import Icon from '../../atoms/Icon';
import { Grid, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';
import { useEffect, useState } from 'react';
import JobCard from '../../organisms/FindCard';
import { filterData } from '../../../utils/constants';
import FilterMenu from '../../organisms/FilterMenu';
import FilterButton from '../../molecules/FilterButton';
import { fetchAllJobs, fetchAllSavedJobs } from '../../../service/JobService';
import { useLocation, useNavigate } from 'react-router-dom';

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

const HomeContainer = styled(Grid)({
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

const JobContainer = styled(Grid)({
  [theme.breakpoints.up('lg')]: {
    marginTop: '2rem',
    paddingLeft: '19rem',
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: '2rem',
    paddingLeft: '0',
    marginBottom: '5rem',
  },
});

const JobListGrid = styled(Grid)({
  marginRight: '15px',
  [theme.breakpoints.up('lg')]: {
    marginTop: '15px',
    width: '320px !important',
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: '2rem',
  },
});

const JobListCard = styled(JobCard)({
  [theme.breakpoints.up('xl')]: {
    padding: '0.5rem',
  },
});

const Subtitle = styled(Typography)({
  color: `${theme.palette.secondary.darker}`,
});

const Heading = styled(Typography)({
  color: `${theme.palette.secondary.dark}`,
});

const FirstGrid = styled(Grid)({
  width: '78%',
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
interface IHomePageProps {
  onClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
}

interface UserLocationType {
  userLocation: string;
}

const HomePage = () => {
  const [togglePage, setTogglepage] = useState<boolean>(false);
  const [onclick, setOnClick] = useState<boolean>(false);
  const [jobData, setJobData] = useState<Array<Job>>();
  const [filteredJobData, setFilteredJobData] = useState<Array<Job>>();
  const [filterMenuState, setFilterMenuState] = useState(false);
  const [skills, setSkills] = useState<NewValueType>();
  const [location, setLocation] = useState<NewValueType>();
  const navigate = useNavigate();
  const [jobData2, setJobData2] = useState<Array<Job>>([]);

  const contextData = useLocation();
  const { userLocation } = contextData.state as UserLocationType;
  console.log('Location: ', userLocation);

  const getJobData2 = async () => {
    fetchAllSavedJobs().then((jobsData) => {
      setJobData2(jobsData);
    });
  };

  const handleClose = () => {
    setFilterMenuState(!filterMenuState);
  };
  const handleToggle = () => {
    setTogglepage(!togglePage);
  };

  const openFilterMenu = () => {
    setFilterMenuState(true);
  };

  const getJobData = async () => {
    fetchAllJobs().then((jobs) => {
      setJobData(jobs);
      if (filteredJobData === undefined) {
        console.log('inside ');
        setFilteredJobData(jobs);
      }
    });
  };

  const wrapOnClickHandler = (skill: NewValueType, jobLocation: NewValueType) => {
    if (skill !== undefined && jobLocation !== undefined) {
      setSkills(skill);
      setLocation(jobLocation);
      setOnClick(!onclick);
    }
  };

  const filterJobData = async () => {
    //filter job data based on skill and location
    const filteredData = jobData?.filter(
      (job) => job.location.includes(location + '') && job.jobTitle.includes(skills + '')
    );
    if (filteredData?.length === 0) {
      console.log('Filtered Data is not available');
      setFilteredJobData(jobData);
    } else {
      setFilteredJobData(filteredData);
    }
  };
  const onClickHandler = () => {
    navigate('/jobs/selectedView', { state: { userLocation: userLocation } });
  };

  useEffect(() => {
    {
      getJobData2();
      !onclick && skills == undefined && location == undefined ? getJobData() : filterJobData();
    }
  }, [onclick, skills, location]);
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
  const handlepageToggle = () => {
    if (!togglePage) {
      return (
        <>
          <FilterMenu
            filterMenuState={filterMenuState}
            handleClose={handleClose}
            data={filterData}
            data-testid='filter-menu'
          />
          <HomeContainer container direction='row'>
            <FirstGrid item>
              <Heading variant='h2'>Find Jobs</Heading>
              <JobSearch data-testid='job-search' aria-role='search-bar' onClickHandler={wrapOnClickHandler} />
            </FirstGrid>
            <Grid item>
              <FilterButton
                startIcon={<Icon url={'/assets/icons/filterIcon.png'} />}
                children='Filter'
                onClickHandler={openFilterMenu}
              />
            </Grid>
          </HomeContainer>
          <JobContainer container>
            <Grid item xs={12}>
              <Heading variant='h2'>Recommended for you</Heading>
              <Subtitle variant='body2'>Based on your profile, skills and search history.</Subtitle>
            </Grid>
            {filteredJobData?.map((job) => {
              return (
                <JobListGrid item xs='auto' key={job.id}>
                  <JobListCard
                    id={job.id}
                    company={job.company}
                    title={job.jobTitle}
                    location={job.location}
                    square={true}
                    companyLogo={job.logo}
                    postedDate={job.datePosted}
                    onClickNavigate={onClickHandler}
                  />
                </JobListGrid>
              );
            })}
          </JobContainer>
        </>
      );
    } else {
      return (
        <>
          <MainContainer2 container direction='row'>
            <Grid item xs={9} lg={9}>
              <Heading variant='h2'>Saved Jobs</Heading>
            </Grid>
          </MainContainer2>
          <JobsContainer2 container>
            <Grid container direction='row'>
              <Grid item xs={12}>
                <Grid container>{renderDescription2()}</Grid>
              </Grid>
            </Grid>
          </JobsContainer2>
        </>
      );
    }
  };

  return (
    <TemplateHomePage
      header={<Header userLocation={userLocation ? userLocation : 'East Maredpally, Secunderabad'} />}
      sideMenu={<SideMenu toggler={handleToggle} />}
      data-testid='home-template'
    >
      {handlepageToggle()}
    </TemplateHomePage>
  );
};

export default HomePage;
