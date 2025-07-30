import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  
    const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header className="h-[50px] light:bg-white dark:bg-slate-800 z-50 shadow-md transition-colors">
      <nav className="h-full">
        <div className="h-full flex items-center justify-between max-2xl:mx-16 max-xl:mx-10 max-lg:mx-5 max-md:mx-2">
          <Link to={"/"}>
            <div className="h-full flex items-center justify-start text-neutral-100 font-secondery text-2xl px-5">
              <h1 className="text-teal-600 dark:text-teal-400 primary-txt">
                <span className="text-amber-500 dark:text-amber-300 font-bold">.</span>
                <span className="font-bold ">Todo</span>
                <span className="text-neutral-500 dark:text-neutral-200 font-semibold">APP</span>
              </h1>
            </div>
          </Link>
          <div className="px-5 flex items-center">
            <button className="cursor-pointer" onClick={toggleTheme}>
              <div className="h-5 bg-neutral-200 dark:bg-neutral-100 rounded-2xl w-10 shadow-inner-md border-[0.5px] border-neutral-300 relative">
                <div className="h-4 w-4 bg-teal-500 dark:bg-slate-800 rounded-full absolute left-0.5 top-1/2 transform -translate-y-1/2 dark:right-0.5 dark:left-[unset] transition-all duration-300 ease-in-out "></div>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
