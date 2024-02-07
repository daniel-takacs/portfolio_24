/* // NavigationContext.js
import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [animatePlane, setAnimatePlane] = useState(false);
  const [destination, setDestination] = useState("");

  const triggerPlaneAnimation = (path) => {
    setAnimatePlane(true);
    setDestination(path);
  };

  return (
    <NavigationContext.Provider value={{ animatePlane, triggerPlaneAnimation, destination, setAnimatePlane }}>
      {children}
    </NavigationContext.Provider>
  );
};
 */









// NavigationContext.jsx
/* import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [animatePlane, setAnimatePlane] = useState(false);
  const [destination, setDestination] = useState("");
  const location = useLocation(); // Track the current location

  const triggerPlaneAnimation = (path) => {
    // Only trigger the animation if currently on the Home page
    if (location.pathname === '/') {
      setAnimatePlane(true);
      setDestination(path);
    } else {
      // If not on the Home page, navigate directly without animation
      setDestination(path);
      setAnimatePlane(false); // Ensure animation state is reset
    }
  };

  // Reset animation state and clear destination once animation is complete or if directly navigating
  useEffect(() => {
    if (!animatePlane && destination) {
      setDestination(""); // Clear destination after navigation
    }
  }, [animatePlane, destination]);

  return (
    <NavigationContext.Provider value={{ animatePlane, triggerPlaneAnimation, destination, setAnimatePlane }}>
      {children}
    </NavigationContext.Provider>
  );
};
 */

// NavigationContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
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
