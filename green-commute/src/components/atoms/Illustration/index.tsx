/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import React from 'react';
import { CommonProps } from '@mui/material/OverridableComponent';

interface IllustrationProps {
  url: string;
}

const Illustration:React.FC<IllustrationProps & CommonProps> = ({ url}) =>  <img src={url} alt='illustration' />;


export default Illustration;
