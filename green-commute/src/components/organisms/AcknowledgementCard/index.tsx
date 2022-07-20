/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import { Dialog, Grid, Paper, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';
import success from '../../../../public/assets/icons/success.png';
import Icon from '../../atoms/Icon';
import close from '../../../../public/assets/icons/DeleteIconWhite.png';
import React from 'react';

const StyledPaper = styled(Paper)({
  width: '43.75rem',
  height: '25rem',
  borderRadius: '0.75rem',
});
const SubGridContainer = styled(Grid)({
  marginTop: '2.5rem',
  alignItems: 'center',
  justifyContent: 'center',
});
const IconGridContainer = styled(Grid)({
  justifyContent: 'end',
  paddingTop: '1.5rem',
  paddingRight: '1.5rem',
});
const SuccessIconGridItem = styled(Grid)({
  paddingBottom: '2.5rem',
});
const GridTypographyItem = styled(Grid)({
  paddingBottom: '2rem',
  display: 'flex',
  flexDirection: 'row',
});

interface AcknowledgementCardProps {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
}

const AcknowledgementCard: React.FC<AcknowledgementCardProps> = ({ handleClose, open }) => {
  return (
    <Dialog open={open} onClose={handleClose} PaperComponent={StyledPaper}>
      <IconGridContainer container>
        <Icon url={close} />
      </IconGridContainer>
      <SubGridContainer container direction='column'>
        <SuccessIconGridItem item>
          <Icon url={success} />
        </SuccessIconGridItem>
        <GridTypographyItem item direction='row'>
          <TypographyComponent variant={'h2'}>
            <span>
              <TypographyComponent variant={'h3'} display={'inline'} children={'Hi Abc!'} />
            </span>{' '}
            Your Resume got Uploaded Successfully !
          </TypographyComponent>
        </GridTypographyItem>
        <Grid item data-testid='Button1003'>
          <ButtonComponent
            buttonVariant={'contained'}
            children={'OKAY'}
            color={'primary'}
            size={'medium'}
            typoVariant={'captionBold'}
          />
        </Grid>
      </SubGridContainer>
    </Dialog>
  );
};

export default AcknowledgementCard;
