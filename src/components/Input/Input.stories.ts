import { Meta, StoryObj } from '@storybook/react';
import Input from '.';
import useOnboardingStore from '@/store/useOnboardingStore';
import { ONBOARDING_DESC } from '@/constants/onboarding';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    placeholder: ONBOARDING_DESC.reasonPlaceholder,
    setState: () => {},
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
