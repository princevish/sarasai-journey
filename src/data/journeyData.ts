import { JourneyBlock } from "@/types";

/**
 * Single array to manage all journey blocks.
 * Blocks alternate left/right based on their position (odd = left, even = right).
 * Matches the exact color coding and highlight states from the reference design.
 */
const journeyData: JourneyBlock[] = [
  {
    id: 1,
    title: "Powers of AI",
    skills: ["AI Fundamentals"],
    status: "current",
  },
  {
    id: 2,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: ["Python", "Programming", "Data Types", "Skill 1", "Skill 2", "Python Programming"],
    status: "locked",
  },
  {
    id: 3,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: ["Python", "Programming", "Data Types", "Skill 1", "Skill 2", "Python Programming"],
    status: "locked",
  },
  {
    id: 4,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: ["Python", "Programming", "Data Types", "Skill 1", "Skill 2", "Python Programming"],
    status: "locked",
  },
  {
    id: 5,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: ["Python", "Programming", "Data Types", "Skill 1", "Skill 2", "Python Programming"],
    status: "locked",
  },
  {
    id: 6,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: ["Python", "Programming", "Data Types", "Skill 1", "Skill 2", "Python Programming"],
    status: "highlighted",
  },
  {
    id: 7,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: ["Python", "Programming", "Data Types", "Skill 1", "Skill 2", "Python Programming"],
    status: "locked",
  },
  {
    id: 8,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: ["Python", "Programming", "Data Types", "Skill 1", "Skill 2", "Python Programming"],
    status: "locked",
  },
  {
    id: 9,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: ["Python", "Programming", "Data Types", "Skill 1", "Skill 2", "Python Programming"],
    status: "highlighted",
  },
  {
    id: 10,
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: ["Python", "Programming", "Data Types", "Skill 1", "Skill 2", "Python Programming"],
    status: "locked",
  },
];

export default journeyData;
