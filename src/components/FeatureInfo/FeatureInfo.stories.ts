import { Meta, StoryObj } from '@storybook/react';
import FeatureInfo from '.';

const meta = {
  title: 'FeatureInfo',
  component: FeatureInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'goal',
    desc: '처음 워케이션을 시작할 때의 목표를 되돌아봐요',
  },
} satisfies Meta<typeof FeatureInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
