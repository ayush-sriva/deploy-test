/**
 * @author Abhishek Bhemisetty <abhishek.bhemisetty@zemosolabs.com>
 */

import Grid from '@mui/material/Grid';
import Logo from '../../atoms/Logo';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import makeStyles from '@mui/styles/makeStyles';

interface ListProps {
  logoUrl: string;
  company: string;
  approx: string;
  fare: string;
}

const useStyles = makeStyles({
  paper: {
    backgroundColor: `${theme.palette.primary.contrastText}`,
    maxWidth: '350px',
    flexGrow: 1,
    height: '60px',
    marginBottom: '8px',
  },
  grid: {
    textAlign: 'center',
  },
  colorText: {
    color: `${theme.palette.primary.main}`,
  },
});

const ListItem: React.FC<ListProps> = ({ logoUrl, company, approx, fare }) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.paper}>
      <Grid container spacing={1} justifyContent='space-between' alignItems='center' data-testid='main-grid'>
        <Grid className={classes.grid} item xs={1.5} data-testid='logo-grid'>
          <Logo url={logoUrl} />
        </Grid>
        <Grid item xs={7} sm>
          <Grid container direction='column' justifyContent='space-between' spacing={3}>
            <Grid container item xs={6}>
              <Typography variant='captionBold'>{company}</Typography>
            </Grid>
            <Grid container item xs={6}>
              <Typography variant='caption'>
                {approx} ₹{fare}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} data-testid='book-now'>
          <Typography variant='captionBold' className={classes.colorText}>
            Book Now
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ListItem;
