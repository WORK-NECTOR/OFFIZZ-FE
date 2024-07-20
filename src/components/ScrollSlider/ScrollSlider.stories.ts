import { Meta, StoryObj } from '@storybook/react';
import ScrollSlider from '.';

const meta = {
  title: 'ScrollSlider',
  component: ScrollSlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ScrollSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
