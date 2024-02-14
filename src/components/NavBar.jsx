import { useNavigation } from '../components/NavigationContext';

const NavBar = () => {
  const { triggerPlaneAnimation } = useNavigation();

  return (
    <header className="header">
        <button className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md" onClick={() => triggerPlaneAnimation('/')}>DT</button>
      <nav className="flex text-lg gap-7 font-medium">
        <button onClick={() => triggerPlaneAnimation('/about')}>About</button>
        <button onClick={() => triggerPlaneAnimation('/projects')}>Projects</button>
        <button onClick={() => triggerPlaneAnimation('/contact')}>Contact</button>
      </nav>
    </header>
  );
};

export default NavBar;
