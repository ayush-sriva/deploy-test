import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuItemComponent from './index';
import { ReactComponent as savedJobs } from '../../../../public/assets/sideMenuIcons/SavedJobs.svg';
import { ReactComponent as savedJobsSelected } from '../../../../public/assets/sideMenuIconsSelected/SavedJobs.svg';

export default {
  title: 'Components/Molecules/MenuItem',
  component: MenuItemComponent,
} as ComponentMeta<typeof MenuItemComponent>;

const Template: ComponentStory<typeof MenuItemComponent> = (args) => <MenuItemComponent {...args} />;

export const UnselectedMenuItem = Template.bind({});

export const SelectedMenuItem = Template.bind({});

UnselectedMenuItem.args = {
  component: savedJobs,
  selectedComponent: savedJobs,
  itemData: 'Saved Jobs',
  selected: false,
};

SelectedMenuItem.args = {
  component: savedJobs,
  selectedComponent: savedJobsSelected,
  itemData: 'Saved Jobs',
  selected: true,
};
