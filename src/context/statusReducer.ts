import { KeyCapStatus } from "../interface/components.interface";
import {
  StatusReducerActions,
  StatusState,
} from "../interface/statusReducer.interface";

//generate the keyboardStatus Map
export const keyboardStatus = new Map<string, KeyCapStatus>();

for (
  let letterCode = "A".charCodeAt(0);
  letterCode <= "Z".charCodeAt(0);
  letterCode++
) {
  const letter = String.fromCharCode(letterCode);
  keyboardStatus.set(letter, KeyCapStatus.default);
}

// generate the answerStatus 2-d array
const numRows = 6; // Number of rows
const numCols = 5; // Number of columns

export const answerStatus: Array<Array<KeyCapStatus>> = [];
for (let i = 0; i < numRows; i++) {
  const row: Array<KeyCapStatus> = [];
  for (let j = 0; j < numCols; j++) {
    row.push(KeyCapStatus.default);
  }
  answerStatus.push(row);
}

export const initialStatus = {
  keyboardStatus,
  answerStatus,
};

interface UpdateStatusProps {
  key: string;
  response: string;
  map: typeof keyboardStatus;
}

function updateStatus({ key, response, map }: UpdateStatusProps) {
  const currentResult = [];
  for (let i = 0; i < response.length; i++) {
    const letter = response[i];
    let status = KeyCapStatus.default;

    if (!key.includes(response[i])) {
      status = KeyCapStatus.wrong;
    } else if (response[i] === key[i]) {
      status = KeyCapStatus.perfect;
    } else {
      status = KeyCapStatus.correct;
    }

    map.set(letter, status);
    currentResult.push(status);
  }
  return {
    keyboardStatus: new Map(map),
    answerStatus: currentResult,
  };
}

export function statusReducer(
  state: StatusState,
  { type, payload }: StatusReducerActions
) {
  switch (type) {
    case "submit": {
      const { key, response, attempt } = payload;
      const currentRowAnswer = [];
      const newMap = new Map(state.keyboardStatus);
      const newAnswerStatus = [...state.answerStatus];

      for (let i = 0; i < response.length; i++) {
        const letter = response[i];
        let status = KeyCapStatus.default;

        if (!key.includes(response[i])) {
          status = KeyCapStatus.wrong;
        } else if (response[i] === key[i]) {
          status = KeyCapStatus.perfect;
        } else {
          status = KeyCapStatus.correct;
        }
        newMap.set(letter, status);
        currentRowAnswer.push(status);
      }
      newAnswerStatus[attempt] = currentRowAnswer;

      return {
        keyboardStatus: newMap,
        answerStatus: newAnswerStatus,
      };
    }

    default:
      return state;
  }
}
