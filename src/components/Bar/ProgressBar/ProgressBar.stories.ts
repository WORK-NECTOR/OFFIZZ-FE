import { Meta, StoryObj } from '@storybook/react';
import ProgressBar from '.';

const meta = {
  title: 'ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    width: '41.25rem',
    current: 1,
    total: 8,
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
