import {Box} from '@mui/material';
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/icon';
import baseTheme from '../../../theme/index';
const IconTypography = ({_height=26, url, name}:any) => {
    return (
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
            data-testid="icontypography"
        >

            <Icon src={url} />

            <Typography 
                sx={{
                    fontWeight: 'bold',
                    fontSize: '12px',
                    color:`${baseTheme.palette.text.primary}`
                }}
            >
               {name}
            </Typography>
        </Box>
        
    );
}

export default IconTypography;