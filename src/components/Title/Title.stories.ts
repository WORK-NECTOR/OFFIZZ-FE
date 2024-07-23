import { Meta, StoryObj } from '@storybook/react';
import Title from "./Title";

const meta = {
  title: 'Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Recap',
    desc: '지난 워케이션 기록을 돌아봐요',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
