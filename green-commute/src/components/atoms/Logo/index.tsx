/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import React from 'react';
import { CommonProps } from '@mui/material/OverridableComponent';

interface LogoProps {
  url: string;
}

const Logo:React.FC<LogoProps & CommonProps> = ({ url } ) =>  <img data-testid='logo' src={url} alt='Logo'/>;


export default Logo;
