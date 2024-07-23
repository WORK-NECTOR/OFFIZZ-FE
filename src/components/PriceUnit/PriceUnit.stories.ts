import { Meta, StoryObj } from '@storybook/react';
import PriceUnit from '.';

const meta = {
  title: 'PriceUnit',
  component: PriceUnit,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    price: 80000,
    unit: '일',
  },
} satisfies Meta<typeof PriceUnit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
