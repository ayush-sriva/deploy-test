/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import React, { ReactNode } from 'react';
import { Button } from '@mui/material';
import TypographyComponent from '../Typography';
import { CommonProps } from '@mui/material/OverridableComponent';

interface ButtonProps {
  buttonVariant?: 'text' | 'outlined' | 'contained';
  children: ReactNode;
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined;
  type?: 'button' | 'submit' | 'reset';
  size: 'small' | 'medium' | 'large';
  disableRipple?: boolean;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}
interface TypoProps {
  typoVariant:
    | 'caption'
    | 'captionBold'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'
    | 'inherit'
    | 'button'
    | 'body3'
    | undefined;
}

const ButtonComponent: React.FC<ButtonProps & TypoProps & CommonProps> = ({
  buttonVariant,
  children,
  type,
  size,
  color,
  typoVariant,
  disableRipple,
  onClickHandler,
}) => {
  return (
    <Button
      disableRipple={disableRipple}
      variant={buttonVariant}
      color={color}
      type={type}
      size={size}
      onClick={onClickHandler}
    >
      <TypographyComponent variant={typoVariant}>{children}</TypographyComponent>
    </Button>
  );
};

export default ButtonComponent;
