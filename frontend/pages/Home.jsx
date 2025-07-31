import { useEffect } from "react";
import TodoCard from "../components/TodoCard";
import AddTodo from "../components/AddTodo";
import { useTodoContext } from "../hooks/useTodoContext";
import EmptyTodoMessage from "../components/EmptyTodoMessage";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Home = () => {
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
      <div className="max-[110rem]:ml-40 max-[120rem]:mr-40 max-2xl:ml-16 max-2xl:mr-16 max-xl:ml-16  max-lg:ml-10 max-md:ml-1 max-md:mr-1 z-10">
        <div className="grid grid-cols-12 max-md:">
          <div
            className="col-span-8 max-md:col-span-12 mt-3 max-2xl:h-[calc(100vh-90px)] max-md:h-[calc(100vh-50vh)] overflow-y-scroll scrollbar-thin [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-slate-500/50
                    dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500  [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {todos.length === 0 ||
            todos.filter((todo) => !todo.completed).length === 0 ? (
              <EmptyTodoMessage />
            ) : (
              todos
                .filter((todo) => !todo.completed)
                .map((todo) => (
                  <TodoCard
                    _id={todo._id}
                    key={todo._id}
                    title={todo.title}
                    description={todo.todo}
                    date={formatDistanceToNow(new Date(todo.createdAt), {
                      addSuffix: true,
                    })}
                    completed={todo.completed}
                  />
                ))
            )}
          </div>
          <div className="col-span-4 max-md:col-span-12 mt-3 ">
            <AddTodo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
