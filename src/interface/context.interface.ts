export type TextContextType = {
  words: string[];
  handleKeyClick: (arg: string) => void;
  attempt: number;
};

export type GameStatusOptions = "win" | "lose" | "playing";
