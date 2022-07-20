import CustomSvgIcon from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactComponent as CustomIcon } from '../../../../public/assets/icons/locationIconBlack.svg';

const IconComponent = {
  title: 'Components/Atoms/Icon/Svg',
  component: CustomSvgIcon,
} as ComponentMeta<typeof CustomSvgIcon>;

export const Template: ComponentStory<typeof CustomSvgIcon> = (args: any) => <CustomSvgIcon {...args} />;

Template.args = {
  component: CustomIcon,
};

export default IconComponent;
