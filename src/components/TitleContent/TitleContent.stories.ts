import { Meta, StoryObj } from '@storybook/react';
import TitleContent from '.';
import React from 'react';

const meta = {
  title: 'TitleContent',
  component: TitleContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: '제목',
    children: React.createElement(
      'div',
      { className: 'my-div' },
      'Hello, React!',
    ),
  },
} satisfies Meta<typeof TitleContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
