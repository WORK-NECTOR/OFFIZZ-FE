import { Meta, StoryObj } from '@storybook/react';
import StatLabel from '.';

const meta = {
  title: 'StatLabel',
  component: StatLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    stat: '100+',
    desc: '워케이션 지역 수',
  },
} satisfies Meta<typeof StatLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
