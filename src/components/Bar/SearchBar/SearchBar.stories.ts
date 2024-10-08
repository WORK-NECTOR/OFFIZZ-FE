import { Meta, StoryObj } from '@storybook/react';
import SearchBar from '.';

const meta = {
  title: 'SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    width: '41.75rem',
    height: '3.25rem',
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
