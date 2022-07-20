import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import theme from "../../../theme/index";
import moreIcon from "../../../assets/icons/more.svg";
import Icon from "../../atoms/icon/index";
import Button from "../../atoms/button/index";
import ApplyButton from "../../organisms/uploadResume/index";
import axios from "axios";
import { JobContext } from "../../../App";
export interface JobTitleProps {
  id: number;
  jobTitle: string;
  companyLogo: any;
  companyName: string;
  companyAddress: string;
  jobUploadedTime: string;
  savedjobid?: number;
  text?: string;
}
const JobTitleCard: React.FC<JobTitleProps> = ({
  id,
  jobTitle,
  companyLogo,
  companyName,
  companyAddress,
  jobUploadedTime,
}: JobTitleProps) => {
  const { savedJobs, setSavedJobs } = useContext(JobContext);
  let isSaved = false;
  if (savedJobs != undefined)
    isSaved = savedJobs.filter((job: any) => job.job.id == id).length > 0;
  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(() => {
    setToggle(isSaved);
  }, [isSaved]);
  const handleClick = async (e: React.BaseSyntheticEvent) => {
    if (e.target.textContent == "Save") {
      try {
        const newSavedJob = await axios.post(
          "http://3.145.122.114:4004/api/savedjobs",
          {
            user: 1,
            job: id,
            applied: 0,
          }
        );
        setToggle(true);
        savedJobs.push(newSavedJob.data);
        setSavedJobs(savedJobs);
      } catch (err) {}
    } else {
      try {
        const deletedjob = savedJobs.filter((job: any) => job.job.id == id);
        console.log("deletedjob", deletedjob);
        await axios.delete(
          `http://3.145.122.114:4004/api/savedjobs/${deletedjob[0].id}`
        );
        setToggle(false);
        let deletedsavedjob = savedJobs.filter(
          (job: any) => job.id != deletedjob[0].id
        );
        setSavedJobs(deletedsavedjob);
      } catch (err) {}
    }
  };
  const companyAndAddressStyle = {
    fontSize: "12px",
    lineHeight: "16px",
    marginTop: "4px",
    color: theme.palette.text.secondary,
  };

  const titleStyles = {
    fontSize: "16px",
    lineHeight: "30px",
    marginTop: "4px",
  };

  const moreIconStyles = {
    paddingLeft: "55px",
    marginTop: "16px",
  };
  return (
    <div data-testid="jobTitleCard">
      <Stack
        direction={"row"}
        sx={{
          marginTop: "8px",
        }}
      >
        <Box
          sx={{
            maxHeight: "45px",
            maxWidth: "45px",
            height: "100%",
            marginTop: "16px",
            paddingRight: "6%",
          }}
        >
          <img
            style={{
              position: "static",
              width: "45px",
              height: "45px",
              paddingLeft: "20px",
            }}
            src={companyLogo}
            alt={companyLogo}
          />
        </Box>

        {
          <Box
            sx={{
              maxWidth: "70%",
              minWidth: "60%",
              paddingTop: "2%",
              paddingLeft: "94",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" sx={titleStyles}>
              {jobTitle}
            </Typography>

            <Typography variant="subtitle2" sx={companyAndAddressStyle}>
              {" "}
              {companyName}
            </Typography>
            <Typography variant="subtitle2" sx={companyAndAddressStyle}>
              {companyAddress}
            </Typography>

            <Typography variant="caption" sx={{ marginTop: "4px" }}>
              {jobUploadedTime}
            </Typography>
            <Stack direction={"row"}>
              <Box sx={{ marginTop: "20px", marginBottom: "25px" }}>
                <Button
                  width="92px"
                  height="32px"
                  variant="outlined"
                  style={{
                    color: `${theme.palette.primary.primary300}`,
                    border: `1px solid ${theme.palette.primary.primary300}`,
                    borderRadius: "8px",
                    padding: "8px 32px 8px 32px",
                  }}
                  onClick={handleClick}
                >
                  <Typography variant="caption1">
                    {`${toggle ? "Unsave" : "Save"}`}
                  </Typography>
                </Button>
              </Box>
              <Box minWidth="10px"></Box>
              <Box sx={{ marginTop: "20px", marginBottom: "25px" }}>
                <ApplyButton />
              </Box>
            </Stack>
          </Box>
        }
        <Box sx={moreIconStyles}>
          <Icon src={moreIcon} />
        </Box>
      </Stack>
    </div>
  );
};
export default JobTitleCard;
