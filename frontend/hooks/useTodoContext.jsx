import { TodoContexts } from "../contexts/TodoContext";
import { useContext } from "react";

export const useTodoContext = () => {
  const context = useContext(TodoContexts);

  if (!context) {
    throw Error("useTodoContext must be used inside a TodoContextProvider");
  }

  return context;
};
