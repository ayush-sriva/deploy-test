/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import { Grid, Paper, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';
import responsiveTheme from '../../../theme';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButtonComponent from '../../molecules/IconButton';

const MainContainer = styled(Paper)({
  width: '23.47rem',
});
const HeaderItem = styled(Grid)({
  color: `${responsiveTheme.palette.greyScale.contrastText}`,
  paddingBottom: '0.5rem',
  paddingLeft: '1.62rem',
  paddingRight: '1.62rem',
});
const InfoItem = styled(Grid)({
  color: `${responsiveTheme.palette.secondary.darker}`,
  paddingBottom: '1.5rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.62rem',
});
const IconContainer = styled(Grid)({
  padding: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddinBottom: '2rem',
  height: '4rem',
});
interface JobDescriptionProps {
  description: string;
  aboutCompany: string;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

const JobDetailsCard: React.FC<JobDescriptionProps> = ({ description, aboutCompany, onClickHandler }) => {
  return (
    <MainContainer elevation={0}>
      <Grid container direction='column'>
        <HeaderItem item>
          <TypographyComponent variant={'body1'} children={'Description'} />
        </HeaderItem>
        <InfoItem item>
          <TypographyComponent variant={'body2'} children={description} />
        </InfoItem>
        <HeaderItem item>
          <TypographyComponent variant={'body1'} children={'About Company'} />
        </HeaderItem>
        <InfoItem item>
          <TypographyComponent variant={'body2'} children={aboutCompany} />
        </InfoItem>
        <InfoItem item>
          <TypographyComponent variant={'body2'}>
            Excellent written and oral communication and presentation skills
            <span>
              {' '}
              <ButtonComponent
                children={'SEE MORE'}
                buttonVariant={'text'}
                color={'primary'}
                size={'large'}
                type={'submit'}
                typoVariant={'body1'}
              />{' '}
            </span>
          </TypographyComponent>
        </InfoItem>
        <IconContainer item data-testid='Button1001'>
          <IconButtonComponent
            children={'Green Commute Routes'}
            endIcon={<ArrowForwardIcon htmlColor={responsiveTheme.palette.primary.main} />}
            onClickHandler={onClickHandler}
          />
        </IconContainer>
      </Grid>
    </MainContainer>
  );
};

export default JobDetailsCard;
