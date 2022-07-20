import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Icon from "../../atoms/icon";
import moreIcon from "../../../assets/icons/more.svg";
import { commuteRoutes } from "./constants";
import { MouseEventHandler } from "react";
interface Props {
  companyLogo: any;
  post: string;
  company: string;
  time: string;
  location: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const JobListCard: React.FC<Props> = (props) => {
  const { companyLogo, post, company, time, location, onClick } = props;
  return (
    <Box
      sx={{
        padding: "16px 17.5px 10px 17.5px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffff",
        minHeight: "271px",
        cursor: "pointer",
      }}
      data-testid="jobListCard"
      onClick={onClick}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <img src={companyLogo} />
        <Icon src={moreIcon} />
      </Box>
      <Box
        sx={{
          marginTop: "32px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="subtitle1">{post}</Typography>
        <Typography
          variant="caption2"
          sx={{ color: "#FF725E", marginTop: "4px" }}
        >
          {company}
        </Typography>
        <Typography
          variant="caption2"
          sx={{ color: "#656E66", marginTop: "4px" }}
        >
          {location}
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "32px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="caption2" sx={{ color: "#373C38" }}>
          Commute routes available :
        </Typography>
        <Box
          sx={{
            marginTop: "8px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid container xs={8}>
            {commuteRoutes.map((route) => {
              return (
                <Grid item xs={2}>
                  <Icon src={route} />
                </Grid>
              );
            })}
          </Grid>
          <Box>
            <Typography variant="caption2" sx={{ color: "#373C38" }}>
              {time}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobListCard;
