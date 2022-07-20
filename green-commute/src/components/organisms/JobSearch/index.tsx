/**
 * @author Abhishek Bhemisetty <abhishek.bhemisetty@zemosolabs.com>
 */

import IconButton from '../../molecules/IconButton';
import { Box, Stack, TextField } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import theme from '../../../theme';
import Icon from '../../atoms/Icon';
import Search from '../../../../public/assets/icons/search.png';
import { styled } from '@mui/material/styles';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useState } from 'react';

export type NewValueType = string | null | unknown;

interface JobSearchProps {
  onClickHandler: (skills: NewValueType, jobs: NewValueType) => void;
}

const RoundStack = styled(Stack)({
  borderRadius: '32px',
  width: '100%',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  fontWeight: '500',
  color: `${theme.palette.secondary.darker}`,
  backgroundColor: `${theme.palette.primary.contrastText}`,
  [theme.breakpoints.down('md')]: { flexDirection: 'column' },
});

const InnerBox = styled(Box)({
  width: '100%',
  borderRight: '1px solid',
  borderColor: `${theme.palette.greyScale.dark}`,
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '15px',
  marginRight: '10px',
});

const FlexBox = styled(Box)({
  height: '36px',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
});

const AutoComplete = styled(Autocomplete)({});

const CustomTextField = styled(TextField)({
  width: '100%',
  border: '0px',

  '& .MuiInput-underline:before': {
    borderBottom: '2px solid white',
    transition: 'none ',
  },
  '& .MuiInput-underline:hover': {
    borderBottom: 'none',
    transition: 'none ',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
    transition: 'none ',
  },
  //to change the border color of textfield
  '& .MuiOutlinedInput-root': {
    '& > fieldset': { border: '0px' },
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    borderColor: `${theme.palette.greyScale.dark}`,
    '& > fieldset': { border: '0px' },
  },
});

const searchButtonStyle = {
  backgroundColor: `${theme.palette.primary.main}`,
  height: '42px',
  borderRadius: '52%',
  minWidth: '46px',
  marginRight: '6px',
  marginLeft: '6px',
};

const FindJobs: React.FC<JobSearchProps & CommonProps> = ({ onClickHandler }) => {
  //mocking user skills and job locations till server is setup
  const userSkills = ['User Experience Designer', 'Python Developer', 'Java Developer'];
  const jobLocations = ['Hyderabad', 'Secunderabad', 'Banglore', 'Mumbai'];
  const [skills, setSkills] = useState<NewValueType>();
  const [jobs, setJobs] = useState<NewValueType>();

  //added log stmts as placeholders functionality will be added in pages
  const clickHandlerWrap = (_event: React.MouseEvent<HTMLButtonElement>) => {
    onClickHandler(skills, jobs);
  };

  return (
    <RoundStack
      direction='row'
      aria-label='Job Search Field'
      role='searchbox'
      aria-roledescription='Search For a Job'
      data-testid='searchbar'
    >
      <FlexBox>
        <InnerBox>
          <WorkOutlineIcon />
          <AutoComplete
            fullWidth
            freeSolo
            disableClearable
            options={userSkills}
            onInputChange={(_event: React.SyntheticEvent<Element, Event>, newValue: NewValueType) => {
              setSkills(newValue ? newValue : '');
            }}
            onChange={(_event: React.SyntheticEvent<Element, Event>, newValue: NewValueType) => {
              setSkills(newValue ? newValue : '');
            }}
            data-testid='skill'
            renderInput={(params) => <CustomTextField placeholder='Search Skills' {...params} />}
          />
        </InnerBox>
        <LocationOnOutlinedIcon />
        <AutoComplete
          fullWidth
          freeSolo
          options={jobLocations}
          disableClearable
          onInputChange={(_event: React.SyntheticEvent<Element, Event>, newValue: NewValueType) => {
            setJobs(newValue ? newValue : '');
          }}
          onChange={(_event: React.SyntheticEvent<Element, Event>, newValue: NewValueType) => {
            setJobs(newValue ? newValue : '');
          }}
          data-testid='location'
          renderInput={(params) => <CustomTextField {...params} placeholder='Location' />}
        />

        <IconButton
          aria-hidden='false'
          aria-label='Search button'
          style={searchButtonStyle}
          onClickHandler={clickHandlerWrap}
        >
          <Icon url={`${Search}`} />
        </IconButton>
      </FlexBox>
    </RoundStack>
  );
};

export default FindJobs;
