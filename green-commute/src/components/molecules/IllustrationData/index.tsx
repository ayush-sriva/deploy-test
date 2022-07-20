/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typography from '../../atoms/Typography/index';
import Illustration from '../../atoms/Illustration';
import responsiveTheme from '../../../theme';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  url: string;
}

const useStyles = makeStyles({
  container: {
    maxWidth: '417px',
    height: '348px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: `${responsiveTheme.palette.secondary.dark}`,
    textAlign: 'center',
    marginTop: '40px',
  },
});

const IllustrationData:React.FC<IProps> = ({url, children}) => {
    const classes = useStyles();
  return (
    <div data-testid='illustrationData'>
      <Grid
        container
        direction='column'
        className={classes.container}
        wrap='nowrap'
       
      >
        <Grid item>
          <Illustration url={url} />
        </Grid>

        <Grid item>
          <Typography
            variant='h2'
            className={classes.text}
            
          >
            {children}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default IllustrationData;
