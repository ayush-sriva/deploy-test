import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CommonProps } from '@mui/material/OverridableComponent';
import TypographyComponent from '../../atoms/Typography';
import CustomSvgIcon from '../../atoms/IconSVG';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { makeStyles } from '@mui/styles';
import theme from '../../../theme';
import CardActions from '@mui/material/CardActions';
import Button from '../../atoms/Button';
import { useState } from 'react';
import { styled } from '@mui/material';
import FileUploadCard from '../FileUploadCard';

interface DescProps {
  companyLogo: string;
  company: string;
  title: string;
  location: string;
  postedDate: string;
  onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
}

const useStyles = makeStyles({
  title: {
    color: `${theme.palette.secondary.dark}`,
  },
  svg: {
    height: '60px',
    width: '60px',
  },
  location: {
    color: `${theme.palette.secondary.darker}`,
  },
  apply: {
    width: '50px !important',
  },
});

const MainCard = styled(Card)({
  maxWidth: '363px',
  borderRadius: '0.75rem',
});

const CompanyLogo = styled('img')({
  width: '55px',
  height: '55px',
});

const MoreIcon = styled('div')({
  marginTop: '11px',
});

const CustomCardActions = styled(CardActions)({
  justifyContent: 'flex-start',
  paddingRight: '10px',
  paddingLeft: '75px',
});

const CustomCardHeader = styled(CardHeader)({
  padding: '0px',
});

const JobDesCard: React.FC<DescProps & CommonProps> = ({
  companyLogo,
  postedDate,
  company,
  title,
  location,
  onClickHandler,
}) => {
  const [isSaved, changeState] = useState<boolean>(false);
  const [isApplied, changeAppliedState] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
    setToggle(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
    changeAppliedState(true);
  };

  const classes = useStyles();
  const wrapSaveClickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    changeState(!isSaved);
  };

  const wrapApplyClickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    changeAppliedState(!isApplied);
  };

  return (
    <>
      <FileUploadCard
        open={open}
        handleClose={handleClose}
        handleIconClose={handleClose}
        toggle={toggle}
        handleToggle={handleToggle}
      />
      <MainCard elevation={0}>
        <CustomCardHeader
          avatar={<CompanyLogo src={companyLogo} alt={'company_logo'} />}
          title={
            <Box>
              <TypographyComponent variant='subtitle1' className={classes.title}>
                {title}
              </TypographyComponent>
              <TypographyComponent variant='caption' className={classes.location}>
                {company}
              </TypographyComponent>
            </Box>
          }
          subheader={
            <Box>
              <TypographyComponent variant='caption' className={classes.location}>
                {location}
              </TypographyComponent>
              <br></br>
              <TypographyComponent variant='captionBold' className={classes.location}>
                {postedDate}
              </TypographyComponent>
            </Box>
          }
          action={
            <MoreIcon>
              <CustomSvgIcon component={MoreHorizIcon} />
            </MoreIcon>
          }
        />
        <CustomCardActions>
          <Button
            color='primary'
            type={'button'}
            size='small'
            buttonVariant='outlined'
            typoVariant='captionBold'
            onClickHandler={wrapSaveClickHandle}
          >
            {!isSaved ? 'Save' : 'Unsave'}
          </Button>
          <Button
            color='primary'
            type={'submit'}
            size='small'
            buttonVariant='contained'
            typoVariant='captionBold'
            onClickHandler={handleClickOpen}
          >
            {!isApplied ? 'Apply' : 'Applied'}
          </Button>
        </CustomCardActions>
      </MainCard>
    </>
  );
};

export default JobDesCard;
