import { faBookmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoCard = ({title,description}) => {
  return (
    <div className="w-full px-5 py-2 my-1">
      <div className="w-full min-h-24 rounded-md bg-white shadow-md border-[1.5px] border-teal-300 scale-100 hover:scale-[98%] hover:border-[2px] hover:cursor-pointer hover:duration-150 duration-150  hover:shadow-lg ">
        <div className="grid grid-cols-12">
          {/* text-content */}
          <div className="col-span-11 mx-1 px-2 py-2">
            <div className="flex gap-2 items-center text-neutral-600">
              <FontAwesomeIcon
                icon={faBookmark}
                className="flex text-amber-500"
              />
              <h1 className="text-[1.1rem] font-semibold primary-txt">
                {title}
              </h1>
            </div>
            <div>
              <p className="pl-[2px] text-neutral-900 secondery-txt text-[1rem] my-1">
                {description}
              </p>
            </div>
          </div>

          {/* action-content */}
          <div className="col-span-1 mx-1 px-2 py-4">
            <div className="flex items-end justify-center h-full">
              <button className="text-neutral-500 hover:text-neutral-800 hover:duration-150 duration-150 cursor-pointer">
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
