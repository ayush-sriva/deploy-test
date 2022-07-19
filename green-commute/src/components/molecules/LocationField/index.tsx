/**
 * @author Abhishek Bhemisetty <abhishek.bhemisetty@zemosolabs.com>
 */

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CustomSvgIcon from '../../atoms/IconSVG';
import { ReactComponent as LocationIcon } from '../../../../public/assets/icons/locationIconWhite.svg';
import theme from '../../../theme';
import React, { ChangeEvent } from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
  input: {
    color: `${theme.palette.primary.contrastText} !important`,
  },
});

interface LocationFieldProps {
  width: string;
  location: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CssTextField = styled(TextField)({
  width: '320px',
  height: '36px',
  paddingBottom: `${theme.spacing(2)}`,
  '& .MuiInputBase-input': {
    color: `${theme.palette.primary.contrastText}`,
    '&:hover fieldset': {
      borderColor: `${theme.palette.primary.contrastText}`,
    },
  },
  '& .MuiInput-underline:before': {
    borderBottom: '2px solid white !important',
    transition: 'none ',
  },
  '& .MuiInput-underline:hover': {
    borderColor: `${theme.palette.primary.contrastText}`,
    transition: 'none ',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
    transition: 'none ',
  },
});

const LocationBox: React.FC<LocationFieldProps> = ({ width, location, onChangeHandler, ...props }) => {
  const classes = useStyles();

  const wrapHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(event);
  };

  return (
    <Box>
      <CssTextField
        id='input-with-icon-textfield'
        data-testid='textfield-loc'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <CustomSvgIcon component={LocationIcon} htmlColor='transparent' />
            </InputAdornment>
          ),
          inputProps: { className: classes.input },
        }}
        variant='standard'
        defaultValue={location}
        onChange={wrapHandleChange}
        {...props}
      />
    </Box>
  );
};

export default LocationBox;
