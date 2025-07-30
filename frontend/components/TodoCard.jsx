import { faBookmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoCard = ({title,description,date}) => {
  return (
    <div className="w-full px-5 py-2 my-1 ">
      <div className="w-full min-h-24 rounded-md border-[0.5px] border-neutral-200 bg-white shadow-md  scale-100 hover:scale-[98%]  hover:cursor-pointer hover:duration-150 duration-150  hover:shadow-lg ">
        <div className="grid grid-cols-12">
          {/* text-content */}
          <div className="col-span-11 mx-1 px-2 py-2">
            <div className="flex gap-2 items-center text-neutral-600">
              <FontAwesomeIcon
                icon={faBookmark}
                className="flex text-amber-500"
              />
              <h1 className="max-2xl:text-[1.1rem] max-md:text-[0.75rem] font-semibold primary-txt text-teal-600">
                {title}
              </h1>
            </div>
            <div>
              <p className="pl-[2px] text-neutral-900 secondery-txt max-2xl:text-[1rem] max-md:text-[0.75rem] my-1">
                {description}
              </p>
            </div>
            <div>
              <p className="pl-[2px] text-teal-700 secondery-txt max-2xl:text-[0.65rem] max-md:text-[0.5rem] my-1">
                {date}
              </p>
            </div>
          </div>

          {/* action-content */}
          <div className="col-span-1 mx-1 px-1 py-4">
            <div className="flex items-end justify-center h-full">
              <button className="max-2xl:text-[1rem] max-md:text-[0.7rem] text-white bg-teal-500 shadow-md rounded-md max-2xl:w-8 max-2xl:h-8 h-6 w-6  cursor-pointer p-1 hover:duration-150 duration-150 hover:bg-teal-600 hover:text-neutral-300">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
