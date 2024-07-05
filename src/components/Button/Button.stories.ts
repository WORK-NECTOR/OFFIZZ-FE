import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    btnText: 'Button',
    btnSize: 'medium',
    btnType: 'empty',
    textColor: '#fff',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
