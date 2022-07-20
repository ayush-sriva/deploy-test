import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import theme, { EXTRA_COLORS } from "../../../theme/index";
import DashboardIcon from "../../../assets/icons/dashboard_black_24dp 1.svg";
import PRACTICE_ICON from "../../../assets/icons/test.svg";
import SAVED_ICON from "../../../assets/icons/save.svg";
import WorkOutlineIcon from "../../../assets/icons/work.svg";
import NEWS_ICON from "../../../assets/icons/newspaper_black_24dp 1.svg";
import HelpIcon from "../../../assets/icons/help_outline_black_24dp 1.svg";
import PhoneIcon from "../../../assets/icons/call_black_24dp 1.svg";
import SettingsIcon from "../../../assets/icons/settings_black_24dp 1.svg";
import ActiveFindJobs from "../../../assets/icons/activeFindJobs.png";
import ActiveSavedJobs from "../../../assets/icons/activeSavedJobs.svg";
import { styled } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
const nameIcon = [
  { name: "Dashboard", icon: DashboardIcon, activeIcon: DashboardIcon },
  { name: "Find Jobs", icon: WorkOutlineIcon, activeIcon: ActiveFindJobs },
  { name: "Saved Jobs", icon: SAVED_ICON, activeIcon: ActiveSavedJobs },
  { name: "Practice Test", icon: PRACTICE_ICON, activeIcon: PRACTICE_ICON },
  { name: "News & Events", icon: NEWS_ICON, activeIcon: NEWS_ICON },
  { name: "Need Help ?", icon: HelpIcon, activeIcon: HelpIcon },
  { name: "Contact us", icon: PhoneIcon, activeIcon: PhoneIcon },
  { name: "Settings", icon: SettingsIcon, activeIcon: SettingsIcon },
];

const BorderBox = styled(Box)({
  height: "48px",
  width: "4px",
  borderRadius: "8px 0px 0px 8px",
  position: "absolute",
  right: 0,
  top: 0,
  "&:hover": {
    backgroundColor: `${theme.palette.primary.primary500} !important`,
  },
});

interface Props {
  currindex: number;
}
const SideNav: React.FC<Props> = ({ currindex }) => {
  return (
    <>
      <Grid
        container
        sx={{
          minwidth: "270px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: EXTRA_COLORS.neutralShade["700"],
          boxShadow: "0px2px8pxrgba(125,125,125,0.12)",
          border: "none",
        }}
        direction="column"
      >
        {nameIcon.map(({ name, icon, activeIcon }, index) => (
          <NavLink
            to={name.replace(/\s+/g, "").toLowerCase()}
            style={({ isActive }) => ({
              color: isActive
                ? `${theme.palette.primary.primary500}`
                : `${theme.palette.textColor.highEmphasis}`,
              textDecoration: "none",
            })}
          >
            <Grid
              container
              alignItems="center"
              height="48px"
              direction="row"
              minWidth="270px"
              data-testid="dashboard"
              sx={{
                marginTop: "30px",
                backgroundColor: `${
                  index === currindex
                    ? theme.palette.structural.color1
                    : "inherit"
                }`,
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="start"
                alignItems="center"
                minHeight="48px"
                ml="40px"
                sx={{
                  position: "relative",
                }}
              >
                {index === currindex ? (
                  <Box
                    mr="12px"
                    sx={{
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      color: theme.palette.text.disabled,
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px",
                      display: "flex",
                    }}
                  >
                    <img src={activeIcon} alt="" />
                  </Box>
                ) : (
                  <Box
                    mr="12px"
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: theme.palette.greyColors.grey100,
                      width: "40px",
                      height: "40px",
                      color: theme.palette.text.disabled,
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px",
                      display: "flex",
                    }}
                  >
                    <img src={icon} alt="" />
                  </Box>
                )}

                <Typography variant="body2">{name}</Typography>
                <BorderBox data-testid="border-box" />
              </Grid>
            </Grid>
          </NavLink>
        ))}
      </Grid>
    </>
  );
};

export default SideNav;
