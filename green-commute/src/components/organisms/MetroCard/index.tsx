import { Grid, styled } from '@mui/material';
import Map from '../../../../public/assets/illustrations/mapview.png';
import TypographyComponent from '../../atoms/Typography';
import Illustration from '../../atoms/Illustration';
import ButtonComponent from '../../atoms/Button';
import responsiveTheme from '../../../theme';
import Eclipse from '../../../../public/assets/icons/eclipse.svg';
import Icon from '../../atoms/Icon';

const GridMainCOntainer = styled(Grid)({
  width: '25.25rem',
  height: '16.87rem',
  padding: '1.32rem',
});
const TypographyItem = styled(Grid)({
  color: `${responsiveTheme.palette.secondary.dark}`,
  paddingBottom: '0.3rem',
});
const RouteDetailsContainer = styled(Grid)({
  color: `${responsiveTheme.palette.secondary.darker}`,
  paddingBottom: '0.56rem',
});
const IconContainer = styled(Grid)({
  paddingLeft: '0.6rem',
  paddingRight: '0.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const MetroCard = () => {
  return (
    <div>
      <GridMainCOntainer container direction='column'>
        <TypographyItem item>
          <TypographyComponent variant={'body2'} children={'catch a blue line metro towards Raidurg.'} />
        </TypographyItem>
        <Grid item>
          <RouteDetailsContainer container>
            <Grid item>
              <TypographyComponent variant={'caption'} children={'₹ 100'} />
            </Grid>
            <IconContainer item>
              <Icon url={Eclipse} />
            </IconContainer>
            <Grid item>
              <TypographyComponent variant={'caption'} children={'25 Kms'} />
            </Grid>
            <IconContainer item>
              <Icon url={Eclipse} />
            </IconContainer>
            <Grid item>
              <TypographyComponent variant={'caption'} children={'1 hr 20 min'} />
            </Grid>
          </RouteDetailsContainer>
        </Grid>
        <Grid item>
          <Illustration url={Map} />
        </Grid>
        <Grid item data-testid='Button1002'>
          <ButtonComponent
            children={'View in Google Maps'}
            buttonVariant={'text'}
            color={'primary'}
            size={'large'}
            typoVariant={'captionBold'}
          />
        </Grid>
      </GridMainCOntainer>
    </div>
  );
};

export default MetroCard;
