/**
 * @author Bhavani Somanchi <bhavani.somanchi@zemosolabs.com>
 */

import { Button, styled } from '@mui/material';
import theme from '../../../theme';

interface IconButtonProps {
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled(Button)({
  lineHeight: '22px',
  color: theme.palette.secondary.dark,
  width: '137px !important',
  height: '56px',
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: '32px',
  '& .MuiButton-startIcon': {
    marginRight: '16px',
  },
  marginLeft: '12px',
  marginTop: '2.3rem',
});

const IconButtonComponent: React.FC<IconButtonProps> = ({ startIcon, children, onClickHandler }) => {
  return (
    <StyledButton startIcon={startIcon} onClick={onClickHandler}>
      {children}
    </StyledButton>
  );
};

export default IconButtonComponent;
