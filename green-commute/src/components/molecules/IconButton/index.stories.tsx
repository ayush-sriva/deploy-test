import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButtonComponent from './index';
import responsiveTheme from '../../../theme';
import Icon from '../../atoms/Icon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default {
  title: 'Components/Molecules/IconButton',
  component: IconButtonComponent,
} as ComponentMeta<typeof IconButtonComponent>;

const Template: ComponentStory<typeof IconButtonComponent> = (args) => <IconButtonComponent {...args} />;

export const FilterButton = Template.bind({});

export const CommuteRouteButton = Template.bind({});

FilterButton.args = {
  style: {
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '22px',
    color: responsiveTheme.palette.secondary.dark,
    width: '137px',
    height: '56px',
    backgroundColor: responsiveTheme.palette.primary.contrastText,
    borderRadius: '32px',
    '& .MuiButton-startIcon': {
      marginRight: '16px',
    },
  },
  startIcon: <Icon url={'/assets/icons/filterIcon.png'} />,
  children: 'Filter',
};

CommuteRouteButton.args = {
  style: {
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
    color: responsiveTheme.palette.primary.main,
    width: '409px',
    height: '64px',
    borderRadius: '0px 0px 12px 12px',
    boxShadow: '0px -2px 8px rgba(125, 125, 125, 0.12)',
    backgroundColor: responsiveTheme.palette.primary.contrastText,
    '& .MuiButton-endIcon': {
      marginRight: '21px',
    },
  },
  endIcon: <ArrowForwardIcon htmlColor={responsiveTheme.palette.primary.main} />,
  children: 'Green Commute Routes',
};
