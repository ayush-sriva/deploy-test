import React, { useState } from "react";
import { Card, Box, Divider } from "@mui/material";
import JobTitleCard from "../../molecules/JobTitleCard/JobTitleCard";
import CommonRoutes from "../../molecules/CommonRoutes";
import VehicleTab from "../../molecules/VehicleTab/VehicleTab";
import GreenRoutes from "../../molecules/GreenRoutes/GreenRoutes";
export interface JobDescriptionProps {
  id: number;
  jobTitle: string;
  companyLogo: string;
  companyName: string;
  companyAddress: string;
  jobUploadedTime: string;
  jobDescription: string;
  aboutTheCompany: string;
  savedjobid?: number;
}

const JobDescriptionCard: React.FC<JobDescriptionProps> = ({
  id,
  jobTitle,
  companyLogo,
  companyName,
  companyAddress,
  jobUploadedTime,
  jobDescription,
  aboutTheCompany,
  savedjobid,
}: JobDescriptionProps) => {
  const [greenRoutes, setGreenRoutes] = useState(false);
  const onClickGreenRoutes = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setGreenRoutes(true);
  };

  return (
    <Card
      sx={{ minHeight: "734px", minWidth: "404px", borderRadius: "12px" }}
      data-testid="jobDescriptionCard"
    >
      <JobTitleCard
        id={id}
        companyLogo={companyLogo}
        companyAddress={companyAddress}
        jobTitle={jobTitle}
        companyName={companyName}
        jobUploadedTime={jobUploadedTime}
        savedjobid={savedjobid}
      />
      <Box>{<Divider sx={{ color: "#D6D6D6" }} />}</Box>
      {!greenRoutes && (
        <GreenRoutes
          aboutTheCompany={aboutTheCompany}
          jobDescription={jobDescription}
          onClickHandler={onClickGreenRoutes}
        />
      )}

      {greenRoutes && (
        <Box sx={{ paddingLeft: "20px" }}>
          <CommonRoutes
            location1={companyAddress}
            location2={companyAddress}
            onClick={setGreenRoutes}
          />
          <VehicleTab />
        </Box>
      )}
    </Card>
  );
};

export default JobDescriptionCard;
