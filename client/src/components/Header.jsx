import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-slate-200">
        <div className="flex justify-between items-center list-none p-3 mx-auto max-w-7xl">
          <Link to="/">
            <h1 className="font-bold">Mern App</h1>
          </Link>
          <ul className="flex gap-4">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/signin">
              <li>Sign In</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
