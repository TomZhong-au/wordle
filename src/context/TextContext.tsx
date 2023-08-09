import { useState, createContext, useEffect, useCallback } from "react";
import { TextContextType } from "../interface/context.interface";

const initialValue = ["", "", "", "", "", ""];

export const TextContext = createContext<TextContextType | null>(null);

export const TextContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [words, setWords] = useState(initialValue);
  const [attempt, setAttempt] = useState(0); //start with 0 to be in accord with array index

  const handleKeyClick = useCallback(
    (letter: string) => {
      const currentWord = words[attempt];

      // two input check here,
      // 1. if 'enter', only let it submit when there are 5 letters
      // 2. if there are already 5 letters, unless it is 'delete
      if (letter === "ENTER") {
        if (letter.length === 5) return submitAnswer(currentWord);
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
    //to-do
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isValidInput(e.key)) return;
      const keyboardInput =
        e.key.toUpperCase() === "BACKSPACE" ? "DELETE" : e.key.toUpperCase();
      // map 'BACKSPACE' into 'DELETE' as shown on screen, otherwise no changes
      handleKeyClick(keyboardInput);
    },
    [handleKeyClick]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <TextContext.Provider value={{ words, handleKeyClick, attempt }}>
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
