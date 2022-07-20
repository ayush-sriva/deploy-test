import IconTypography from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import workIcon from '../../../assets/icons/work.svg';
export default {
    title : 'Molecules/IconTypography',
    component: IconTypography
} as ComponentMeta<typeof IconTypography>;

export const Template: ComponentStory<typeof IconTypography>  = (args) => (
<IconTypography {...args} />
);

Template.args = {
    height: 30,
    url: workIcon,
    name: 'Search Skills'
}
