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
    btnHeight: '2.75rem',
    btnType: 'empty',
    textColor: '#000',
    clickHandler: () => {},
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
