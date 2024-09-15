import { Meta, StoryObj } from '@storybook/react';
import TimeRange from '.';

const meta = {
  title: 'TimeRange',
  component: TimeRange,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    timeArr: [
      {
        to: '10:30',
        from: '15:30',
        activity: 'Core Time',
      },
    ],
  },
} satisfies Meta<typeof TimeRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
