import { Meta, StoryObj } from '@storybook/react';
import IconTitle from '.';
import nature from '../../../public/ic-nature.png';

const meta = {
  title: 'IconTitle',
  component: IconTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    icon: nature,
    title: '자연',
  },
} satisfies Meta<typeof IconTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
