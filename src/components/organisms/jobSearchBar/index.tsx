import { Grid, Box } from "@mui/material";
import search from "../../../assets/icons/search.svg";
import Icon from "../../atoms/icon";
import theme from "../../../theme";
import FindJobsAutoComplete from "../../molecules/findJobsSkillsAC";
import { skillOptions, stateOptions } from "./constants";
import locationval from "../../../assets/icons/map-pin.svg";
import work from "../../../assets/icons/work.svg";
import { useContext } from "react";
import { JobContext } from "../../../App";

export default () => {
  const { setSkill, setLocation, handleSearch } = useContext(JobContext);
  return (
    <Grid
      container
      sx={{
        maxWidth: "100%",
        zIndex: 2,
        borderRadius: "32px",
        backgroundColor: "#ffff",
        padding: "0px 28px",
        height: "56px",
        alignItems: "center",
      }}
      data-testid="jobsearch"
    >
      <FindJobsAutoComplete
        onChange={setSkill}
        options={skillOptions}
        icon={work}
        placeholder="Enter your skills"
        width="44%"
        marginLeft="0px"
      ></FindJobsAutoComplete>

      <FindJobsAutoComplete
        onChange={setLocation}
        options={stateOptions}
        icon={locationval}
        placeholder="Enter your location"
        marginLeft="27px"
        width="48%"
      ></FindJobsAutoComplete>

      <Box
        onClick={handleSearch}
        sx={{
          height: "44px",
          width: "44px",
          backgroundColor: `${theme.palette.primary.primary400}`,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          left: "5.6%",
          cursor: "pointer",
        }}
        data-testid="handleSearchButton"
      >
        <Icon src={search} />
      </Box>
    </Grid>
  );
};
