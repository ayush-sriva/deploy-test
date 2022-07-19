/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import { Grid, styled, SvgIcon } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import responsiveTheme from '../../../theme';
import { ReactComponent as backIcon } from '../../../../public/assets/icons/back.svg';
import { ReactComponent as bike } from '../../../../public/assets/icons/scootyIcon.svg';
import { ReactComponent as metro } from '../../../../public/assets/icons/metroIcon.svg';
import { ReactComponent as cab } from '../../../../public/assets/icons/cabIcon.svg';
import { ReactComponent as bus } from '../../../../public/assets/icons/busIcon.svg';
import { ReactComponent as cabWhite } from '../../../../public/assets/icons/cabIconWhite.svg';
import { makeStyles } from '@mui/styles';
import { ReactComponent as busWhite } from '../../../../public/assets/icons/busIconWhite.svg';
import { ReactComponent as locPad } from '../../../../public/assets/icons/locPad.svg';
import { ReactComponent as locationOrange } from '../../../../public/assets/icons/locationIconOrange.svg';
import { ReactComponent as swap } from '../../../../public/assets/icons/swap.svg';
import eclipsePng from '../../../../public/assets/icons/eclipse.png';
import CustomSvgIcon from '../../atoms/IconSVG';
import { useState } from 'react';
import Icon from '../../atoms/Icon';

const Maincontainer = styled('div')({
  width: '25.2rem',
  paddingLeft: '1.3rem',
  paddingRight: '1.3rem',
});
const HeaderItem = styled(Grid)({
  color: `${responsiveTheme.palette.secondary.dark}`,
  paddingBottom: '0.3rem',
});
const IconContainer = styled(Grid)({
  paddingRight: '0.9rem',
  display: 'flex',
  maxWidth: '22.6rem',
  justifyContent: 'flex-Start',
});
const GridPadding = styled(Grid)({
  paddingTop: '0.1rem',
  paddingLeft: '0.6rem',
});
const useStyles = makeStyles({
  container4: {
    width: '39px',
    height: '39px',
    borderRadius: '50px',
    backgroundColor: `${responsiveTheme.palette.primary.main}`,
    marginLeft: '5px',
    marginRight: '5px',
  },
  iconAlignment: {
    marginLeft: '10.5px',
    marginTop: '10.5px',
  },
});
const SelectedIconBg = styled('div')({
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '3.1rem',
  backgroundColor: `${responsiveTheme.palette.primary.main}`,
  marginLeft: '0.6rem',
  marginTop: '0.6rem',
});
const IconAlignment = styled('div')({
  marginLeft: '0.6rem',
  marginTop: '0.6rem',
});
const LocationContainer = styled(Grid)({
  width: '20rem',
  boxShadow: `0px -2px 10px ${responsiveTheme.palette.greyScale.dark}`,
  marginBottom: '0.6rem',
  borderRadius: '0.5rem',
});
const LocationSubContainer = styled(Grid)({
  paddingTop: '0.7rem',
  paddingLeft: '0.7rem',
  height: '1.75rem',
});
const LocationIconItem = styled(Grid)({
  padding: '0.6rem',
  paddingLeft: '0.34rem',
});
const LogContainer = styled(Grid)({
  height: '1.25rem',
  paddingLeft: '0.18rem',
  paddingTop: '0.125rem',
});
const InnerIcon = styled(Grid)({
  marginTop: '0.09rem',
});
const SwapIcon = styled(Grid)({
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '0px',
});
const EclipseIconPad = styled(Grid)({
  marginLeft: '1.03rem',
  marginRight: '16.25rem',
});
const DotContainer = styled(Grid)({
  height: '0.5rem',
});
interface CommonRoutesProps {
  currentLocation: string;
  destination: string;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  routeToggle: React.MouseEventHandler<HTMLDivElement>;
}

const CommonRoutesCard: React.FC<CommonRoutesProps> = ({
  currentLocation,
  destination,
  onClickHandler,
  routeToggle,
}) => {
  const [cabOption, setCabOption] = useState<boolean>(false);
  const [busOption, setBusOption] = useState<boolean>(true);
  const classes = useStyles();
  const handleClick = () => {
    setCabOption(!cabOption);
    setBusOption(!busOption);

    routeToggle;
  };

  return (
    <Maincontainer>
      <Grid container direction='column'>
        <HeaderItem item>
          <Grid container direction='row'>
            <Grid item>
              <CustomSvgIcon component={backIcon} onClickHandler={onClickHandler} />
            </Grid>
            <GridPadding item>
              <TypographyComponent variant={'body1'} children={'Common Routes'} />
            </GridPadding>
          </Grid>
        </HeaderItem>
        <Grid item>
          <LocationContainer container direction='column'>
            <Grid item>
              <LocationSubContainer container direction='row'>
                <InnerIcon item>
                  <SvgIcon component={locPad} />
                </InnerIcon>
                <Grid item>
                  <TypographyComponent variant={'caption'} children={currentLocation} />
                </Grid>
              </LocationSubContainer>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <EclipseIconPad container direction='column'>
                    <DotContainer item>
                      <Icon url={eclipsePng} />
                    </DotContainer>
                    <DotContainer item>
                      <Icon url={eclipsePng} />
                    </DotContainer>
                    <DotContainer item>
                      <Icon url={eclipsePng} />
                    </DotContainer>
                  </EclipseIconPad>
                </Grid>
                <SwapIcon item>
                  <SvgIcon component={swap} />
                </SwapIcon>
              </Grid>
            </Grid>
            <Grid item>
              <LocationIconItem container direction='row'>
                <Grid item>
                  <SvgIcon component={locationOrange} />
                </Grid>
                <LogContainer item>
                  <TypographyComponent variant={'caption'} children={destination} />
                </LogContainer>
              </LocationIconItem>
            </Grid>
          </LocationContainer>
        </Grid>
      </Grid>
      <Grid item>
        <IconContainer container direction='row'>
          <Grid item>
            <IconAlignment>
              <SvgIcon component={bike} />
            </IconAlignment>
          </Grid>
          <Grid item>
            {busOption ? (
              <div className={classes.container4} onClick={routeToggle}>
                <SvgIcon
                  component={busWhite}
                  className={classes.iconAlignment}
                  onClick={() => {
                    handleClick();
                  }}
                />
              </div>
            ) : (
              <div onClick={routeToggle}>
                <SvgIcon
                  component={bus}
                  className={classes.iconAlignment}
                  onClick={() => {
                    handleClick();
                  }}
                />
              </div>
            )}
          </Grid>
          <Grid item>
            {cabOption ? (
              <div className={classes.container4} onClick={routeToggle}>
                <SvgIcon component={cabWhite} className={classes.iconAlignment} onClick={handleClick} />
              </div>
            ) : (
              <div onClick={routeToggle}>
                <SvgIcon component={cab} className={classes.iconAlignment} onClick={handleClick} />
              </div>
            )}
          </Grid>
          <Grid item>
            <IconAlignment>
              <SvgIcon component={metro} />
            </IconAlignment>
          </Grid>
        </IconContainer>
      </Grid>
    </Maincontainer>
  );
};

export default CommonRoutesCard;
