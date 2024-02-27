import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-center text-3xl font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          className="bg-slate-100 p-3 rounded-lg"
          placeholder="Your Email"
          id="email"
        />
        <input
          type="password"
          className="bg-slate-100 p-3 rounded-lg"
          placeholder="Your Password"
          id="password"
        />
        <button className="bg-slate-700 rounded-lg uppercase text-white p-3 hover:opacity-80">
          Sign In
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p className="font-bold text-slate-600">Don't Have an account ?</p>
        <Link to="/singup">
          <span className="text-blue-600 font-bold">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
