import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="h-[50px] bg-white z-50 shadow-md">
      <nav className="h-full">
        <Link to={"/"}>
          <div className="h-full flex items-center justify-start max-2xl:ml-16 max-2xl:mr-10 text-neutral-100 font-secondery text-2xl px-5">
            <h1 className="text-teal-600 primary-txt">
              <span className="text-amber-500 font-bold">.</span><span className="font-bold ">Todo</span>
              <span className="text-neutral-500 font-semibold">APP</span>
            </h1>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
