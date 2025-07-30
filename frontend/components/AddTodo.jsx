import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    console.log(title);
  };

  const handleTodoChange = (e) => {
    const newTodo = e.target.value;
    setTodo(newTodo);
    console.log(todo);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      console.log("Todo added", data);
    }
  };

  return (
    <div className="w-full px-5 py-2 my-1 primary-txt">
      <div className="bg-white border-[0.5px] border-neutral-200 shadow-md rounded-md p-5">
        <h1 className=" font-semibold text-teal-600">Add New Todo</h1>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="mt-2 flex flex-col">
            <label>Todo title :</label>
            <input
              type="text"
              onChange={handleTitleChange}
              value={title}
              className="border-[1px] border-teal-500 rounded-md w-full p-1 text-neutral-600"
            ></input>
          </div>
          <div className="mt-2  flex flex-col">
            <label>Todo :</label>
            <textarea
              className="border-[1px] border-teal-500 rounded-md w-full p-1"
              onChange={handleTodoChange}
              value={todo}
              rows="5"
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
