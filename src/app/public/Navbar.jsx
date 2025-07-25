import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar shadow-sm w-full bg-gray-400">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Todo App
          </Link>
        </div>
        <div className="flex">
          <img
            src="assets/images/logo-nbg.png"
            alt="Todo Logo"
            className="w-18 h-17"
          />
        </div>
      </div>
      <div className="flex-none ml-auto">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Get Started</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link to="singin">Sing In</Link>
                </li>
                <li>
                  <Link to="singup">Sing Up</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
