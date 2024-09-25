import { Meta, StoryObj } from '@storybook/react';
import OfficeAccordion from '.';

const meta = {
  title: 'OfficeAccordion',
  component: OfficeAccordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    placeName: '임시 오피스명',
  },
} satisfies Meta<typeof OfficeAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
