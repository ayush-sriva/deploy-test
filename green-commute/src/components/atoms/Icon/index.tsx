/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import React from 'react';
import { CommonProps } from '@mui/material/OverridableComponent';

interface IconProps {
  url: string;
  onClickHandler?: React.MouseEventHandler<HTMLImageElement> | undefined;
}

const Icon: React.FC<IconProps & CommonProps> = ({ url }) => <img data-testid='icon' src={url} alt='Icon' />;

export default Icon;
