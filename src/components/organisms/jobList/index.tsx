import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import JobListCard from "../../molecules/jobListCard";
import FilteredList from "../../molecules/filteredList";

interface Props {
  title: string;
  subHeading: string;
  jobs: any[];
  onClick: Function;
}

const JobList: React.FC<Props> = (props) => {
  return (
    <div data-testid="joblistcard">
      <Typography variant="heading2">{props.title}</Typography>
      <Typography variant="body2" sx={{ color: "#656E66", marginTop: "4px" }}>
        {props.subHeading}
      </Typography>
      <FilteredList />
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid container spacing={2}>
          {props.jobs.map((job) => {
            return (
              <Grid item xs={4}>
                <JobListCard
                  companyLogo={`${
                    job.company ? job.company.logo : job.job.company.logo
                  }`}
                  company={`${
                    job.company ? job.company.name : job.job.company.name
                  }`}
                  post={`${job.skill ? job.skill.name : job.job.skill.name}`}
                  location={`${
                    job.location ? job.location.name : job.job.location.name
                  }`}
                  time={`${job.job ? job.job.createdAt : job.createdAt}`}
                  onClick={() => {
                    props.onClick(job.company ? job.id : job.job.id);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default JobList;
