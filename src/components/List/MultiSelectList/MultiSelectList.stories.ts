import { Meta, StoryObj } from '@storybook/react';
import MultiSelectList from '.';
import ic_nature from '../../../../public/ic-nature.png';
import ic_restaurant from '../../../../public/ic-restaurant.png';
import ic_art from '../../../../public/ic-art.png';
import ic_shopping from '../../../../public/ic-shopping.png';

const meta = {
  title: 'MultiSelectList',
  component: MultiSelectList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    listArr: [
      {
        icon: ic_nature,
        title: '자연',
        keyName: 'NATURE',
      },
      {
        icon: ic_restaurant,
        title: '맛집',
        keyName: 'RESTAURANT',
      },
      {
        icon: ic_art,
        title: '문화예술',
        keyName: 'CULTURE',
      },
      {
        icon: ic_shopping,
        title: '쇼핑',
        keyName: 'SHOPPING',
      },
    ],
    selectFunc: () => {},
  },
} satisfies Meta<typeof MultiSelectList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
