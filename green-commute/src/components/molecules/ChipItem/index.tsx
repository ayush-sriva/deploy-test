import { Chip, styled } from '@mui/material';
import responsiveTheme from '../../../theme';
import Icon from '../../atoms/Icon';

interface ChipProps {
  label: string;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
  handleDelete?: React.MouseEventHandler<HTMLDivElement>;
  color: 'primary' | 'secondary';
}

const StyledChip = styled(Chip)((props) => ({
  borderRadius: '8px',
  height: '38px',
  backgroundColor:
    props.color === 'primary' ? responsiveTheme.palette.info.light : responsiveTheme.palette.primary.contrastText,
  paddingRight: '0.75rem',
  marginRight: '8px',
  '&:hover': {
    backgroundColor:
      props.color === 'primary' ? responsiveTheme.palette.info.light : responsiveTheme.palette.primary.contrastText,
  },
  '& .MuiChip-label': {
    fontSize: '0.75rem',
    fontWeight: '500',
    lineHeight: '1rem',
    color: responsiveTheme.palette.secondary.dark,
  },
  '& .MuiChip-deleteIcon': {
    paddingRight: '1.25rem',
  },
}));

const renderDeleteIcon = (color: 'primary' | 'secondary') => {
  if (color === 'primary') {
    return <Icon url={'/assets/icons/deleteIcon.png'} />;
  } else {
    return <Icon url={'/assets/icons/DeleteIconWhite.png'} />;
  }
};

const ChipItem = (props: ChipProps) => {
  const { label, handleClick, handleDelete, color } = props;
  return (
    <StyledChip
      label={label}
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={renderDeleteIcon(color)}
      color={color}
    />
  );
};

export default ChipItem;
