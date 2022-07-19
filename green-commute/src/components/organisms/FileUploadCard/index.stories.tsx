import { ComponentMeta, ComponentStory } from '@storybook/react';
import FileUploadCard from '.';

export default {
  title: 'components/Organisms/FileUploadCard',
  component: FileUploadCard,
} as ComponentMeta<typeof FileUploadCard>;

export const Template: ComponentStory<typeof FileUploadCard> = () => <FileUploadCard open={true} toggle={false}/>;
