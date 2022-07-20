import Box from '@mui/material/Box';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Search from '.';

export default {
  title: 'components/organisms/FindJobsSearch',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => (
  <Box sx={{ width: ' 70%' }}>
    <Search onClickHandler={()=>{}}/>
  </Box>
);

export const DemoJobCard = Template.bind({});

DemoJobCard.args = {};
