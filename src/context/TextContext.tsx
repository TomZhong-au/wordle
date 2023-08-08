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
      setWords((current) => {
        const currentWord = current[attempt];
        const newWord =
          letter === "←" || letter === "BACKSPACE"
            ? currentWord.slice(0, -1)
            : currentWord + letter;
        const value = [...current];
        value[attempt] = newWord;
        return value;
      });
    },
    [attempt]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isValidInput(e.key)) return;
      handleKeyClick(e.key.toUpperCase());
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
    return letter.toUpperCase() === "BACKSPACE";
  } else {
    return /[a-z]/i.test(letter);
  }
}
