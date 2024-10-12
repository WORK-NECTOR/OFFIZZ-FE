import { Meta, StoryObj } from '@storybook/react';
import RecapBox from './RecapBox';
import ic_logo from '../../../public/offizz-logo.png';

const meta = {
  title: 'RecapBox',
  component: RecapBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    name: '이름',
    address: '주소',
    img: ic_logo,
    startDate: '2024.10.20',
    endDate: '2024.10.22',
    workationId: 0,
  },
} satisfies Meta<typeof RecapBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
