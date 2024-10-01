import { Meta, StoryObj } from '@storybook/react';
import LocationItem from '.';

const meta = {
  title: 'LocationItem',
  component: LocationItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    address_name: '강원특별자치도 강릉시 경포로 365',
    place_name: '경포대',
    setPlace: () => {},
    searchBarType: 'place',
    visitPlace: [
      {
        address_name: 'address',
        place_name: 'place',
      },
    ],
    setVisitPlace: () => {},
  },
} satisfies Meta<typeof LocationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
