/**
 * @author Abhishek Bhemisetty <abhishek.bhemisetty@zemosolabs.com>
 */

import { Box, Drawer, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import theme from '../../../theme';

interface HomePageTemplateProps {
  header: React.ReactNode;
  children: React.ReactNode;
  sideMenu: React.ReactNode;
}
const MainContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  position: 'relative',
});

const BodyContainer = styled(Grid)({
  width: '100%',
  flexWrap: 'nowrap',
  backgroundColor: theme.palette.info.normal,
  [theme.breakpoints.up('lg')]: {
    marginLeft: '0px',
  },
  [theme.breakpoints.up('xl')]: {
    marginRight: '35px',
    marginLeft: '35px',
    marginTop: '4rem',
  },
});

const RightGrid = styled(Grid)({
  minHeight: '100vh',
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '3rem !important',
  },
});

const MenuDrawer = styled(Drawer)({
  '& .MuiBackdrop-root': {
    display: 'none',
  },
  '& .MuiDrawer-paper': {
    overflow: 'initial',
    boxSizing: 'border-box',
    boxShadow: `0px 2px 8px ${theme.palette.info.semilight}`,
    zIndex: '0',
    marginTop: '4rem',
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '4%',
    },
  },
});

const HomePage: React.FC<HomePageTemplateProps> = ({ header, sideMenu, children }) => {
  return (
    <MainContainer>
      {header}
      <BodyContainer container direction='row' spacing={3}>
        <Grid item xl={2}>
          <MenuDrawer variant='permanent'>{sideMenu}</MenuDrawer>
        </Grid>
        <RightGrid item xl={10}>
          {children}
        </RightGrid>
      </BodyContainer>
    </MainContainer>
  );
};

export default HomePage;
