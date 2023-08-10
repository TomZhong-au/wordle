import {
  useState,
  createContext,
  useEffect,
  useCallback,
  useReducer,
} from "react";
import {
  GameStatusOptions,
  TextContextType,
} from "../interface/context.interface";
import { answerStatus, keyboardStatus, statusReducer } from "./statusReducer";

const initialWords = ["", "", "", "", "", ""];

export const TextContext = createContext<TextContextType | null>(null);

export const TextContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const correctAnswer = "INDIA";

  const [words, setWords] = useState(initialWords);
  const [attempt, setAttempt] = useState(0); //start with 0 to be in accord with array index
  const [gameStatus, setGameStatus] = useState<GameStatusOptions>("playing");

  const [status, dispatch] = useReducer(statusReducer, {
    keyboardStatus,
    answerStatus,
  });

  // the useCallback was originally used to prevent the <KeyCap/> component from re-rendering, as the <KeyCap/> has already used React.memo.
  // however, this handleKeyClick function need to access the `words` state to decide its own behavior
  // `words` is added to the dependency and the useCallback seems useless
  // But the useCallback cannot be removed as it is required by the useEffect for the addEventListener

  const handleKeyClick = useCallback(
    (letter: string) => {
      const currentWord = words[attempt];
      // two input guards here,
      // 1. The 'ENTER' key, only let it submit when there are 5 letters, otherwise do nothing
      // 2. if there are already 5 letters, do nothing , unless it is 'delete
      if (letter === "ENTER") {
        if (currentWord.length === 5) return submitAnswer(currentWord);
        return;
      }
      if (currentWord.length === 5 && letter !== "DELETE") return;

      setWords((current) => {
        const newWord =
          letter === "DELETE" ? currentWord.slice(0, -1) : currentWord + letter;
        const value = [...current];
        value[attempt] = newWord;
        return value;
      });
    },
    [attempt, words]
  );

  const submitAnswer = (answer: string) => {
    console.log("answer submitted");
    if (answer === correctAnswer) return setGameStatus("win");
    dispatch({
      type: "submit",
      payload: {
        key: correctAnswer,
        response: answer,
        attempt: attempt,
      },
    });
    setAttempt((current) => current + 1);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isValidInput(e.key)) return;
      const keyboardInput =
        e.key.toUpperCase() === "BACKSPACE" ? "DELETE" : e.key.toUpperCase();
      // map 'BACKSPACE' into 'DELETE' so that the handleKeyClick can process easier
      handleKeyClick(keyboardInput);
    },
    [handleKeyClick]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    //should have be 6 attemps, but change the starting number to 0, so it is 5
    if (attempt > 5) setGameStatus("lose");
  }, [attempt]);

  return (
    <TextContext.Provider
      value={{ words, handleKeyClick, attempt, status, gameStatus }}
    >
      {children}
    </TextContext.Provider>
  );
};

function isValidInput(letter: string) {
  if (letter.length > 1) {
    return ["BACKSPACE", "ENTER"].includes(letter.toUpperCase());
  } else {
    return /[a-z]/i.test(letter);
  }
}
