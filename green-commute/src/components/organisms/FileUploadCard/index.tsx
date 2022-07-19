/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import { Box, Dialog, Grid, Paper, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import close from '../../../../public/assets/icons/DeleteIconWhite.png';
import React from 'react';
import responsiveTheme from '../../../theme';
import success from '../../../../public/assets/icons/success.png';

const MainDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    width: '700px',
    height: '370px',
  },
  borderRadius: '0.75rem',
  paddingLeft: '3.37rem',
  paddingBottom: '3.37rem',
});

const TypographyContainer = styled(Grid)({
  paddingTop: '0.4rem',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
});

const AcknowledgementContainer = styled(Box)({
  width: '34.5rem',
  height: '14.25rem',
  alignItems: 'center',
  justifiContent: 'center',
});

const DottedContainer = styled(Box)({
  width: '34.5rem',
  height: '14.25rem',
  backgroundColor: `${responsiveTheme.palette.success.main}`,
  borderWidth: 2,
  borderStyle: 'dashed',
  borderColor: `${responsiveTheme.palette.primary.main}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.75rem',
});

const TypographyItem = styled(Grid)({
  paddingBottom: '0.3rem',
  display: 'flex',
  flexDirection: 'row',
});
const SubContainer = styled(Grid)({
  marginTop: '2rem',
  marginLeft: '1.6rem',
  marginBottom: '20px',
  alignItems: 'center',
  justifyContent: 'center',
});

const CloseIconContainer = styled(Grid)({
  justifyContent: 'end',
  paddingTop: '1.56rem',
  paddingRight: '1.56rem',
  color: `${responsiveTheme.palette.secondary.darker}`,
});

const DottedContainerItem = styled(Grid)({
  paddingBottom: '3.375rem',
});
const IconElement = styled('img')({
  width: '83px',
  marginBottom: '40px',
  marginLeft: '197px',
});

const GridTypographyItem = styled(Grid)({
  paddingBottom: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});
interface FileUploadCardProps {
  open: boolean;
  handleClose?: React.MouseEventHandler<HTMLButtonElement>;
  handleOpen?: React.MouseEventHandler<HTMLButtonElement>;
  handleIconClose?: React.MouseEventHandler<HTMLImageElement>;
  handleToggle?: React.MouseEventHandler<HTMLButtonElement>;
  toggle?: boolean;
}

const FileUploadCard: React.FC<FileUploadCardProps> = ({
  handleClose,
  handleIconClose,
  open,
  toggle,
  handleToggle,
}) => {
  const toggleDialog = () => {
    if (toggle) {
      return (
        <AcknowledgementContainer>
          <SubContainer container direction='column'>
            <GridTypographyItem item direction='row'>
              <IconElement src={success} alt='icon' />
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
                onClickHandler={handleClose}
              />
            </Grid>
          </SubContainer>
        </AcknowledgementContainer>
      );
    } else {
      return (
        <TypographyContainer container direction='column'>
          <TypographyItem item direction='row'>
            <TypographyComponent variant={'h2'}>File Upload</TypographyComponent>
          </TypographyItem>
          <DottedContainerItem item>
            <DottedContainer data-testid='Button1004'>
              <ButtonComponent
                buttonVariant={'contained'}
                children={'Click Here to Upload File'}
                color={'primary'}
                size={'large'}
                typoVariant={'captionBold'}
                onClickHandler={handleToggle}
              />
            </DottedContainer>
          </DottedContainerItem>
        </TypographyContainer>
      );
    }
  };

  return (
    <MainDialog open={open} onClose={handleClose}>
      <CloseIconContainer container>
        <Icon url={close} onClickHandler={handleIconClose} />
      </CloseIconContainer>
      {toggleDialog()}
    </MainDialog>
  );
};

export default FileUploadCard;
