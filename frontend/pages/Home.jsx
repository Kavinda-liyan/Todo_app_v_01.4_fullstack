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
    <section className="h-[calc(100vh-50px)] bg-neutral-100">
      <div className="ml-10 mr-10">
        <div className="grid grid-cols-12">
          <div className="col-span-8 mt-3">
            {todos && todos.map((todo)=>(
              <TodoCard key={todo._id} title={todo.title} description={todo.todo}/>
            ))}
            
          </div>
          <div className="col-span-4 mt-3">
            <AddTodo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
