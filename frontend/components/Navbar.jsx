import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };

  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  const navLinks = (
    <>
      <Link to={"/"} className="mx-2">
        <p className="primary-txt dark:text-teal-100 dark:hover:text-teal-300 text-neutral-800 hover:text-neutral-500 text-sm">
          Home
        </p>
      </Link>
      <button
        onClick={handleLogout}
        className="p-1 bg-teal-500 rounded-md text-sm primary-txt text-white shadow-md hover:bg-teal-600 duration-150 hover:cursor-pointer"
      >
        Logout
      </button>

      <Link to={"/login"} className="mx-2">
        <p className="primary-txt dark:text-teal-100 dark:hover:text-teal-300 text-neutral-800 hover:text-neutral-500 text-sm">
          Login
        </p>
      </Link>
    </>
  );

  return (
    <header className="h-[60px] z-50 dark:bg-slate-700 bg-neutral-200  transition-colors static">
      <nav className="h-full py-2  px-5">
        <div className="h-full bg-white dark:bg-slate-800  flex items-center justify-between max-2xl:mx-16 max-xl:mx-10 max-lg:mx-5 max-md:mx-2 rounded-md shadow-md">
          <Link to={"/"}>
            <div className="h-full flex items-center justify-start text-neutral-100 font-secondery text-2xl px-5">
              <h1 className="text-teal-600 dark:text-teal-400 primary-txt">
                <span className="text-amber-500 dark:text-amber-300 font-bold">
                  .
                </span>
                <span className="font-bold ">Todo</span>
                <span className="text-neutral-500 dark:text-neutral-200 font-semibold">
                  APP
                </span>
              </h1>
            </div>
          </Link>
          <div className="flex items-center max-2xl:gap-0 max-md:gap-0">
            <div className="flex items-center gap-5 max-md:hidden px-5">
              {navLinks}
            </div>
            <div className="px-5 flex items-center ">
              <button className="cursor-pointer" onClick={toggleTheme}>
                <div className="h-5 bg-neutral-200 dark:bg-neutral-100 rounded-2xl w-10 shadow-inner-md border-[0.5px] border-neutral-300 relative">
                  <div className="h-4 w-4 bg-teal-500 dark:bg-slate-800 rounded-full absolute left-0.5 top-1/2 transform -translate-y-1/2 dark:right-0.5 dark:left-[unset] transition-all duration-300 ease-in-out "></div>
                </div>
              </button>
            </div>
            <div className="px-5 max-2xl:hidden max:md:block max-sm:block z-50">
              <button
                className="cursor-pointer z-50 dark:text-teal-50 text-slate-700"
                onClick={handleToggle}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            {toggleMenu && (
              <div className="w-[100vw] h-[100vh] absolute bg-neutral-100 text-amber-50 z-40 top-0 left-0">
                <div className="flex items-center justify-center h-full flex-col gap-10">
                  {navLinks}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
