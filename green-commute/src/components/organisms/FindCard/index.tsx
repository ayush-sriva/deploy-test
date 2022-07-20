/**
 * @author Abhishek Bhemisetty <abhishek.bhemisetty@zemosolabs.com>
 */

 import { makeStyles } from '@mui/styles';
 import { styled } from '@mui/material';
 import { CommonProps } from '@mui/material/OverridableComponent';
 import { Box, Card, CardActions, CardContent, CardHeader, Grid } from '@mui/material';
 import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
 import TypographyComponent from '../../atoms/Typography';
 import theme from '../../../theme';
 import Logo from '../../atoms/Logo';
 import CustomSvgIcon from '../../atoms/IconSVG';
 import { ReactComponent as Scooty } from '../../../../public/assets/icons/scootyIcon.svg';
 import { ReactComponent as Bus } from '../../../../public/assets/icons/busIcon.svg';
 import { ReactComponent as Cab } from '../../../../public/assets/icons/cabIcon.svg';
 import { ReactComponent as Metro } from '../../../../public/assets/icons/metroIcon.svg';
 
 interface JobProps {
   company: string;
   title: string;
   postedDate?: string;
   location: string;
   square: boolean;
   companyLogo: string;
   id?:string
   onClickNavigate?: (event: React.MouseEvent<HTMLElement>) => void;
 }
 
 const useStyles = makeStyles({
   title: {
     color: `${theme.palette.secondary.dark}`,
   },
   companyName: {
     color: `${theme.palette.warning.dark}`,
   },
   location: {
     color: `${theme.palette.secondary.darker}`,
   },
   svg: {
     height: '70px',
     width: '80px',
   },
   textColor: {
     color: `${theme.palette.secondary.dark}`,
   },
   cActions: {
     display: 'grid !important',
     padding: '8px 16px 16px 16px!important',
   },
   icons: {
     paddingTop: '8px',
     marginLeft: '-0.75rem !important',
   },
   date: {
     marginLeft: '14rem !important',
     marginRight: 'auto !important',
     marginTop: '2rem !important',
   },
   rdate: {
     marginLeft: 'auto !important',
   },
   rActions: {
     [`${theme.breakpoints.up('sm')}`]: {
       marginLeft: '5rem !important',
     },
   },
 });
 
 const PaddedSvgIcon = styled('div')({
   marginRight: '1rem',
 });
 
 const MainCard = styled(Card)({
   padding:'11px !important',
   borderRadius:'12px !important'
 });
 
 const DateTypography = styled(TypographyComponent)({
   [`${theme.breakpoints.up('lg')}`]: {
     marginTop: '-2rem',
     marginLeft: 'auto',
   },
 });
 
 const DateTypographyComponent = styled(TypographyComponent)({
   [`${theme.breakpoints.up('lg')}`]: {
     marginTop: '0rem !important',
     marginLeft: 'auto !important',
   },
 });
 
 const JobCard: React.FC<JobProps & CommonProps> = ({ company, title, postedDate, location, companyLogo, square,id ,onClickNavigate}) => {
   const classes = useStyles();
   return (
     <MainCard elevation={0} id={id} onClick={onClickNavigate}>
       {square ? (
         <CardHeader avatar={<Logo url={companyLogo} className={classes.svg} />} action={<MoreHorizIcon />} />
       ) : (
         <CardHeader
           avatar={<Logo url={companyLogo} className={classes.svg} />}
           title={
             <Box>
               <TypographyComponent variant='h3' className={classes.title}>
                 {title}
               </TypographyComponent>
               <TypographyComponent variant='caption' className={classes.companyName}>
                 {company}
               </TypographyComponent>
             </Box>
           }
           subheader={
             <TypographyComponent variant='caption' className={classes.location}>
               {location}
             </TypographyComponent>
           }
           action={<MoreHorizIcon />}
         />
       )}
       {square ? (
         <CardContent>
           <Grid container spacing={1} direction='column'>
             <Grid item>
               <TypographyComponent variant='subtitle1' className={classes.title}>
                 {title}
               </TypographyComponent>
             </Grid>
             <Grid item>
               <TypographyComponent variant='caption' className={classes.companyName}>
                 {company}
               </TypographyComponent>
             </Grid>
             <Grid item>
               <TypographyComponent variant='caption' className={classes.location}>
                 {location}
               </TypographyComponent>
             </Grid>
           </Grid>
         </CardContent>
       ) : (
         ''
       )}
       {square ? (
         <CardActions className={classes.cActions}>
           <Grid container className={classes.textColor}>
             <Grid item>
               <TypographyComponent variant='caption'>Commute routes available</TypographyComponent>
             </Grid>
           </Grid>
           <Grid
             container
             spacing={5}
             direction='row'
             justifyContent='flex-start'
             alignItems='flex-start'
             className={classes.icons}
           >
             <Grid item>
               <CustomSvgIcon component={Scooty}></CustomSvgIcon>
             </Grid>
             <Grid item>
               <CustomSvgIcon component={Bus}></CustomSvgIcon>
             </Grid>
             <Grid item>
               <CustomSvgIcon component={Cab}></CustomSvgIcon>
             </Grid>
             <Grid item>
               <CustomSvgIcon component={Metro}></CustomSvgIcon>
             </Grid>
           </Grid>
           <DateTypography variant='caption'>{postedDate}</DateTypography>
         </CardActions>
       ) : (
         <CardActions className={classes.rActions}>
           <PaddedSvgIcon>
             <CustomSvgIcon component={Scooty} />
           </PaddedSvgIcon>
           <PaddedSvgIcon>
             <CustomSvgIcon component={Bus} />
           </PaddedSvgIcon>
           <DateTypographyComponent variant='caption'>{postedDate}</DateTypographyComponent>
         </CardActions>
       )}
     </MainCard>
   );
 };
 
 export default JobCard;
 