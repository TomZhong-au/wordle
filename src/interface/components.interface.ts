export interface KeyCapProps {
  letter: string;
  handleKeyClick: (arg: string) => void;
}

export interface AnswerProps {
  answer: string;
  inProgress: boolean;
}

export interface AnswerWrapperProps {
  $isSelected: boolean;
}
