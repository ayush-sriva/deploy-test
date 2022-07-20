import theme from '../../../theme';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '../../atoms/Button';
import InputField from '../../atoms/InputField';
import SingleInputField from '../../atoms/TextField';
import TypographyComponent from '../../atoms/Typography';
import TabPanel from '../TabPanel';
import React, { useContext } from 'react';
import { CommonProps } from '@mui/material/OverridableComponent';
import { styled } from '@mui/material';
import { JobLocationContext, UserLocationContext, UserSkillsContext } from '../../pages/LandingPage';

interface TabPanelProps {
  searchBarText?: string;
  currentPage: number;
  backClickHandlerWrap: React.MouseEventHandler<HTMLButtonElement>;
  nextClickHandlerWrap: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonGrid = styled(Grid)({
  marginTop: '40px !important',
});

const GridTab = styled(Grid)({
  height: '60px',
});

const Skip = styled(TypographyComponent)({
  width: '38px',
  marginTop: '60px !important',
  color: `${theme.palette.primary.main}`,
  borderBottom: `2px solid ${theme.palette.primary.main}`,
});

const Subtitle = styled(TypographyComponent)({
  marginBottom: '12px !important',
});

const SpacedButton = styled('div')({
  display: 'inline',
  padding: '0px',
  paddingRight: '12px',
});

const MainContainer = styled(Container)({
  width: '672px',
  marginLeft: '0px',
  paddingLeft: '0px',
});

const TypoGrid = styled(Grid)({
  marginTop: '72px',
  marginBottom: '64px',
});

const MainCard: React.FC<TabPanelProps & CommonProps> = ({
  currentPage,
  backClickHandlerWrap,
  nextClickHandlerWrap,
}) => {
  const locationContext = useContext(UserLocationContext);
  let jobContext = useContext(JobLocationContext);
  let skillContext = useContext(UserSkillsContext);
  let jobLocationOptions = ['Hyderabad', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai'];
  let userSkillsOptions = ['UI/UX Designer', 'Graphic Designer', 'Python Developer'];

  //for just checking the feature, implementation will be added in pages
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  //for just checking the feature, implementation will be added in pages
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const wrapLocationHandler = (location: string[]) => {
    jobContext.setJobLocation(location);
    console.log('current location: ' + location);
  };

  const wrapSkillHandler = (skill: string[]) => {
    console.log('skill data ' + skill);
    skillContext.setUserSkills(skill);
  };

  const wrapUserLocationHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    locationContext.setUserLocation(event.target.value);
    console.log(locationContext.userLocation);
  };

  const renderInputField = (currentPage: number) => {
    if (currentPage === 0) {
      return (
        <SingleInputField
          placeholderText={'Enter your location'}
          value={locationContext.userLocation}
          eventHandler={wrapUserLocationHandler}
        />
      );
    } else if (currentPage === 1) {
      return (
        <InputField
          key={'current input'}
          placeholder={'Enter your job location'}
          handleClick={handleClick}
          handleDelete={handleDelete}
          eventHandler={wrapLocationHandler}
          values={jobContext.jobLocation}
          options={jobLocationOptions}
        ></InputField>
      );
    } else if (currentPage === 2) {
      return (
        <InputField
          key={'new input'}
          placeholder={'Enter your skills'}
          handleClick={handleClick}
          handleDelete={handleDelete}
          eventHandler={wrapSkillHandler}
          values={skillContext.userSkills}
          options={userSkillsOptions}
        ></InputField>
      );
    }
  };

  const renderSearchBarText = (currentPage: number) => {
    if (currentPage === 0) {
      return <Subtitle variant='subtitle1'>Where do you stay?</Subtitle>;
    } else if (currentPage === 1) {
      return <Subtitle variant='subtitle1'>Where do you want to work?</Subtitle>;
    } else if (currentPage === 2) {
      return <Subtitle variant='subtitle1'>What do you want to do?</Subtitle>;
    }
  };

  return (
    <MainContainer>
      <Grid container direction='column' justifyContent='center'>
        <GridTab item>{currentPage === 0 ? <TabPanel></TabPanel> : <TabPanel pageId={currentPage} />}</GridTab>
        <TypoGrid item>
          <TypographyComponent variant='h1'>More than 2000 people are using Green Commute</TypographyComponent>
        </TypoGrid>
        <Grid item>
          {renderSearchBarText(currentPage)}
          {renderInputField(currentPage)}
        </Grid>
        <ButtonGrid item>
          {currentPage > 0 ? (
            <SpacedButton>
              <Button
                color='primary'
                buttonVariant='outlined'
                type='reset'
                typoVariant='body1'
                onClickHandler={backClickHandlerWrap}
                size='large'
              >
                Back
              </Button>
            </SpacedButton>
          ) : (
            ''
          )}
          <Button
            color='primary'
            buttonVariant='contained'
            type='button'
            typoVariant='body1'
            onClickHandler={nextClickHandlerWrap}
            size='medium'
          >
            Next
          </Button>
        </ButtonGrid>
        <Grid item>
          <Skip variant='subtitle1'>Skip</Skip>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

MainCard.defaultProps = {
  searchBarText: 'Where do you stay?',
};

export default MainCard;
