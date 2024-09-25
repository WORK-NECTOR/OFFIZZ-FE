import { Meta, StoryObj } from '@storybook/react';
import BackButton from '.';

const meta = {
  title: 'BackButton',
  component: BackButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    clickHandler: () => {},
  },
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
