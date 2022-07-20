import Button from "../../atoms/button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioButton from "../../atoms/radioButton";
import Checkbox from "../../atoms/checkbox";
import React from "react";
import theme from "../../../theme";
import Icon from "../../atoms/icon";
import filterIcon from "../../../assets/icons/GroupFilter.svg";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@material-ui/core/styles";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CustomCheckBoxLabel = styled(FormControlLabel)({
  "& .MuiTypography-root": {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px ",
    lineHeight: "22px ",
    color: "#656E66 ",
    marginLeft: "8px",
  },

  "& .injected-svg": {
    verticalAlign: "middle",
  },

  marginBottom: "8px",
  marginLeft: "0px",
});
interface Props {
  filters: any;
  handleClear: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleApply: () => void;
}
const FilterDialog: React.FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [greenCommute, setgreenCommute] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    distance0,
    distance1,
    distance2,
    distance3,
    fullTime,
    internship,
    contract,
    remote,
    fresher,
    midLevel,
    director,
    executive,
    bus,
    carpool,
  } = props.filters;

  const { handleChange, handleClear, handleApply } = props;
  const onClick = () => {
    handleApply();
    handleClose();
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          width: "137px",
          height: "57px",
          backgroundColor: `${theme.palette.structural.main}`,
          color: `${theme.palette.textColor.highEmphasis}`,
          padding: "16px 32px",
          borderRadius: "32px",
          "&:hover": {
            backgroundColor: "#fff !important",
          },
        }}
        data-testid="filterModalOpen"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
          }}
        >
          <Box sx={{ marginTop: "8px" }}>
            <Icon src={filterIcon}></Icon>
          </Box>
          <Typography variant="body2" sx={{ marginLeft: "12px" }}>
            Filter
          </Typography>
        </Box>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        data-testid="dialogClose"
      >
        <Box sx={{ padding: "16px 16px 32px 32px", width: "546px" }}>
          <DialogTitle sx={{ padding: "0px" }}>
            {" "}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              data-testid="dialogCloseElement"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (_theme) => _theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <Grid container sx={{ width: "498" }}>
            <Grid item md={4}>
              <FormControl sx={{ m: 3 }} component="fieldset">
                <Typography variant="body1">Distance</Typography>

                <FormGroup sx={{ marginTop: "12px" }}>
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={distance0}
                        onChange={handleChange}
                        name="distance0"
                      />
                    }
                    label="0-10 Kms"
                  />
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={distance1}
                        onChange={handleChange}
                        name="distance1"
                      />
                    }
                    label="11-20 Kms"
                  />
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={distance2}
                        onChange={handleChange}
                        name="distance2"
                      />
                    }
                    label="21-30 Kms"
                  />
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={distance3}
                        onChange={handleChange}
                        name="distance3"
                      />
                    }
                    label="31-40 Kms"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <FormControl sx={{ m: 3 }} component="fieldset">
                <Typography variant="body1">Date Posted</Typography>

                <FormGroup sx={{ marginTop: "12px" }}>
                  <CustomCheckBoxLabel
                    control={<Checkbox />}
                    label="Past 24 Days"
                  />
                  <CustomCheckBoxLabel
                    control={<Checkbox />}
                    label="Past week"
                  />
                  <CustomCheckBoxLabel
                    control={<Checkbox />}
                    label="Past Month"
                  />
                  <CustomCheckBoxLabel control={<Checkbox />} label="Anytime" />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <FormControl sx={{ m: 3 }} component="fieldset">
                <Typography variant="body1">Green Commute</Typography>

                <FormGroup sx={{ marginTop: "12px" }}>
                  <CustomCheckBoxLabel
                    control={
                      <RadioButton
                        checked={greenCommute}
                        onChange={() => setgreenCommute(true)}
                        data-testid="radioToggle"
                      />
                    }
                    label="Yes"
                  />
                  <CustomCheckBoxLabel
                    control={
                      <RadioButton
                        checked={!greenCommute}
                        onChange={() => setgreenCommute(false)}
                      />
                    }
                    label="No"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ width: "498" }}>
            <Grid item md={4}>
              <FormControl sx={{ m: 3 }} component="fieldset">
                <Typography variant="body1">Job Type</Typography>

                <FormGroup sx={{ marginTop: "12px" }}>
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={fullTime}
                        onChange={handleChange}
                        name="fullTime"
                        data-testid="checkboxElement"
                      />
                    }
                    label="Full time"
                  />
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={internship}
                        onChange={handleChange}
                        name="internship"
                      />
                    }
                    label="Internship"
                  />
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={contract}
                        onChange={handleChange}
                        name="contract"
                      />
                    }
                    label="Contract"
                  />
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={remote}
                        onChange={handleChange}
                        name="remote"
                      />
                    }
                    label="Remote"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <FormControl sx={{ m: 3 }} component="fieldset">
                <Typography variant="body1">Experience Level</Typography>

                <FormGroup sx={{ marginTop: "12px" }}>
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={fresher}
                        onChange={handleChange}
                        name="fresher"
                      />
                    }
                    label="Fresher"
                  />
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={midLevel}
                        onChange={handleChange}
                        name="midLevel"
                      />
                    }
                    label="Mid-Level"
                  />
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={director}
                        onChange={handleChange}
                        name="director"
                      />
                    }
                    label="Director"
                  />
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={executive}
                        onChange={handleChange}
                        name="executive"
                      />
                    }
                    label="Executive"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <FormControl sx={{ m: 3 }} component="fieldset">
                <Typography variant="body1">Transport</Typography>

                <FormGroup sx={{ marginTop: "12px" }}>
                  <CustomCheckBoxLabel control={<Checkbox />} label="Metro" />
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={bus}
                        onChange={handleChange}
                        name="bus"
                      />
                    }
                    label="Bus"
                  />
                  <CustomCheckBoxLabel
                    control={
                      <Checkbox
                        checked={carpool}
                        onChange={handleChange}
                        name="carpool"
                      />
                    }
                    label="Car pooling"
                  />
                  <CustomCheckBoxLabel
                    control={<Checkbox />}
                    label="Motor Cycle"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>

          <DialogActions>
            <Button
              style={{
                color: "#4ABAAD",
                minWidth: "0px",
              }}
              variant="text"
              onClick={handleClear}
              data-testid="handleClearButton"
            >
              <Typography height="inherit" variant="caption1" width="inherit">
                Clear All
              </Typography>
            </Button>
            <Button
              borderRadius="8px"
              focusColor="#0B6D62 !important"
              height="32px"
              hoverColor="#4ABAAD !important"
              style={{
                backgroundColor: "#30A193",
                color: "undefined",
                padding: "8px 32px 8px 32px",
              }}
              variant="contained"
              width="101px"
              onClick={onClick}
              data-testid="handleApplyButton"
            >
              <Typography variant="caption1">Apply</Typography>
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default FilterDialog;
