/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import TemplateHomePage from '../../templates/HomePage';
import Header from '../../organisms/Header';
import SideMenu from '../../organisms/SideMenu';
import Icon from '../../atoms/Icon';
import { Grid, styled } from '@mui/material';
import theme from '../../../theme';
import JobSearch, { NewValueType } from '../../organisms/JobSearch';
import { useState, useEffect } from 'react';
import JobCard from '../../organisms/FindCard';
import FilterMenu from '../../organisms/FilterMenu';
import FilterButton from '../../molecules/FilterButton';
import JobDescriptionTemplate from '../../templates/JobDescriptionTemplate';
import styles from '../../templates/JobDescriptionTemplate/style.module.css';
import { filterData, initialDetails, currentDetails } from '../../../utils/constants';
import { fetchAllJobs, fetchAllSavedJobs } from '../../../service/JobService';
import JobList from '../../organisms/JobList';
import responsiveTheme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import Typography from '../../atoms/Typography';
import React from 'react';
import { useLocation } from 'react-router-dom';

const MainContainer = styled(Grid)({
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
const JobsContainer = styled(Grid)({
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
const JobGrid = styled(Grid)({
  marginRight: '15px',
  [theme.breakpoints.up('lg')]: {
    marginTop: '2rem',
    width: '576px ',
    height: '159px ',
    borderRadius: '12px',
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: '2rem',
  },
});
const DescriptionGrid = styled(Grid)({
  marginLeft: '1rem',
  [theme.breakpoints.up('lg')]: {
    marginTop: '2rem',
    width: '450px ',
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: '2rem',
  },
});
const NewJobCard = styled(JobCard)({
  [theme.breakpoints.up('xl')]: {
    padding: '0.5rem',
  },
});
const Heading = styled(TypographyComponent)({
  color: responsiveTheme.palette.secondary.dark,
  paddingBottom: '0.25rem',
});
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

const FilterGrid = styled(Grid)({
  paddingTop: '2px',
});
interface CompanyDetails {
  company: string;
  title: string;
  location: string;
  companyLogo: string;
  postedDate: string;
  isApplied: string;
  isSaved: string;
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
  city: string;
}
export interface ILabelsContext {
  filterLabels: string[];
  setFilterLabels: React.Dispatch<React.SetStateAction<string[]>>;
}

export const LabelsContext = React.createContext<ILabelsContext>({
  filterLabels: [],
  setFilterLabels: () => {},
});

interface UserLocationType {
  userLocation: string;
}

let previousElement: any = document.getElementById('1');

const JobDescriptionView = () => {
  const [filterLabels, setFilterLabels] = useState<string[]>([]);
  const filterLabelsValue = { filterLabels, setFilterLabels };
  const [filteredJobData, setFilteredJobData] = useState<Array<Job>>();
  const [skills, setSkills] = useState<NewValueType>();
  const [onclick, setOnClick] = useState<boolean>(false);
  const [location, setLocation] = useState<NewValueType>();
  const [filterMenuState, setFilterMenuState] = useState(false);
  const [detailedView, setDetailedView] = useState(true);
  const [jobData, setJobData] = useState<Array<Job>>([]);
  const [togglePage, setTogglepage] = useState<boolean>(false);
  const [savedJobData, setSavedJobData] = useState<Array<Job>>([]);
  const [details, setDetails] = useState(initialDetails);

  const contextData = useLocation();
  const { userLocation } = contextData.state as UserLocationType;
  console.log('in jobdesc view Location: ', userLocation);

  const getJobData = async () => {
    await fetchAllJobs().then((jobsData) => {
      setJobData(jobsData);
      if (filteredJobData === undefined) {
        setFilteredJobData(jobsData);
      }
    });
    await fetchAllSavedJobs().then((jobsDataSave) => {
      console.log('saved jobs');
      setSavedJobData(jobsDataSave);
      console.log(jobsDataSave);
      console.log('saved jobs');
    });
  };

  useEffect(() => {
    !onclick && skills == undefined && location == undefined ? getJobData() : filterJobData();
  }, [details, onclick, skills, location]);

  const displyDetails = (id: string) => {
    setDetailedView(true);
    let element = document.getElementById(`${id}`);
    previousElement?.classList.toggle(`${styles.cardSelected}`);
    element?.classList.add(`${styles.cardSelected}`);
    previousElement = element;
    if (jobData) {
      for (let job of jobData) {
        if (job.id == id) {
          setDetails(job.details);
        }
      }
    }
  };

  const handleDetailedView = () => {
    if (detailedView) {
      return (
        <JobDescriptionTemplate
          description={currentDetails.description}
          aboutCompany={currentDetails.aboutCompany}
          currentLocation={userLocation}
          destination={currentDetails.location}
          jobDescData={details}
        />
      );
    } else {
      return '';
    }
  };

  const handleClose = () => {
    setFilterMenuState(!filterMenuState);
  };

  const openFilterMenu = () => {
    setFilterMenuState(true);
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
  const handleToggle = () => {
    setTogglepage(!togglePage);
  };

  const handleDelete = () => {
    console.log('You have clicked the delete button');
  };

  const handleClearAll = () => {
    filterLabels.splice(0, filterLabels.length);
    console.log(filterLabels);
    setFilterLabels([...filterLabels]);
  };

  const renderDescription = () => {
    return filteredJobData?.map((jobData) => {
      return (
        <JobGrid key={jobData.id} item onClick={() => displyDetails(jobData.id)}>
          <NewJobCard
            id={jobData.id}
            company={jobData.company}
            title={jobData.jobTitle}
            location={jobData.location}
            square={false}
            companyLogo={jobData.logo}
            postedDate={jobData.datePosted}
          />
        </JobGrid>
      );
    });
  };
  const renderDescription2 = () => {
    return savedJobData?.map((currentData) => {
      return (
        <JobGrid2 key={currentData.id} item>
          <NewJobCard2
            id={currentData.id}
            company={currentData.company}
            title={currentData.jobTitle}
            location={currentData.location}
            square={false}
            companyLogo={currentData.logo}
            postedDate={currentData.datePosted}
          />
        </JobGrid2>
      );
    });
  };
  const rendertogglePages = () => {
    if (!togglePage) {
      return (
        <>
          <FilterMenu
            filterMenuState={filterMenuState}
            handleClose={handleClose}
            data={filterData}
            data-testid='filter-menu'
          />
          <MainContainer container direction='row'>
            <Grid item xs={9} lg={9.5}>
              <Heading variant='h2'>Find Jobs</Heading>
              <JobSearch data-testid='jobSearch' aria-role='search-bar' onClickHandler={wrapOnClickHandler} />
            </Grid>
            <FilterGrid item xs={3} lg='auto'>
              <FilterButton
                startIcon={<Icon url={'/assets/icons/filterIcon.png'} />}
                children='Filter'
                onClickHandler={openFilterMenu}
              />
            </FilterGrid>
          </MainContainer>
          <JobsContainer container>
            <Grid item xs={12}>
              <JobList filters={filterLabels} handleDelete={handleDelete} handleClick={handleClearAll} />
            </Grid>
            <Grid container direction='row'>
              <Grid item xs={6}>
                <Grid container>{renderDescription()}</Grid>
              </Grid>

              <DescriptionGrid item>{handleDetailedView()}</DescriptionGrid>
            </Grid>
          </JobsContainer>
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <LabelsContext.Provider value={filterLabelsValue}>
      <TemplateHomePage
        header={<Header userLocation={userLocation ? userLocation : 'East Maredpally, Secunderabad'} />}
        sideMenu={<SideMenu toggler={handleToggle} />}
        data-testid='home-template'
      >
        {rendertogglePages()}
      </TemplateHomePage>
    </LabelsContext.Provider>
  );
};

export default JobDescriptionView;
