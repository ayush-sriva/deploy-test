import { Box, Grid, styled } from '@mui/material';
import responsiveTheme from '../../../theme';

interface LandingPageProps {
  children: React.ReactNode;
  logoChildren: React.ReactNode;
  cardChildren: React.ReactNode;
}

const StyledLogo = styled(Grid)({
  marginTop: '2rem',
  marginBottom: '4rem',
  paddingLeft: '16px',
});

const IllustrationGrid = styled(Grid)({
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(155.94deg, ${responsiveTheme.palette.success.main} 6.2%, ${responsiveTheme.palette.success.dark} 52.61%)`,
  height: '98vh',
  paddingBottom: '80px',
});

const RightContainer = styled(Grid)({
  padding: '0px',
});

const StyledBox = styled(Box)({
  width: '1366px',
  margin: 'auto',
  position: 'relative',
});

const LeftContainer = styled(Grid)({
  paddingLeft: '100px',
});

const LandingPageTemplate: React.FC<LandingPageProps> = ({ children, logoChildren, cardChildren }) => {
  return (
    <StyledBox>
      <Grid container display={'flex'} direction='row' flexWrap={'nowrap'}>
        <LeftContainer item xs={7}>
          <Grid container>
            <StyledLogo item xs={12}>
              {logoChildren}
            </StyledLogo>
            <Grid item xs={12}>
              {cardChildren}
            </Grid>
          </Grid>
        </LeftContainer>
        <RightContainer item xs={5}>
          <IllustrationGrid container>{children}</IllustrationGrid>
        </RightContainer>
      </Grid>
    </StyledBox>
  );
};

export default LandingPageTemplate;
