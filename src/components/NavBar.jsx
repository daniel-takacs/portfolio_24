import { useNavigation } from '../components/NavigationContext';
import { logo } from "../assets/images/index";

const NavBar = () => {
  const { triggerPlaneAnimation } = useNavigation();

  return (
    <header className="header">
        <button className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md" onClick={() => triggerPlaneAnimation('/')}><img src={logo} alt="" /></button>
      <nav className="flex text-lg gap-7 font-medium">
        <button onClick={() => triggerPlaneAnimation('/about')}>About</button>
        <button onClick={() => triggerPlaneAnimation('/projects')}>Projects</button>
        <button onClick={() => triggerPlaneAnimation('/contact')}>Contact</button>
      </nav>
    </header>
  );
};

export default NavBar;
