import type { Meta, StoryObj } from '@storybook/react';
import JourneyPage from './JourneyPage';
import journeyData from '@/data/journeyData';

const meta: Meta<typeof JourneyPage> = {
  component: JourneyPage,
  title: 'Pages/JourneyPage',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof JourneyPage>;

export const Default: Story = {
  args: {
    data: journeyData,
    currentStep: 4,
    totalSteps: 5,
  },
};

export const FirstStep: Story = {
  args: {
    data: journeyData,
    currentStep: 1,
    totalSteps: 5,
  },
};

export const Completed: Story = {
  args: {
    data: journeyData,
    currentStep: 5,
    totalSteps: 5,
  },
};

export const Mobile: Story = {
  args: {
    data: journeyData,
  },
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
};
