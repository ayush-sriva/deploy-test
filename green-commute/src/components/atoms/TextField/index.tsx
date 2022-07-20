import { styled, TextField } from '@mui/material';
import responsiveTheme from '../../../theme';

interface InputProps {
  placeholderText: string;
  eventHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
}

const StyledTextField = styled(TextField)(() => ({
  width: '400px',
  height: '48px',
  [responsiveTheme.breakpoints.down('sm')]: {
    width: '200px',
    height: '24px',
  },
  borderRadius: '8px',
  '& label.Mui-focused': {
    color: responsiveTheme.palette.primary.semilight,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: responsiveTheme.palette.greyScale.dark,
    },

    '&:hover fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: responsiveTheme.palette.info.dark,
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    },
    '&.Mui-focused fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: responsiveTheme.palette.info.dark,
    },
  },
  input: {
    '&::placeholder': {
      fontFace: responsiveTheme.typography.caption,
      color: responsiveTheme.palette.secondary.light,
    },
  },
}));

const StyledInputField: React.FC<InputProps> = ({ placeholderText, eventHandler, value }) => {
  return <StyledTextField variant='outlined' value={value} placeholder={placeholderText} onChange={eventHandler}/>;
};

export default StyledInputField;
