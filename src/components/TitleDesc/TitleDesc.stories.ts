import { Meta, StoryObj } from '@storybook/react';
import TitleDesc from '.';

const meta = {
  title: 'TitleDesc',
  component: TitleDesc,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: '',
    desc: '',
    sort: 'left',
  },
} satisfies Meta<typeof TitleDesc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
