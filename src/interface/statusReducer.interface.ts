import { initialStatus } from "../context/statusReducer";

export type StatusState = typeof initialStatus;

export type StatusReducerActions = SubmitAnswerAction;

type SubmitAnswerAction = {
  type: "submit";
  payload: {
    key: string;
    response: string;
    attempt: number;
  };
};
