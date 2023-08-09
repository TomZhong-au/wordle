export interface KeyCapProps {
  letter: string;
  handleKeyClick: (arg: string) => void;
}

export enum KeyCapStatus {
  default = "default",
  wrong = "wrong",
  correct = "correct",
  perfect = "perfect",
}

export interface KeyCapButtonProps {
  $status: KeyCapStatus;
}

export interface AnswerProps {
  answer: string;
  inProgress: boolean;
}

export interface AnswerWrapperProps {
  $isSelected: boolean;
}
