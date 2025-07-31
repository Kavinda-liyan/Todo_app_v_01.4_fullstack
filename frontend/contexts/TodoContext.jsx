import { createContext, useReducer } from "react";
export const TodoContexts = createContext();

export const todosReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        todos: action.payload,
      };
    case "CREATE_TODO":
      return {
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload._id),
      };
      case "COMPLETE_TODO":
        return{
          todos:state.todos.map((todo) => {
            if (todo._id === action.payload._id) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          })
        }
    default:
      return state;
  }
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, {
    todos: [],
  });

  return (
    <TodoContexts.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContexts.Provider>
  );
};
