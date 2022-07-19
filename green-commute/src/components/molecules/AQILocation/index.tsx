/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typography from '../../atoms/Typography/index';
import responsiveTheme from '../../../theme';
import AQI from '../../../../public/assets/illustrations/AQI-egg.png';
import { ReactNode } from 'react';

interface AQIProps {
  location: string;
  index: string;
}

const useStyles = makeStyles({
  container: {
    width: '417px',
    height: '348px',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: `${responsiveTheme.palette.warning.dark}`,
    textAlign: 'center',
    paddingLeft: '32px',
  },
  item: {
    marginTop: '27px',
  },
});

const AQIIndexLocation = (props: AQIProps) => {
  const classes = useStyles();
  return (
   
      <Grid container direction='row' className={classes.container}>
        <Grid item className={classes.aqi}>
          <Typography variant='body3' className={classes.innerText}>
            {props.index}
          </Typography>
        </Grid>

        <Grid item className={classes.item}>
          <Typography variant='h3' className={classes.text}>
            {props.location}
          </Typography>
        </Grid>
      </Grid>
    
  );
};

export default AQIIndexLocation;
