import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabPanel from '.';

export default {
  title: 'components/organisms/Tab Panel',
  component: TabPanel,
} as ComponentMeta<typeof TabPanel>;

const Template: ComponentStory<typeof TabPanel> = (args) => <TabPanel {...args} />;

export const TabPanelDemo = Template.bind({});

TabPanelDemo.args = {};
