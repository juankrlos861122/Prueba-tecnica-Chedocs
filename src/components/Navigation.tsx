import logoChedocs from "@assets/logo-white.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="bg-indigo-600">
      <nav className="m-auto flex justify-between items-center w-full py-5 text-white max-w-7xl">
        <div className="nav-logo">
          <Link to="/">
            <img src={logoChedocs} alt="Logo-chedocs" style={{ width: 150 }} />
          </Link>
        </div>

        <div className="nav-menu-login">
          <Link to="/login" className="text-xl mr-6 font-bold">
            Log in
          </Link>
          <button className="bg-[#202020] py-2 px-4">Start your free trial</button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
