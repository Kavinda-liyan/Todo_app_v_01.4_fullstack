import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmptyTodoMessage = () => {
  return (
    <div className="px-5 flex items-center justify-center h-full">
      <div className="flex items-center flex-col">
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="text-7xl text-teal-500 dark:text-teal-400"
        />
        <h1 className="text-4xl text-neutral-600 dark:text-neutral-300 mt-4 primary-txt ">
          No Todos Available
        </h1>
      </div>
    </div>
  );
};

export default EmptyTodoMessage;
