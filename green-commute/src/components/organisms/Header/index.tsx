import { AppBar, Container, Grid, styled } from '@mui/material';
import logoUrl from '../../../../public/assets/logos/logoWhite.png';
import Logo from '../../atoms/Logo';
import theme from '../../../theme';
import LocationField from '../../molecules/LocationField';
import { ChangeEvent, useState } from 'react';
import Message from '../../../../public/assets/icons/message.png';
import Avatar from '../../atoms/Avatar';
import BellUrl from '../../../../public/assets/icons/notificationIcon.png';
import avatarUrl from '../../../../public/assets/illustrations/user-img.png';

interface HeaderProps {
  userLocation: string;
}

const AppContainer = styled(Container)({
  [theme.breakpoints.up('lg')]: {
    paddingLeft: '35px !important',
    paddingRight: '35px !important',
  },
});

const MainGrid = styled(Grid)({
  paddingTop: `${theme.spacing(4)}`,
  paddingBottom: `${theme.spacing(4)}`,
});

const MainLogo = styled(Logo)({
  marginLeft: `${theme.spacing(2)}`,
  marginRight: `${theme.spacing(3)}`,
});

const Header: React.FC<HeaderProps> = ({ userLocation }) => {
  const [loc, setLocation] = useState<string>(userLocation);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
    console.log('loc: ' + loc);
  };
  return (
    <AppBar elevation={0} color='secondary'>
      <AppContainer maxWidth='xl'>
        <MainGrid
          container
          rowSpacing={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
          justifyContent='space-around'
          alignItems='center'
        >
          <Grid item xs={3} lg={3} xl={3}>
            <MainLogo url={`${logoUrl}`}></MainLogo>
          </Grid>
          <Grid item xs={6} lg={6} xl={5}>
            <LocationField width='500' onChangeHandler={handleChange} location={loc}></LocationField>
          </Grid>
          <Grid item xs lg xl={4}>
            <Grid container direction='row' spacing={5} justifyContent='flex-end' alignItems='center'>
              <Grid item>
                <Logo url={`${Message}`}></Logo>
              </Grid>
              <Grid item>
                <Logo url={`${BellUrl}`}></Logo>
              </Grid>
              <Grid item>
                <Avatar alt={'user-profile'} src={`${avatarUrl}`}></Avatar>
              </Grid>
            </Grid>
          </Grid>
        </MainGrid>
      </AppContainer>
    </AppBar>
  );
};

Header.defaultProps = {
  userLocation: 'East MaredPally, Secunderabad',
};

export default Header;
