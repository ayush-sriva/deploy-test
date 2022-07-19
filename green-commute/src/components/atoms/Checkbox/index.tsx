import { Checkbox, FormControlLabel, styled } from '@mui/material';
import { ReactComponent as unChecked } from './unChecked.svg';
import { ReactComponent as checked } from './checked.svg';
import responsiveTheme from '../../../theme/index';

import CustomSvgIcon from '../IconSVG';

interface CheckBoxProps {
  label: string | undefined;
  onLabelChange?: (event: React.ChangeEvent<HTMLInputElement>, labelChecked: boolean) => void;
  labelChecked?: boolean;
  disabled?: boolean;
  name?: string;
}

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  '& .MuiFormControlLabel-label': {
    fontWeight: '500',
    fontFace: responsiveTheme.typography.body2,
    color: responsiveTheme.palette.secondary.darker,
  },
}));

const StyledCheckbox = styled(Checkbox)({
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiSvgIcon-root': {
    width: '1rem',
    height: '1rem',
    borderRadius: '0.3rem',
  },
});

const CheckBoxComponent = (props: CheckBoxProps) => {
  const { label, onLabelChange, disabled, labelChecked, name } = props;

  return (
    <StyledFormControlLabel
      control={
        <StyledCheckbox
          icon={<CustomSvgIcon component={unChecked} />}
          checkedIcon={<CustomSvgIcon component={checked} />}
          onChange={onLabelChange}
          value={label}
          name={name}
          checked={labelChecked}
          disabled={disabled}
          {...props}
        />
      }
      label={label}
    />
  );
};

export default CheckBoxComponent;
