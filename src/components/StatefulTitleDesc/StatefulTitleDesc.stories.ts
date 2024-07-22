import { Meta, StoryObj } from '@storybook/react';
import StatefulTitleDesc from '.';

const meta = {
  title: 'StatefulTitleDesc',
  component: StatefulTitleDesc,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'title',
    desc: 'description',
    state: 'active',
  },
} satisfies Meta<typeof StatefulTitleDesc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
