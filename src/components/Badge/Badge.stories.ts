import { Meta, StoryObj } from '@storybook/react';
import Badge from '.';

const meta = {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    text: '독립 오피스',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
