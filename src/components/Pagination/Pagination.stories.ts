import { Meta, StoryObj } from '@storybook/react';
import Pagination from '.';

const meta = {
  title: 'Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    totalPage: 16,
    curPage: 1,
    setPage: () => {},
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
