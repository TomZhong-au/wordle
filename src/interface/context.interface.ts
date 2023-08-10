import { StatusState } from "./statusReducer.interface";

export type TextContextType = {
  words: string[];
  handleKeyClick: (arg: string) => void;
  attempt: number;
  status: StatusState;
  gameStatus: GameStatusOptions;
};

export type GameStatusOptions = "win" | "lose" | "playing";
