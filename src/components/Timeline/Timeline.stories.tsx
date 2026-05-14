import type { Meta, StoryObj } from '@storybook/react';
import Timeline from './Timeline';
import journeyData from '@/data/journeyData';

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  title: 'Components/Timeline',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    data: journeyData,
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

export const Tablet: Story = {
  args: {
    data: journeyData,
  },
  globals: {
    viewport: { value: 'tablet', isRotated: false },
  },
};
