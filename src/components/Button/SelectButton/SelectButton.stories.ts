import { Meta, StoryObj } from '@storybook/react';
import SelectButton from '.';

const meta = {
  title: 'SelectButton',
  component: SelectButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    selected: true,
    btnHeight: '2.5rem',
  },
} satisfies Meta<typeof SelectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
