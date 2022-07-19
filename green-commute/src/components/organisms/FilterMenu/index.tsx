/**
 * @author Bhavani Somanchi <bhavani.somanchi@zemosolabs.com>
 */

import { Dialog, Grid, Paper, RadioGroup, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import responsiveTheme from '../../../theme';
import RadioButtonComponent from '../../atoms/RadioButton';
import ButtonComponent from '../../atoms/Button';
import CheckBoxComponent from '../../atoms/Checkbox';
import Icon from '../../atoms/Icon';
import TypographyComponent from '../../atoms/Typography';
import close from '../../../../public/assets/icons/DeleteIconWhite.png';
import IconButton from '../../molecules/IconButton';
import { LabelsContext } from '../../pages/jobDescriptionView';
import { string } from 'prop-types';

interface FilterMenuProps {
  data: Data[];
  filterMenuState: boolean;
  handleClose: () => void;
}

interface Data {
  id: string;
  name: string;
  inputs: string[];
}

const CustomTypography = styled(TypographyComponent)({
  color: `${responsiveTheme.palette.secondary.dark}`,
  paddingBottom: '12px',
});

const ButtonGrid = styled(Grid)({
  paddingRight: '16px',
  paddingTop: '7px',
});

const MenuContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'end',
  paddingTop: '39px',
});

const MainContainer = styled(Grid)({
  maxWidth: '546px',
  maxHeight: '464px',
});

const CloseIconContainer = styled(Grid)({
  justifyContent: 'end',
  color: `${responsiveTheme.palette.secondary.dark}`,
});

const StyledPaper = styled(Paper)({
  paddingRight: '25px',
  paddingLeft: '50px',
  paddingTop: '31px',
  paddingBottom: '32px',
});

const renderSet = (
  data: Data[],
  checked: Object,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
) => {
  return data.map((entry) => {
    return (
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={12}>
            <CustomTypography variant='body1' children={entry.name} />
          </Grid>
          {entry.id === 'Green_Commute' ? (
            <Grid item>
              <RadioGroup defaultValue={entry.inputs[0]}>{renderRadioButton(entry.inputs)}</RadioGroup>
            </Grid>
          ) : (
            <Grid item>{renderCheckbox(entry.id, entry.inputs, handleChange, checked)}</Grid>
          )}
        </Grid>
      </Grid>
    );
  });
};

const renderRadioButton = (checkboxInputs: string[]) => {
  return checkboxInputs.map((input) => {
    return (
      <Grid item>
        <RadioButtonComponent label={input} />
      </Grid>
    );
  });
};

const renderCheckbox = (
  id: string,
  checkboxInputs: string[],
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  checked: Object
) => {
  console.log('checked: ', checked);
  let checkedArray = Object.values(checked);
  let checkedKeys = Object.keys(checked);
  console.log('values: ', checkedArray);
  return checkboxInputs.map((input, index) => {
    return (
      <Grid item>
        {id === 'Distance' ? (
          <CheckBoxComponent
            label={input}
            labelChecked={checkedArray[index]}
            name={checkedKeys[index]}
            onLabelChange={handleChange}
          />
        ) : (
          <CheckBoxComponent label={input} onLabelChange={handleChange} disabled={true} />
        )}
      </Grid>
    );
  });
};

const CloseButton = styled(IconButton)({
  backgroundColor: 'transparent',
  width: '15px',
});

const FilterMenu: React.FC<FilterMenuProps> = ({ filterMenuState, handleClose, data }) => {
  const [checked, setChecked] = useState({
    distOne: false,
    distTwo: false,
    distThree: false,
    distFour: false,
  });
  const [filters, setFilters] = useState<Array<string>>(['Green Commute Routes']);
  let filterContext = useContext(LabelsContext);

  useEffect(() => {
    console.log('changed filters');
  }, [filters]);

  const clearAll = () => {
    console.log(filters);
    filters.splice(1, filters.length);
    setChecked({
      distOne: false,
      distTwo: false,
      distThree: false,
      distFour: false,
    });
    setFilters([...filters]);
  };

  const applyFilter = () => {
    filterContext.setFilterLabels([...filters]);
    filters.splice(1, filters.length);
    handleClose();
    clearAll();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filters.push(event.target.value);
    setFilters([...filters]);
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Dialog open={filterMenuState} onClose={handleClose} PaperComponent={StyledPaper}>
      <CloseIconContainer container>
        <CloseButton onClickHandler={handleClose} startIcon={<Icon url={close} />} />
      </CloseIconContainer>
      <MainContainer container rowSpacing={5} columnSpacing={6}>
        {renderSet(data, checked, handleChange)}
      </MainContainer>
      <MenuContainer container direction='row'>
        <ButtonGrid item>
          <ButtonComponent
            buttonVariant='text'
            size={'small'}
            color={'primary'}
            type={'reset'}
            typoVariant={'captionBold'}
            children={'Clear All'}
            onClickHandler={clearAll}
          />
        </ButtonGrid>
        <Grid item>
          <ButtonComponent
            size={'small'}
            buttonVariant='contained'
            color={'primary'}
            type={'button'}
            typoVariant={'captionBold'}
            children={'Apply'}
            onClickHandler={applyFilter}
          />
        </Grid>
      </MenuContainer>
    </Dialog>
  );
};

export default FilterMenu;
