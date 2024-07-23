import { Meta, StoryObj } from '@storybook/react';
import Thumbnail from '.';
import thumbnail from '../../../public/thumbnail.png';

const meta = {
  title: 'Thumbnail',
  component: Thumbnail,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    src: thumbnail,
    alt: '임시 이미지',
  },
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
