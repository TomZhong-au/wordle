import { useState, createContext, useEffect, useCallback } from "react";
import { TextContextType } from "../interface/context.interface";

const initialValue = {
  currentInput: "",
  word: "",
};

export const TextContext = createContext<TextContextType | null>(null);

export const TextContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [input, setInput] = useState(initialValue);

  const handleKeyClick = useCallback((letter: string) => {
    setInput((prev) => {
      if (letter === "←" || letter === "BACKSPACE") {
        return { ...prev, word: prev.word.slice(0, -1) };
      }
      return { currentInput: letter, word: prev.word + letter };
    });
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => handleKeyClick(e.key.toUpperCase()),
    [handleKeyClick]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <TextContext.Provider value={{ input, handleKeyClick }}>
      {children}
    </TextContext.Provider>
  );
};
