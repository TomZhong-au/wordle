import { useContext } from "react";
import { TextContext } from "./TextContext";

export const useTextContext = () => {
  const value = useContext(TextContext);
  if (!value) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }
  return value;
};
