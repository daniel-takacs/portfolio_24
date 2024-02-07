/* import { NavLink, useNavigate } from "react-router-dom";
import { logo } from "../assets/images/index";
import { useNavigation } from './NavigationContext'; // Import the hook from context
import React from "react";

const NavBar = () => {
    const navigate = useNavigate();
    const { triggerPlaneAnimation, setAnimatePlane, destination } = useNavigation();
    React.useEffect(() => {
        if (destination && !setAnimatePlane) {
          navigate(destination); // Navigate after animation is done
        }
      }, [setAnimatePlane, navigate, destination]);
    
  return (
    <header className="header">
      <NavLink to="/" onClick={() => triggerPlaneAnimation("/")}className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <img src={logo} alt="" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
      <NavLink to="/about" onClick={() => triggerPlaneAnimation("/about")}>About</NavLink>
        <NavLink to="/projects" onClick={() => triggerPlaneAnimation("/projects")}>Projects</NavLink>
        <NavLink to="/contact" onClick={() => triggerPlaneAnimation("/contact")}>Contact</NavLink>

      </nav>
    </header>
  );
};

export default NavBar;
 */

// NavBar.jsx
import React from 'react';
import { NavLink } from "react-router-dom";
import { useNavigation } from '../components/NavigationContext';
import { logo } from "../assets/images/index";

const NavBar = () => {
  const { triggerPlaneAnimation } = useNavigation();

  return (
    <header className="header">
        <button className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md" onClick={() => triggerPlaneAnimation('/')}><img src={logo} alt="" /></button>
      <nav className="flex text-lg gap-7 font-medium">
        {/* Use button or div instead of NavLink to prevent default navigation */}
        <button onClick={() => triggerPlaneAnimation('/about')}>About</button>
        <button onClick={() => triggerPlaneAnimation('/projects')}>Projects</button>
        <button onClick={() => triggerPlaneAnimation('/contact')}>Contact</button>
      </nav>
    </header>
  );
};

export default NavBar;
