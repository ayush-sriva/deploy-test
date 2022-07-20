import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import JobCard from "../../molecules/JobCard";
import JobDescriptionCard from "../../organisms/JobDescriptionCard/JobDescriptionCard";
import FilteredList from "../../molecules/filteredList";
interface Props {
  title: string;
  subHeading: string;
  jobs: any[];
  onClick: Function;
  jobObj: any;
  currindex: number;
}
const FilteredJobList = ({
  title,
  subHeading,
  onClick,
  jobs,
  jobObj,
  currindex,
}: Props) => {
  return (
    <>
      <Typography variant="heading2">{title}</Typography>
      <Typography variant="body2" sx={{ color: "#656E66", marginTop: "4px" }}>
        {subHeading}
      </Typography>
      <FilteredList />
      <Box sx={{ flexGrow: 1, marginTop: "6px" }}>
        <Grid container columns={16}>
          <Grid item xs={11} sx={{ marginRight: "16px" }}>
            {jobs.map((job) => {
              return (
                <Box
                  sx={{
                    marginTop: "15px",
                    border: `${
                      job.id === currindex ? "2px solid #77EDDF" : "none"
                    }`,
                    borderRadius: "12px",
                  }}
                >
                  <JobCard
                    companyIcon={`${
                      job.company ? job.company.logo : job.job.company.logo
                    }`}
                    id={job.company ? job.id : job.job.id}
                    companyName={`${
                      job.company ? job.company.name : job.job.company.name
                    }`}
                    location={`${
                      job.location ? job.location.name : job.job.location.name
                    }`}
                    time={`${job.job ? job.job.createdAt : job.createdAt}`}
                    title={`${job.skill ? job.skill.name : job.job.skill.name}`}
                    onClick={() => {
                      onClick(job.id);
                    }}
                  />
                </Box>
              );
            })}
          </Grid>
          <Grid item xs={2} sx={{ marginTop: "15px" }}>
            <JobDescriptionCard
              aboutTheCompany={`${
                jobObj.company ? jobObj.company.about : jobObj.job.company.about
              }`}
              companyAddress={`${
                jobObj.location
                  ? jobObj.location.name
                  : jobObj.job.location.name
              }`}
              companyLogo={`${
                jobObj.company ? jobObj.company.logo : jobObj.job.company.logo
              }`}
              companyName={`${
                jobObj.company ? jobObj.company.name : jobObj.job.company.name
              }`}
              id={jobObj.company ? jobObj.id : jobObj.job.id}
              jobDescription={`${
                jobObj.job ? jobObj.job.description : jobObj.description
              }`}
              jobTitle={`${
                jobObj.skill ? jobObj.skill.name : jobObj.job.skill.name
              }`}
              jobUploadedTime={`${
                jobObj.job ? jobObj.job.createdAt : jobObj.createdAt
              }`}
              savedjobid={jobObj.company ? -1 : jobObj.id}
            ></JobDescriptionCard>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FilteredJobList;
