import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-center text-3xl font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="bg-slate-100 p-3 rounded-lg"
          placeholder="Your Name"
          id="username"
        />
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
          Sign Up
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p className="font-bold text-slate-600">Have an account ?</p>
        <Link to="/singin">
          <span className="text-blue-600 font-bold">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
