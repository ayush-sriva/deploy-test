import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./index";
import theme from "../../../theme";
import { Typography } from "@mui/material";
import Icon from "../icon";
import arrowright from "../../../assets/icons/arrow-right.svg";
import filter from "../../../assets/icons/GroupFilter.svg";
import { Box } from "@mui/material";
export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  borderRadius: "8px",
  width: "150px",
  height: "40px",
  style: {
    backgroundColor: `${theme.palette.primary.primary400}`,
    padding: "12px 60px",
    color: `${theme.palette.structural.white}`,
  },
  children: <Typography variant="caption1">Next</Typography>,
  hoverColor: "#4ABAAD !important",
  focusColor: "#0B6D62 !important",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  width: "92px",
  height: "32px",
  style: {
    color: `${theme.palette.primary.primary300}`,
    border: `1px solid ${theme.palette.primary.primary300}`,
    borderRadius: "8px",
  },
  children: <Typography variant="caption1">Save</Typography>,
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  variant: "text",
  style: { color: `${theme.palette.primary.primary300}`, minWidth: "0px" },
  children: (
    <Typography
      variant="caption1"
      width="inherit"
      height="inherit"
      sx={{ borderBottom: `2px solid ${theme.palette.primary.primary300}` }}
    >
      Skip
    </Typography>
  ),
  disabled: true,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  variant: "contained",
  width: "409px",
  height: "64px",
  style: {
    backgroundColor: `${theme.palette.structural.main}`,
    color: `${theme.palette.primary.primary400}`,
    display: "flex",
    padding: 0,
    margin: 0,
  },
  children: (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
      }}
    >
      <Typography variant="subtitle1" sx={{ marginRight: "10px" }}>
        Green Commute Routes
      </Typography>
      <Box sx={{ marginTop: "8px" }}>
        <Icon src={arrowright}></Icon>
      </Box>
    </Box>
  ),
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  variant: "contained",
  width: "137px",
  height: "57px",
  style: {
    backgroundColor: `${theme.palette.structural.main}`,
    color: `${theme.palette.textColor.highEmphasis}`,
    padding: "16px 32px",
    borderRadius: "32px",
  },
  children: (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
      }}
    >
      <Box sx={{ marginTop: "8px" }}>
        <Icon src={filter}></Icon>
      </Box>
      <Typography variant="body2" sx={{marginLeft: "12px"}}>Filter</Typography>
    </Box>
  ),
};