import { Meta, StoryObj } from '@storybook/react';
import PaginationBar from '.';

const meta = {
  title: 'PaginationBar',
  component: PaginationBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    totalPage: 16,
    curPage: 1,
    setPage: () => {},
  },
} satisfies Meta<typeof PaginationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
