import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  const handleTitleChange = (e) => {
    const newTitle=e.target.value;
    setTitle(newTitle);
    console.log(title);
  };
 
  return (
    <div className="w-full px-5 py-2 my-1 primary-txt">
      <div className="border-l-[1px] p-5">
        <h1 className=" font-semibold">Add Todo</h1>
        <form className="mt-5">
          <div className="mt-2 flex flex-col">
            <label>Todo title :</label>
            <input
              type="text"
              onChange={handleTitleChange}
              className="border-[1.5px] border-neutral-500 rounded-md w-full p-1 text-neutral-600"
            ></input>
          </div>
          <div className="mt-2  flex flex-col">
            <label>Todo :</label>
            <textarea
              className="border-[1.5px] border-neutral-500 rounded-md w-full p-1"
              id="message"
              name="message"
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
