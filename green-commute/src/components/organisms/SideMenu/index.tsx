/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import { Box, Grid, styled } from '@mui/material';
import React, { useContext } from 'react';
import responsiveTheme from '../../../theme';
import { ReactComponent as contactUs } from '../../../../public/assets/sideMenuIcons/ContactUs.svg';
import { ReactComponent as dashBoard } from '../../../../public/assets/sideMenuIcons/Dashboard.svg';
import { ReactComponent as needHelp } from '../../../../public/assets/sideMenuIcons/NeedHelp.svg';
import { ReactComponent as newsAndEvents } from '../../../../public/assets/sideMenuIcons/NewsAndEvents.svg';
import { ReactComponent as practiceTests } from '../../../../public/assets/sideMenuIcons/PracticeTests.svg';
import { ReactComponent as savedJobs } from '../../../../public/assets/sideMenuIcons/SavedJobs.svg';
import { ReactComponent as settings } from '../../../../public/assets/sideMenuIcons/Settings.svg';
import { ReactComponent as findJobs } from '../../../../public/assets/sideMenuIcons/findJobs.svg';
import { ReactComponent as contactUsSelected } from '../../../../public/assets/sideMenuIconsSelected/ContactUs.svg';
import { ReactComponent as dashBoardSelected } from '../../../../public/assets/sideMenuIconsSelected/Dashboard.svg';
import { ReactComponent as needHelpSelected } from '../../../../public/assets/sideMenuIconsSelected/NeedHelp.svg';
import { ReactComponent as newsAndEventsSelected } from '../../../../public/assets/sideMenuIconsSelected/NewsAndEvents.svg';
import { ReactComponent as practiceTestsSelected } from '../../../../public/assets/sideMenuIconsSelected/PracticeTests.svg';
import { ReactComponent as savedJobsSelected } from '../../../../public/assets/sideMenuIconsSelected/SavedJobs.svg';
import { ReactComponent as settingsSelected } from '../../../../public/assets/sideMenuIconsSelected/Settings.svg';
import { ReactComponent as findJobsSelected } from '../../../../public/assets/sideMenuIconsSelected/findJobs.svg';
import MenuItemComponent from '../../molecules/MenuItem';
import { SavedJobsContext } from '../../../GlobalState';
import { useNavigate } from 'react-router-dom';

const MenuItem = styled(Grid)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
});
const StyledMenuItem = styled(Grid)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
});
const Divider = styled('hr')({
  width: '13.4rem',
  marginBottom: '1.5rem',
  border: `0.5px solid ${responsiveTheme.palette.greyScale.main}`,
  bordeRadius: '50%',
});
interface SidemenuProps {
  toggler: () => void;
}

const SideMenu: React.FC<SidemenuProps> = ({ toggler }) => {
  const [findJob, setFindJob] = React.useState(true);
  const [saveJob, setSaveJob] = React.useState(false);
  const navigate = useNavigate();

  const location = useContext(SavedJobsContext);
  const menuData = [
    {
      id: 'menuData1001',
      component: dashBoard,
      selectedComponent: dashBoardSelected,
      itemData: 'Dashboard',
      selected: false,
    },
    {
      id: 'menuData1002',
      component: findJobs,
      selectedComponent: findJobsSelected,
      itemData: 'Find Jobs',
      selected: findJob,
    },
    {
      id: 'menuData1003',
      component: savedJobs,
      selectedComponent: savedJobsSelected,
      itemData: 'Saved Jobs',
      selected: saveJob,
    },
    {
      id: 'menuData1004',
      component: practiceTests,
      selectedComponent: practiceTestsSelected,
      itemData: 'Practice Tests',
      selected: false,
    },
    {
      id: 'menuData1005',
      component: newsAndEvents,
      selectedComponent: newsAndEventsSelected,
      itemData: 'News & Events',
      selected: false,
    },
  ];
  const secondaryData = [
    {
      id: 'menuData1006',
      component: needHelp,
      selectedComponent: needHelpSelected,
      itemData: 'Need Help ?',
      selected: false,
    },
    {
      id: 'menuData1007',
      component: contactUs,
      selectedComponent: contactUsSelected,
      itemData: 'Contact Us',
      selected: false,
    },
    {
      id: 'menuData1008',
      component: settings,
      selectedComponent: settingsSelected,
      itemData: 'Settings',
      selected: false,
    },
  ];
  let path = '/jobs/initialView';
  let path2 = '/jobs/savedJobs';
  const handleClick2 = (id: string) => {
    if (id === 'menuData1003') {
      setSaveJob(!saveJob);
      setFindJob(!findJob);
      toggler();
    }
  };
  // const handleClick = (id: string) => {
  //   if (id === 'menuData1002') {
  //     if(!findJob){
  //       setSaveJob(!saveJob);
  //       setFindJob(!findJob);
  //     }
  //     location.setSavedJobs(!location.savedJobs);
  //     navigate(path)
  //     toggler()
  //   }
  // };
  // const handleClick2 = (id: string) => {

  //   if (id === 'menuData1003') {
  //     if(!saveJob){
  //       setSaveJob(!saveJob);
  //       setFindJob(!findJob);
  //     }
  //     location.setSavedJobs(!location.savedJobs);
  //     navigate(path2)
  //     toggler()
  //   }
  // };
  const handleClick = (id: string) => {
    if (id === 'menuData1002' || id === 'menuData1003') {
      setSaveJob(!saveJob);
      setFindJob(!findJob);
      toggler();
    }
  };

  const CustomBox = styled(Box)({
    height: '100%',
    maxWidth: '17.12rem',
    background: `${responsiveTheme.palette.primary.contrastText}`,
    boxSizing: 'border-box',
    paddingTop: '2.5rem',
  });

  return (
    <CustomBox>
      <Box>
        {menuData.map((currentData) => {
          return currentData.selected ? (
            <StyledMenuItem
              item
              xs={2}
              key={currentData.id}
              data-testid={currentData.id}
              onClick={() => handleClick(currentData.id)}
            >
              <MenuItemComponent
                component={currentData.component}
                selectedComponent={currentData.selectedComponent}
                itemData={currentData.itemData}
                selected={currentData.selected}
              />
            </StyledMenuItem>
          ) : (
            <MenuItem
              item
              xs={2}
              key={currentData.id}
              data-testid={currentData.id}
              onClick={() => handleClick(currentData.id)}
            >
              <MenuItemComponent
                component={currentData.component}
                selectedComponent={currentData.selectedComponent}
                itemData={currentData.itemData}
                selected={currentData.selected}
              />
            </MenuItem>
          );
        })}
      </Box>
      <Divider />
      <Box>
        {secondaryData.map((currentData) => {
          return (
            <MenuItem item xs={2} key={currentData.id} data-testid={currentData.id}>
              <MenuItemComponent
                component={currentData.component}
                selectedComponent={currentData.selectedComponent}
                itemData={currentData.itemData}
                selected={currentData.selected}
              />
            </MenuItem>
          );
        })}
      </Box>
    </CustomBox>
  );
};

export default SideMenu;
