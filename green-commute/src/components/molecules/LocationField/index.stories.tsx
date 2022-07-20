import Box from '@mui/material/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent } from 'react';
import LocationField from '.';

export default {
  title: 'components/Molecules/LocationField',
  component: LocationField,
} as ComponentMeta<typeof LocationField>;

const Template: ComponentStory<typeof LocationField> = (args) => (
  <Box sx={{ backgroundColor: '#0B6D62' }}>
    <LocationField {...args} />
  </Box>
);

export const FilledLocationField = Template.bind({});

FilledLocationField.args = {
  location: 'East Maredpally, Secunderabad',
  width: '350',
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => {
    console.log('Hello');
  },
};
