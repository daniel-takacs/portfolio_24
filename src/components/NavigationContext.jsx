import { createContext, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [animatePlane, setAnimatePlane] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const triggerPlaneAnimation = (path) => {
    // Check if the current path is home and the destination is not home
    if (location.pathname === '/' && path !== '/') {
      setAnimatePlane(true);
      // Wait for the animation to complete before navigating
      setTimeout(() => {
        navigate(path);
        setAnimatePlane(false); // Reset state
      }, 1000); // Adjust timeout to match your animation duration
    } else {
      // Navigate immediately if not on the Home page or navigating to Home
      navigate(path);
    }
  };

  return (
    <NavigationContext.Provider value={{ animatePlane, triggerPlaneAnimation }}>
      {children}
    </NavigationContext.Provider>
  );
};
