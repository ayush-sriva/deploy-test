import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactNode } from 'react';
import Typography from '../../atoms/Typography/index';
import responsiveTheme from '../../../theme';
import AQI from '../../../../public/assets/illustrations/AQI-egg.png';

interface AQIProps {
  children: ReactNode;
  index: string;
}

const useStyles = makeStyles({
  container: {
    width: '417px',
    height: '348px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aqi: {
    backgroundImage: `url(${AQI})`,
    width: '212px',
    height: '214px',
    paddingLeft: '63px',
    paddingTop: '37px',
  },
  innerText: {
    color: `${responsiveTheme.palette.secondary.main}`,
    textAlign: 'center',
    marginTop: '40px',
  },
  text: {
    color: `${responsiveTheme.palette.secondary.dark}`,
    textAlign: 'center',
    paddingTop: '40px',
  },
});

const AQIIndex: React.FC<AQIProps> = (props) => {
  const classes = useStyles();
  return (
    
      <Grid container direction='column' wrap='nowrap' className={classes.container}>
        <Grid item className={classes.aqi}>
          <Typography variant='body3' className={classes.innerText}>
            {props.index}
          </Typography>
        </Grid>

        <Grid item className={classes.text}>
          <Typography variant='h2'>{props.children}</Typography>
        </Grid>
      </Grid>
    
  );
};

export default AQIIndex;
