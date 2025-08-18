import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup, error, isLoading} = useSignup();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <div className="bg-neutral-200 dark:bg-slate-700 min-h-[calc(100vh-60px)] flex items-center justify-center font-">
      <form
        className="w-[456px] bg-white p-10 rounded-md shadow-md dark:hover:text-teal-300 "
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <h3 className="primary-txt font-semibold text-[16px] py-1 text-center text-teal-600">
            Signup
          </h3>
          <hr className="border-[0.5px] text-teal-600/50"></hr>
        </div>

        <div className="my-1">
          <label className="my-1">Email :</label>
          <input
            className="rounded-md bg-slate-200 w-full my-1 p-1"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="my-1">
          <label className="my-1">Password :</label>
          <input
            className="rounded-md bg-slate-200 w-full my-1 p-1"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button
          disabled={isLoading}
          className="w-full mt-2 bg-teal-500 p-2 rounded-md shadow-md text-white font-semibold text-sm hover:bg-teal-600 hover:duration-150 duration-150 cursor-pointer "
        >
          Signup
        </button>
        {error && <div className="w-full p-1 text-center my-2 border-[1.5px] rounded-sm border-red-700 text-red-700 bg-red-600/15 text-xs font-semibold">{error}</div>}

        <div className="mt-4">
          <p className="font-semibold text-sm ">
            Already have an account ?{" "}
            <Link
              to={"/login"}
              className="text-teal-500 underline hover:text-teal-600"
            >
              Log in here
            </Link>
          </p>
        </div>
        
      </form>
    </div>
  );
};

export default Signup;
