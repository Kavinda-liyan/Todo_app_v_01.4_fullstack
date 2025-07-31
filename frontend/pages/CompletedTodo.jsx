import { Link } from "react-router-dom";
import EmptyTodoMessage from "../components/EmptyTodoMessage";
import TodoCard from "../components/TodoCard";
import { useTodoContext } from "../hooks/useTodoContext";
import { useEffect } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow"


const CompletedTodo = () => {
  const { todos, dispatch } = useTodoContext();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TODOS", payload: data });
      }
    };
    fetchTodos();
  }, []);

  return (
    <section className="h-[calc(100vh-60px)] bg-neutral-200 dark:bg-slate-700">
      <div className="h-full max-[110rem]:ml-40 max-[120rem]:mr-40 max-2xl:ml-16 max-2xl:mr-16 max-xl:ml-16  max-lg:ml-10 max-md:ml-1 max-md:mr-1 z-10 ">
        <div className="h-full grid grid-cols-1 max-md:grid-cols-1">
          {todos.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <Link to={"/"} className="scale-100 hover:scale-[98%] transition-all duration-300 ease-in-out">
                <EmptyTodoMessage />
              </Link>
            </div>
          ) : (
            todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoCard
                  _id={todo._id}
                  key={todo._id}
                  title={todo.title}
                  description={todo.todo}
                  date={formatDistanceToNow(new Date(todo.updatedAt),{addSuffix:true}) }
                  completed={todo.completed}
                />
              ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CompletedTodo;
