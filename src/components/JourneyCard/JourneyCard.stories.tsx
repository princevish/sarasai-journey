import type { Meta, StoryObj } from '@storybook/react-vite';
import JourneyCard from './JourneyCard';
import { JourneyBlock } from '@/types';

const meta: Meta<typeof JourneyCard> = {
  component: JourneyCard,
  title: 'Components/JourneyCard',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof JourneyCard>;

const baseBlock: JourneyBlock = {
  id: 1,
  title: "Powers of AI",
  skills: ["AI Fundamentals"],
  status: "locked",
};

export const Locked: Story = {
  args: {
    block: { ...baseBlock, status: "locked" },
    side: "left",
    index: 0,
  },
};

export const Current: Story = {
  args: {
    block: { ...baseBlock, status: "current" },
    side: "right",
    index: 0,
  },
};

export const Highlighted: Story = {
  args: {
    block: { ...baseBlock, status: "highlighted" },
    side: "left",
    index: 0,
  },
};

export const RightSide: Story = {
  args: {
    block: { ...baseBlock, status: "locked" },
    side: "right",
    index: 1,
  },
};

export const LongTitle: Story = {
  args: {
    block: { 
      ...baseBlock, 
      title: "Python Programming with AI, Cloud Fundamentals With AI, and Advanced Machine Learning",
      skills: ["Python", "Programming", "Data Types", "Skill 1", "Skill 2", "Python Programming"],
    },
    side: "left",
    index: 2,
  },
};
