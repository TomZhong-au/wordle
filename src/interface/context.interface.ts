import { StatusState } from "./statusReducer.interface";

export type TextContextType = {
  words: string[];
  handleKeyClick: (arg: string) => void;
  attempt: number;
  status: StatusState;
};

export type GameStatusOptions = "win" | "lose" | "playing";
