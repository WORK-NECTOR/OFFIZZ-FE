import { Meta, StoryObj } from '@storybook/react';
import RecapBox from './RecapBox';

const meta = {
  title: 'RecapBox',
  component: RecapBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    RecapBoxType: 'normal',
  },
} satisfies Meta<typeof RecapBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
