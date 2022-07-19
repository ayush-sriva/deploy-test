/**
 * @author Bhavani Somanchi <bhavani.somanchi@zemosolabs.com>
 */

import { Autocomplete, Chip, styled, TextField } from '@mui/material';
import responsiveTheme from '../../../theme/index';
import ChipItem from '../../molecules/ChipItem';

interface InputProps {
  placeholder: string | undefined;
  values?: string[];
  options?: string[];
  eventHandler: (location: string[]) => void;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  handleDelete: React.MouseEventHandler<HTMLDivElement>;
}

const StyledInput = styled(TextField)(() => ({
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

const InputComponent = (props: InputProps) => {
  let values: string[] = props.values ? props.values : [];
  console.log(values);

  const { placeholder, handleClick, handleDelete, eventHandler } = props;
  return (
    <Autocomplete
      multiple
      id='tags-filled'
      options={props.options ? props.options : []}
      value={[...values]}
      freeSolo
      onChange={(_event, value) => {
        eventHandler(value);
      }}
      renderInput={(params) => (
        <StyledInput {...params} variant='outlined' label='' placeholder={values.length > 0 ? '' : placeholder} />
      )}
      renderTags={(value: string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <ChipItem
            label={option}
            handleClick={handleClick}
            handleDelete={handleDelete}
            color={'primary'}
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
};

export default InputComponent;
