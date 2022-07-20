import { Box, Grid, Typography } from "@mui/material";
import React, { ReactElement, useEffect } from "react";
import Icon from "../../atoms/icon";
import logo from "../../../assets/icons/logo.svg";
import StepperComponent from "../../molecules/stepper";
import { text, steps, singleStateOption } from "./constants";
import AutoComplete from "../../molecules/autocomplete";
import jobLocationIcon from "../../../assets/icons/jobLocation.svg";
import SingleAutoComplete from "../../molecules/singleAutocomplete";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/button";
import theme from "../../../theme/index";
import stayIcon from "../../../assets/icons/stay.svg";
import skillIcon from "../../../assets/icons/jobs.svg";
import AirQualityIndex from "../../molecules/airQualityIndex";
import LandingPageServie from "../../../api-service/locationService";

interface Props {
  getUserLocation: any;
}
const LandingPage: React.FC<Props> = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [jobLocation, setJobLocation] = React.useState<any[]>();
  const [skills, setSkills] = React.useState<any[]>();
  const [userLocation, setUserLocation] = React.useState<string | null>();
  const [states, setState] = React.useState<any[]>([]);
  const [position, setPosition] = React.useState([]);

  useEffect(() => {
    const getstates = async () => {
      let res = await LandingPageServie.getLocation();

      setState(res);
    };
    const getSkills = async () => {
      let res = await LandingPageServie.getSkills();

      setPosition(res);
    };
    getstates();
    getSkills();
  }, []);
  useEffect(() => {
    props.getUserLocation(userLocation);
  }, [userLocation]);

  let aqi: JSX.Element | ReactElement<any, any> | JSX.Element[] | null = null,
    autocomplete: JSX.Element | null = null;
  const navigate = useNavigate();
  const handleNext = () => {
    if (activeStep === 2) {
      navigate("/jobs/findjobs");
    } else if (activeStep === 1) {
      const list = document.getElementById("autoCompleteInputWrapper");
      if (list?.firstChild) {
        while (list?.childElementCount - 1) {
          list?.removeChild(list.firstChild);
        }
      }
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (activeStep === 0) {
    autocomplete = (
      <>
        <SingleAutoComplete
          onChange={setUserLocation}
          options={singleStateOption}
        />
      </>
    );

    if (!userLocation) {
      aqi = (
        <>
          <Icon src={stayIcon} />

          <Typography sx={{ marginTop: "40px" }} variant="heading2">
            Enter Location to know Time Air Quality Index (AQI)
          </Typography>
        </>
      );
    } else {
      if (userLocation) {
        let aqiValue = states.filter((state) => userLocation == state.name);

        aqi = (
          <>
            <AirQualityIndex
              airQuality={aqiValue.length > 0 ? aqiValue[0].aqi : "500"}
            />
            <Typography sx={{ marginTop: "40px" }} variant="heading2">
              Real Time Air Quality Index(AQI) in this location
            </Typography>
          </>
        );
      }
    }
  } else if (activeStep === 1) {
    autocomplete = (
      <>
        <AutoComplete
          title="Where do you want to work?"
          placeholder="Enter your job location"
          option={states}
          setValue={setJobLocation}
          selectedValue={jobLocation}
        />
      </>
    );

    if (jobLocation?.length === 0) {
      aqi = (
        <>
          <Icon src={jobLocationIcon} />

          <Typography sx={{ marginTop: "40px" }} variant="heading2">
            Enter Location to know Time Air Quality Index (AQI)
          </Typography>
        </>
      );
    } else {
      if (jobLocation) {
        aqi = (
          <>
            {jobLocation.map((value) => {
              return (
                <>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ marginBottom: "32px" }}>
                      <AirQualityIndex airQuality={value.aqi} />
                    </Box>
                    <Typography
                      variant="heading2"
                      sx={{ marginLeft: "32px", color: "#FF725E" }}
                    >
                      {value.name}
                    </Typography>
                  </Box>
                </>
              );
            })}
            ;
            <Typography sx={{ marginTop: "40px" }} variant="heading2">
              Real Time Air Quality Index(AQI) in this location
            </Typography>
          </>
        );
      }
    }
  } else if (activeStep === 2) {
    autocomplete = (
      <>
        <AutoComplete
          title="What do you want to do?"
          placeholder="Enter your skills"
          option={position}
          setValue={setSkills}
          selectedValue={skills}
        />
      </>
    );

    if (skills?.length === 0 || skills === undefined) {
      aqi = (
        <>
          <Icon src={skillIcon} />

          <Typography sx={{ marginTop: "40px" }} variant="heading2">
            Enter your Skills to know how many jobs are in this Location
          </Typography>
        </>
      );
    } else {
      if (skills && skills?.length > 0) {
        aqi = (
          <>
            <AirQualityIndex airQuality="1500" />
            <Typography variant="heading2" sx={{ marginTop: "32px" }}>
              {jobLocation != null
                ? `Jobs found in ${jobLocation[0].name} & ${jobLocation[1].name}.`
                : "Total Jobs Found"}
            </Typography>
          </>
        );
      }
    }
  }
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box sx={{ padding: "60px 270px 25px 150px" }}>
              <Icon src={logo} />
              <Box sx={{ marginTop: "64px" }}>
                <StepperComponent active={activeStep} steps={steps} />
              </Box>
              <Box sx={{ marginTop: "80px", marginRight: "20px" }}>
                <Typography variant="heading1">{text}</Typography>
              </Box>
              <Box sx={{ marginTop: "64px" }}>
                {autocomplete ? autocomplete : null}
              </Box>
              <Box
                sx={{
                  marginTop: "36px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {activeStep !== 0 ? (
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      border: "1px solid #30A193",
                      width: "140px",
                      height: "46px",
                      marginRight: "12px",
                    }}
                    data-testid="handleBackStepper"
                    onClick={handleBack}
                  >
                    <Typography variant="body1">Back</Typography>
                  </Button>
                ) : null}
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "8px",
                    backgroundColor: "#30A193",
                    width: "140px",
                    height: "46px",
                  }}
                  data-testid="handleNextStepper"
                  onClick={handleNext}
                >
                  <Typography variant="body1">Next</Typography>
                </Button>
              </Box>
              <Box sx={{ marginTop: "100px" }}>
                <Button sx={{ color: `${theme.palette.primary.primary300}` }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderBottom: `2px solid ${theme.palette.primary.primary300}`,
                    }}
                  >
                    Skip
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box
              data-testid="svgBackground"
              sx={{
                background:
                  "linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)",
                height: "960px",
                width: "100%",

                display: "flex",
                justifyContent: "center",
                flexDirection: "column  ",
                alignItems: "center",
              }}
            >
              {aqi}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LandingPage;
