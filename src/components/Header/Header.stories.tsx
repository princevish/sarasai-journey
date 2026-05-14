import type { Meta, StoryObj } from '@storybook/react-vite';
import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Initial: Story = {
  args: {
    currentStep: 1,
    totalSteps: 5,
  },
};

export const Middle: Story = {
  args: {
    currentStep: 3,
    totalSteps: 5,
  },
};

export const Final: Story = {
  args: {
    currentStep: 5,
    totalSteps: 5,
  },
};
