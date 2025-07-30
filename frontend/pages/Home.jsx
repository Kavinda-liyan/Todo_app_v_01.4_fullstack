import React from "react";
import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";
import AddTodo from "../components/AddTodo";

const Home = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const data = await response.json();

      if (response.ok) {
        setTodos(data);
      }
      console.log(data);
    };
    fetchTodos();
  }, []);
  return (
    <section className="h-[calc(100vh-50px)] bg-neutral-200/40">
      <div className="max-[110rem]:ml-40 max-[120rem]:mr-40 max-2xl:ml-16 max-2xl:mr-16 max-xl:ml-16  max-lg:ml-10 max-md:ml-1 max-md:mr-1 ">
        <div className="grid grid-cols-12 max-md:">
          <div className="col-span-8 max-md:col-span-12 mt-3 h-[calc(100vh-80px)] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
            {todos && todos.map((todo)=>(
              <TodoCard key={todo._id} title={todo.title} description={todo.todo} date={todo.createdAt}/>
            ))}
            
          </div>
          <div className="col-span-4 max-md:col-span-12 mt-3">
            <AddTodo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
