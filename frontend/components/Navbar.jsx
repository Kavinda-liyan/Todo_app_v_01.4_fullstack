import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="h-[50px] bg-slate-800 z-50 shadow-md">
      <nav className="h-full">
        <Link to={"/"}>
          <div className="h-full flex items-center justify-start ml-10 mr-10 text-neutral-100 font-secondery text-2xl">
            <h1 className="text-teal-300 primary-txt">
              <span className="text-neutral-500 font-semibold">.</span>Todo
              <span className="text-neutral-500 font-semibold">APP</span>
            </h1>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
