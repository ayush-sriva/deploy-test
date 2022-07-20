import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobListCard from "./index";
import hpIcon from "../../../assets/icons/hp.svg";
import Grid from "@mui/material/Grid";
export default {
  title: "Molecules/JobListCard",
  component: JobListCard,
} as ComponentMeta<typeof JobListCard>;

const Template: ComponentStory<typeof JobListCard> = (args) => (
  <Grid container>
    <Grid item xs={3}>
      <JobListCard {...args} />
    </Grid>
  </Grid>
);
const mockCallback = () => {};
export const Main = Template.bind({});
Main.args = {
  companyLogo: hpIcon,
  company: "HP",
  post: "User Experience Designer",
  location: "Hyderabad, Telangana, India",
  time: "1hr 36 mins ago",
  onClick: mockCallback
};
