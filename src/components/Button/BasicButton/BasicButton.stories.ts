import { Meta, StoryObj } from '@storybook/react';
import BasicButton from '.';

const meta = {
  title: 'BasicButton',
  component: BasicButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    btnText: 'BasicButton',
    btnHeight: '2.75rem',
    btnType: 'empty',
    textColor: '#000',
    clickHandler: () => {},
  },
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
