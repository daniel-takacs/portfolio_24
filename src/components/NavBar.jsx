import { NavLink } from "react-router-dom";
import { logo } from "../assets/images/index";

const NavBar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <img src={logo} alt="" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
