/**
 * @author Bhavani Somanchi <bhavani.somanchi@zemosolabs.com>
 */

import { Radio, FormControlLabel, styled, RadioProps } from '@mui/material';
import responsiveTheme from '../../../theme';

interface RadioButtonProps {
  label: string;
}

const StyledRadio = styled(Radio)({
  '& .MuiRadio-root': {
    '&:hover': {
      backgroundColor: 'none',
    },
  },
});

const UncheckedIcon = styled('span')({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: responsiveTheme.palette.primary.contrastText,
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
});

const CheckedIcon = styled('span')({
  borderRadius: '50%',
  backgroundColor: responsiveTheme.palette.primary.dark,
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
});

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  '& .MuiFormControlLabel-label': {
    fontWeight: '500',
    fontFace: responsiveTheme.typography.body2,
    color: responsiveTheme.palette.secondary.darker,
    marginTop: '0.125rem'
  },
}));

function RadioButton(props: RadioProps) {
  return <StyledRadio disableRipple={true} checkedIcon={<CheckedIcon />} icon={<UncheckedIcon />} {...props} />;
}

const RadioButtonComponent: React.FC<RadioButtonProps> = ({ label }) => {
  return <StyledFormControlLabel value={label} control={<RadioButton />} label={label} />;
};

export default RadioButtonComponent;
