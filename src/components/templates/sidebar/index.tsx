import TopNavbar from "../../organisms/topNavbar";
import { Box, BoxProps, Grid } from "@mui/material";
import theme from "../../../theme/index";
import SideNav from "../../organisms/sideMenuBar";
import { Outlet } from "react-router-dom";
interface SidebarProps extends BoxProps {
  location: string;
  jobs: Array<any>;
  setJobs: Function;
  savedJobs: Array<any>;
  setSavedJobs: Function;
  index: number;
}
export default ({ location, jobs, savedJobs, index }: SidebarProps) => {
  return !savedJobs || !jobs ? (
    <div data-testid="sidebar"></div>
  ) : (
    <Box
      data-testid="sidebar"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box>
        <TopNavbar
          backgroundColor={`${theme.palette.primary.main}`}
          text={location}
        ></TopNavbar>
      </Box>
      <Grid container sx={{ position: "absolute", top: "80px" }}>
        <Grid item xs={2}>
          <SideNav currindex={index} />
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};
