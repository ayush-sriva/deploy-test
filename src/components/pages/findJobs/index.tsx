import { Grid, Box, Typography } from "@mui/material";
import theme from "../../../theme/index";
import JobSearch from "../../organisms/jobSearchBar";
import FilterDialog from "../../organisms/filterModal";
import { createContext, useContext, useState } from "react";
import JobList from "../../organisms/jobList";
import FilteredJobList from "../../organisms/filteredJobList";
import axios from "axios";
import { subHeading, title } from "./constants";
import { JobContext } from "../../../App";

interface JobDescriptionProps {
  jobs: Array<any>;
  setJobs: Function;
}
export const FilterContext: any = createContext({});

const JobDescription = ({ jobs }: JobDescriptionProps) => {
  const [status, setStatus] = useState(false);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [filter, setFilter] = useState({
    distance0: false,
    distance1: false,
    distance2: false,
    distance3: false,
    fullTime: false,
    internship: false,
    contract: false,
    remote: false,
    fresher: false,
    midLevel: false,
    director: false,
    executive: false,
    bus: false,
    carpool: false,
  });

  const [desc, setDesc] = useState(null);
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    });
  };

  const getFilteredExpression: any = (n: number, filteredArray: string[]) => {
    switch (n) {
      case 1:
        return jobs.filter((job) => job.distance === filteredArray[0]);
      case 2:
        return jobs.filter(
          (job) =>
            job.distance === filteredArray[0] ||
            job.distance === filteredArray[1]
        );
      case 3:
        return jobs.filter(
          (job) =>
            job.distance === filteredArray[0] ||
            job.distance === filteredArray[1] ||
            job.distance === filteredArray[2]
        );
      case 4:
        return jobs.filter(
          (job) =>
            job.distance === filteredArray[0] ||
            job.distance === filteredArray[1] ||
            job.distance === filteredArray[2] ||
            job.distance === filteredArray[3]
        );
    }
  };
  const { setFilteredJobs } = useContext(JobContext);

  const [currSelected, setCurrSelected] = useState(0);
  const handleClick = async (id: number) => {
    if (!status) {
      setStatus(true);
    }
    await axios
      .get(`http://localhost:4004/api/job/${id}`)
      .then((res) => {
        let jobObj = res.data;
        setDesc(jobObj);
      })
      .catch((err) => console.log(err));

    setCurrSelected(id);
  };
  const handleClear = () => {
    setFilter({
      distance0: false,
      distance1: false,
      distance2: false,
      distance3: false,
      fullTime: false,
      internship: false,
      contract: false,
      remote: false,
      fresher: false,
      midLevel: false,
      executive: false,
      director: false,
      bus: false,
      carpool: false,
    });
  };
  const clearAll = () => {
    setFiltered([]);
    setFilteredJobs([]);
    handleClear();
  };
  const handleApply = () => {
    const asArray = Object.entries(filter);

    const filteredOptionsList = asArray.filter(
      ([_key, value]) => value === true
    );

    const filteredOptions = Object.fromEntries(filteredOptionsList);
    const filteredArray = Object.keys(filteredOptions);

    setFiltered(filteredArray);
    const filteredJobs: any[] = getFilteredExpression(
      filteredArray.length,
      filteredArray
    );

    setFilteredJobs(filteredJobs);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#E5E5E5",
        minHeight: "1357px",
      }}
      data-testid="findJobs"
    >
      <Box sx={{ marginLeft: "45px", marginTop: "40px" }}>
        <Box sx={{ marginBottom: "8px" }}>
          <Typography
            variant="heading2"
            sx={{ color: `${theme.palette.textColor.highEmphasis}` }}
          >
            Find Jobs
          </Typography>
        </Box>
        <Grid container columns={12} spacing={3}>
          <Grid item xs={10}>
            <JobSearch></JobSearch>
          </Grid>
          <Grid item xs={1}>
            <FilterDialog
              filters={filter}
              handleChange={handleCheckChange}
              handleClear={handleClear}
              handleApply={handleApply}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginLeft: "45px", marginTop: "40px", marginRight: "60px" }}>
        <FilterContext.Provider value={{ filtered, setFiltered, clearAll }}>
          {!status ? (
            <JobList
              jobs={jobs}
              title={title}
              subHeading={subHeading}
              onClick={handleClick}
            ></JobList>
          ) : (
            desc && (
              <FilteredJobList
                jobObj={desc}
                jobs={jobs}
                onClick={handleClick}
                subHeading={subHeading}
                title={title}
                currindex={currSelected}
              ></FilteredJobList>
            )
          )}
        </FilterContext.Provider>
      </Box>
    </Box>
  );
};

export default JobDescription;
