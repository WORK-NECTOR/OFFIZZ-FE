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
    mainText: '메인 텍스트',
    subText: '서브 텍스트',
    startDate: '2024.09.26',
    endDate: '2024.09.28',
    img: ic_logo,
  },
} satisfies Meta<typeof RecapBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
