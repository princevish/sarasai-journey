export type FlagColor = "red" | "orange" | "purple";

export interface JourneyBlock {
  id: number;
  title: string;
  skills: string[];
  status: "current" | "highlighted" | "locked";
}
