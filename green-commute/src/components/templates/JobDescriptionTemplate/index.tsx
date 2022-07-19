/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import { Grid, Paper, styled } from '@mui/material';
import responsiveTheme from '../../../theme';
import CommonRoutesCard from '../../organisms/CommonRoutes';
import CabCard from '../../organisms/CabCard';
import MetroCard from '../../organisms/MetroCard';
import Olaurl from '../../../../public/assets/logos/ola.png';
import Rapido from '../../../../public/assets/logos/rapido.png';
import Uber from '../../../../public/assets/logos/uber.png';
import JobDesCard from '../../organisms/JobDesCard';
import { useState } from 'react';
import JobDetailsCard from '../../organisms/JobDetailsCard';

interface JobData {
  company: string;
  title: string;
  location: string;
  companyLogo: string;
  postedDate: string;
}

interface JobDescriptionProps {
  description: string;
  aboutCompany: string;
  currentLocation: string;
  destination: string;
  jobDescData: JobData;
}
const MainContainer = styled(Paper)({
  maxWidth: '404px',
  paddingTop: '1.5rem',
  paddingLeft: '1.312rem',
  paddingRight: '1.312rem',
  height: '44.18rem',
  borderRadius: '0.75rem',
});

const Divider = styled('hr')({
  width: '24.8rem',
  border: `0.5px solid ${responsiveTheme.palette.greyScale.main}`,
  bordeRadius: '50%',
  marginTop: '1.5rem',
  marginBottom: '1.5rem',
});

const JobDescriptionTemplate: React.FC<JobDescriptionProps> = ({
  description,
  aboutCompany,
  currentLocation,
  destination,
  jobDescData,
}) => {
  const [jobDescription, setJobDescription] = useState(true);
  const [cabCard, setCabCard] = useState(false);

  const data = [
    {
      id: 'CabData1001',
      logoUrl: Olaurl,
      company: 'Ola',
      approx: 'Approximately  ',
      fare: '45',
    },
    {
      id: 'CabData1002',
      logoUrl: Rapido,
      company: 'Ola',
      approx: 'Approximately  ',
      fare: '45',
    },
    {
      id: 'CabData1003',
      logoUrl: Uber,
      company: 'Ola',
      approx: 'Approximately  ',
      fare: '45',
    },
  ];
  const toggleCommuteRoutes = () => {
    setJobDescription(!jobDescription);
  };
  const toggleRouteCards = () => {
    setCabCard(!cabCard);
    console.log('in toogleRouteCards');
  };

  const commonRoutesToggler = () => {
    if (cabCard) {
      return <CabCard data={data} />;
    } else {
      return <MetroCard />;
    }
  };
  const jobDescriptionToggler = () => {
    if (jobDescription) {
      return (
        <Grid item>
          <JobDetailsCard description={description} aboutCompany={aboutCompany} onClickHandler={toggleCommuteRoutes} />
        </Grid>
      );
    } else {
      return (
        <Grid item>
          <CommonRoutesCard
            currentLocation={currentLocation}
            destination={destination}
            onClickHandler={toggleCommuteRoutes}
            routeToggle={toggleRouteCards}
          />
          <Divider />

          <Grid item>{commonRoutesToggler()}</Grid>
        </Grid>
      );
    }
  };

  return (
    <MainContainer>
      <Grid container direction='column'>
        <Grid item>
          <JobDesCard
            companyLogo={jobDescData.companyLogo}
            company={jobDescData.company}
            title={jobDescData.title}
            location={jobDescData.location}
            postedDate={jobDescData.postedDate}
          />
        </Grid>
        <Divider />
        {jobDescriptionToggler()}
      </Grid>
    </MainContainer>
  );
};

export default JobDescriptionTemplate;
