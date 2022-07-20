import { Grid, styled } from '@mui/material';
import responsiveTheme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';
import ChipItem from '../../molecules/ChipItem';

interface JobListProps {
  filters?: string[];
  handleDelete?: React.MouseEventHandler<HTMLDivElement>;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Heading = styled(TypographyComponent)({
  color: responsiveTheme.palette.secondary.dark,
  paddingBottom: '0.25rem',
});

const SubHeading = styled(TypographyComponent)({
  color: responsiveTheme.palette.secondary.dark,
  paddingBottom: '0.75rem',
});

const FiltersContainer = styled(Grid)({
  maxWidth: '34rem',
});

const ButtonContainer = styled(Grid)({
  marginTop: '0.22rem',
  textDecoration: 'underline',
  textDecorationColor: `${responsiveTheme.palette.primary.dark}`,
  textDecorationThickness: '2px',
  textUnderlineOffset: '2px',
});

const renderFilters = (filters: string[], handleDelete: React.MouseEventHandler<HTMLDivElement>) => {
  console.log(filters);
  if (filters !== [] && handleDelete !== null) {
    return filters.map((filter: string) => {
      return (
        <Grid item>
          <ChipItem label={filter} handleDelete={handleDelete} color={'secondary'} />
        </Grid>
      );
    });
  }
};

const JobList: React.FC<JobListProps> = ({ filters, handleDelete, handleClick }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Heading variant='h2'>Job list</Heading>
      </Grid>
      <Grid item xs={12}>
        <SubHeading variant='body2'>Based on your search</SubHeading>
      </Grid>
      <FiltersContainer container>
        <Grid item xs={11}>
          <Grid container rowSpacing={2}>
            {filters && handleDelete && renderFilters(filters, handleDelete)}
          </Grid>
        </Grid>
        <ButtonContainer item xs={1}>
          {filters && filters.length !== 0 && (
            <ButtonComponent
              disableRipple={true}
              buttonVariant='text'
              size='medium'
              type='reset'
              typoVariant='body1'
              children='Clear All'
              color={'error'}
              onClickHandler={handleClick}
              style={{
                width: '80px',
              }}
            />
          )}
        </ButtonContainer>
      </FiltersContainer>
    </Grid>
  );
};

export default JobList;
