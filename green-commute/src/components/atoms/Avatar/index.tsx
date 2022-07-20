/**
 * @author Abhishek Bhemisetty <abhishek.bhemisetty@zemosolabs.com>
 */

import React from 'react';
import Avatar from '@mui/material/Avatar';
import { CommonProps } from '@mui/material/OverridableComponent';

interface AvatarProps {
  alt: string | undefined;
  src: string;
}

const AvatarComponent: React.FC<AvatarProps & CommonProps> = (props) => {
  const { alt, src } = props;

  return <Avatar alt={alt} src={src} />;
};

export default AvatarComponent;
