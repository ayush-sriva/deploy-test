/**
 * @author Bhavani Somanchi <bhavani.somanchi@zemosolabs.com>
 */

import { Button, styled } from '@mui/material';

interface IconButtonProps {
  style?: Object;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled(Button)((props: IconButtonProps) => `${props.style}`);

const IconButtonComponent: React.FC<IconButtonProps> = ({ style, startIcon, endIcon, children, onClickHandler }) => {
  return (
    <StyledButton startIcon={startIcon} style={style} endIcon={endIcon} onClick={onClickHandler}>
      {children}
    </StyledButton>
  );
};

export default IconButtonComponent;
