/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactNode } from 'react';
import Typography from '../../atoms/Typography/index';
import responsiveTheme from '../../../theme';
import AQIIndexLocation from '../AQILocation';

interface AQIData {
  id: string;
  index: string;
  location: string;
}
interface AQIProps {
  children: ReactNode;
  data: Array<AQIData>;
}

const useStyles = makeStyles({
  container: {
    width: '417px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: '250px',
    paddingLeft: '25px',
    marginBottom: '32px',
  },
  text: {
    color: `${responsiveTheme.palette.secondary.dark}`,
    textAlign: 'center',
    paddingTop: '50px',
  },
});

const AQIIndexGroup: React.FC<AQIProps> = (props) => {
  const data = props.data;
  const classes = useStyles();
  return (
    
      <Grid container className={classes.container}>
        {data.map((currentData) => {
          return (
            <Grid item key={currentData.id} className={classes.item}>
              <AQIIndexLocation index={currentData.index} location={currentData.location} />
            </Grid>
          );
        })}

        <Grid item className={classes.text}>
          <Typography variant='h2'>{props.children}</Typography>
        </Grid>
      </Grid>
    
  );
};

export default AQIIndexGroup;
