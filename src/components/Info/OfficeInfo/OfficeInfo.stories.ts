import { Meta, StoryObj } from '@storybook/react';
import OfficeInfo from '.';

const meta = {
  title: 'OfficeInfo',
  component: OfficeInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    placeName: '임시 오피스명',
  },
} satisfies Meta<typeof OfficeInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
