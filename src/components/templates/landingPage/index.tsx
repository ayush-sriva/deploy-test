import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Icon from "../../atoms/icon";
import logo from "../../../assets/icons/logo.svg";
import StepperComponent from "../../molecules/stepper";
import { text, steps } from "./constants";
const LandingPage: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Box sx={{ padding: "15px 161px 25px 100px" }}>
            <Icon src={logo} />
            <Box sx={{ marginTop: "64px" }}>
              <StepperComponent active={1} steps={steps} />
            </Box>
            <Box sx={{ marginTop: "80px", marginRight: "20px" }}>
              <Typography variant="heading1">{text}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            data-testid="svgBackground"
            sx={{
              background:
                "linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)",
              height: "768px",
              width: "100%",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
