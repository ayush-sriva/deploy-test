/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import { Grid, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import responsiveTheme from '../../../theme';
import Eclipse from '../../../../public/assets/icons/eclipse.svg';
import Icon from '../../atoms/Icon';
import ListItem from '../../molecules/ListItem';

interface CabData {
  id: string;
  logoUrl: string;
  company: string;
  approx: string;
  fare: string;
}
interface CabCardProps {
  data: Array<CabData>;
}

const GridMainContainer = styled(Grid)({
  width: '25.2rem',
  height: '18rem',
  padding: '1.3rem',
});

const GridtypographyItem = styled(Grid)({
  color: `${responsiveTheme.palette.secondary.dark}`,
  paddingBottom: '0.3rem',
});

const GridSubContainer = styled(Grid)({
  color: `${responsiveTheme.palette.secondary.darker}`,
  paddingBottom: '0.5rem',
});

const GridIconItem = styled(Grid)({
  paddingLeft: '0.6rem',
  paddingRight: '0.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const GridBoxWithPadding = styled(Grid)({
  paddingBottom: '0rem',
});

const CabCard: React.FC<CabCardProps> = ({ data }) => {
  return (
    <div>
      <GridMainContainer container direction='column'>
        <GridtypographyItem item>
          <TypographyComponent variant={'body2'} children={'catch a blue line metro towards Raidurg.'} />
        </GridtypographyItem>
        <Grid item>
          <GridSubContainer container>
            <Grid item>
              <TypographyComponent variant={'caption'} children={'₹ 100'} />
            </Grid>
            <GridIconItem item>
              <Icon url={Eclipse} />
            </GridIconItem>
            <Grid item>
              <TypographyComponent variant={'caption'} children={'25 Kms'} />
            </Grid>
            <GridIconItem item>
              <Icon url={Eclipse} />
            </GridIconItem>
            <Grid item>
              <TypographyComponent variant={'caption'} children={'1 hr 20 min'} />
            </Grid>
          </GridSubContainer>
        </Grid>
        {data.map((currentData) => {
          return (
            <GridBoxWithPadding item key={currentData.id} data-testid={currentData.id}>
              <ListItem
                logoUrl={currentData.logoUrl}
                company={currentData.company}
                approx={currentData.approx}
                fare={currentData.fare}
              />
            </GridBoxWithPadding>
          );
        })}
      </GridMainContainer>
    </div>
  );
};

export default CabCard;
