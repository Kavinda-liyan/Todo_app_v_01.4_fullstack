import {
  faBookmark,
  faCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTodoContext } from "../hooks/useTodoContext";


const TodoCard = ({ _id, title, description, date, completed }) => {
  const { dispatch } = useTodoContext();
  const handleDelete = async () => {
    const respons = await fetch("/api/todos/" + _id, {
      method: "DELETE",
    });
    const data = await respons.json();
    if (respons.ok) {
      dispatch({ type: "DELETE_TODO", payload: data });
    }
  };
  const handleComplete = async () => {
    const response = await fetch("api/todos/complete/" + _id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "COMPLETE_TODO", payload: data });
    }
  };

  return (
    <div className="w-full px-5 py-2 my-1 ">
      <div className="w-full min-h-24 rounded-md border-[0.5px] border-neutral-200 bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-teal-100 shadow-md  scale-100 hover:scale-[98%]  hover:cursor-pointer transition-all ease-in-out hover:duration-300 duration-300  hover:shadow-lg ">
        <div className="grid grid-cols-12">
          {/* text-content */}
          <div className="col-span-10 mx-1 px-2 py-2">
            <div className="flex gap-2 items-center text-neutral-600">
              <FontAwesomeIcon
                icon={faBookmark}
                className="flex text-amber-500 dark:text-amber-300"
              />
              <h1 className="max-2xl:text-[1.1rem] max-md:text-[0.75rem] font-semibold primary-txt text-teal-600 dark:text-teal-100">
                {title}
              </h1>
            </div>
            <div>
              <p className="pl-[2px] text-neutral-900 dark:text-teal-50 secondery-txt max-2xl:text-[1rem] max-md:text-[0.75rem] my-1">
                {description}
              </p>
            </div>
            <div>
              <p className="pl-[2px] text-teal-700 dark:text-teal-400 secondery-txt max-2xl:text-[0.65rem] max-md:text-[0.5rem] my-1">
                 {date}
              </p>
            </div>
          </div>

          {/* action-content */}
          <div className="col-span-2 mx-1 px-1 py-4">
            <div className="flex gap-2 items-end justify-center h-full">
              <button
                onClick={handleDelete}
                className="max-2xl:text-[0.75rem] max-md:text-[0.7rem] text-white bg-red-600 shadow-md rounded-md max-2xl:w-6 max-2xl:h-6 h-6 w-6  cursor-pointer p-1 hover:duration-150 duration-150 hover:bg-teal-600 hover:text-neutral-300"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button
                disabled={completed}
                onClick={handleComplete}
                className={`max-2xl:text-[0.75rem] max-md:text-[0.7rem] text-white bg-green-600 shadow-md rounded-md max-2xl:w-6 max-2xl:h-6 h-6 w-6  cursor-pointer p-1 hover:duration-150 duration-150 hover:bg-teal-600 hover:text-neutral-300 ${
                  completed ? "opacity-50" : "opacity-100"
                }`}
              >
                <FontAwesomeIcon icon={faCheck} className="font-bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
