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
        from: '11:30',
        to: '15:30',
        activity: 'Core Time',
      },
      {
        from: '16:00',
        to: '17:15',
        activity: 'test',
      },
    ],
    length: 'short',
  },
} satisfies Meta<typeof TimeRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
