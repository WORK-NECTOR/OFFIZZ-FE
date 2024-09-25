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
    btnType: 'full',
    btnColor: 'var(--blue-main)',
    textColor: 'var(--white-main)',
    padding: '0.5rem 1rem',
    clickHandler: () => {},
  },
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
