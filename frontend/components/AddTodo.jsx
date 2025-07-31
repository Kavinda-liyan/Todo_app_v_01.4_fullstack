import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

const AddTodo = () => {
  const { dispatch } = useTodoContext();
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  };

  const handleTodoChange = (e) => {
    const newTodo = e.target.value;
    setTodo(newTodo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!title||!todo){
      setError("Title and Todo cannot be empty");
      return;
    }

    const newTodo = {
      title,
      todo,
    };

    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    } else {
      setTitle("");
      setTodo("");
      setError(null);
      dispatch({ type: "CREATE_TODO", payload: data });
    }
  };

  return (
    <div className="w-full px-5 py-2 my-1 primary-txt">
      <div className="bg-white dark:bg-slate-800 border-[0.5px] border-neutral-200 dark:border-slate-700 shadow-md rounded-md p-5 dark:text-teal-100">
        <h1 className=" font-semibold text-teal-600 dark:text-teal-100">
          Add New Todo
        </h1>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="mt-2 flex flex-col">
            <label>Todo title :</label>
            <input
              type="text"
              onChange={handleTitleChange}
              value={title}
              className="border-[1px] border-teal-500 dark:border-slate-700 dark:bg-slate-700 rounded-md w-full p-1 "
            ></input>
          </div>
          <div className="mt-2  flex flex-col">
            <label>Todo :</label>
            <textarea
              className="border-[1px] border-teal-500 dark:border-slate-700 dark:bg-slate-700 rounded-md w-full p-1"
              onChange={handleTodoChange}
              value={todo}
              rows="3"
              cols="30"
            ></textarea>
          </div>
          <button className="mt-2 bg-teal-500 p-2 rounded-md shadow-md text-white font-semibold text-sm hover:bg-teal-600 hover:duration-150 duration-150 cursor-pointer ">
            <FontAwesomeIcon icon={faPlus} />
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
