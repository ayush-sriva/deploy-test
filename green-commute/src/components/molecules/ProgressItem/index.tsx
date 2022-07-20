/**
 * @author Abhishek Bhemisetty <abhishek.bhemisetty@zemosolabs.com>
 */

import Avatar from '@mui/material/Avatar';
import Typography from '../../atoms/Typography';
import Grid from '@mui/material/Grid';

interface ProgressProps {
  value: string | React.ReactNode;
  label: string;
  status: string;
}

const ProgressItem: React.FC<ProgressProps> = ({ value, status, label }) => {
  return (
    <Grid container data-testid='item-container'>
      <Grid item>
        <Avatar alt={status}>{value}</Avatar>
      </Grid>
      <Grid item>
        <Typography variant='subtitle1' align='justify' color={status}>
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProgressItem;
