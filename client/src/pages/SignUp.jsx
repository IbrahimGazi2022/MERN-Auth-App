import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-center text-3xl font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-slate-100 p-3 rounded-lg"
          placeholder="Your Name"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          className="bg-slate-100 p-3 rounded-lg"
          placeholder="Your Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="bg-slate-100 p-3 rounded-lg"
          placeholder="Your Password"
          id="password"
          onChange={handleChange}
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
