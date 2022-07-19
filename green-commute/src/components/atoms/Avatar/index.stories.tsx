import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from '.';
import url from '../../../../public/assets/illustrations/user-img.png';

export default {
  title: 'components/atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const UserAvatar = Template.bind({});

UserAvatar.args = {
  alt: 'avatar img',
  src: `${url}`,
};
