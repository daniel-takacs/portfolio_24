import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";
import { useNavigation } from "../components/NavigationContext"; // Import the navigation context hook
import { a } from "@react-spring/three";

const Plane = ({ setStage, ...props }) => {
  const group = useRef();
  const { nodes, animations } = useGLTF(planeScene);
  const { animatePlane, setAnimatePlane } = useNavigation(); // Use the context
  const { actions } = useAnimations(animations, group);
  const { camera, gl } = useThree();
  const [isInteracting, setIsInteracting] = useState(false);
  const [rotation, setRotation] = useState([0, 0.5, 0]);
  const lastPosition = useRef({ x: 0, y: 0 });
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  useEffect(() => {
    // Animation trigger effect
    if (animatePlane) {
      // Example animation logic: move plane to the right
      let targetPosition = 5; // Target position to move the plane off-screen
      let animationDuration = 1.5; // Duration in seconds
      let startTime = Date.now();

      const animate = () => {
        let currentTime = Date.now();
        let timeElapsed = (currentTime - startTime) / 1000; // Convert to seconds
        if (timeElapsed < animationDuration) {
          let newPosition = (timeElapsed / animationDuration) * targetPosition;
          if (group.current) {
            setRotation([0, 0.5, 0]);
            group.current.position.x = newPosition;
          }
          requestAnimationFrame(animate);
        } else {
          if (group.current) {
            group.current.position.x = targetPosition; // Ensure final position is set
          }
          setAnimatePlane(false); // Reset animation state
        }
      };

      animate();
    }
  }, [animatePlane, setAnimatePlane]);

  useEffect(() => {
    camera.position.set(0, 0.4, 5);
    gl.domElement.style.touchAction = "none"; // Disable touch action
  }, [camera, gl.domElement.style]);

  const handleInteractMove = (clientX, clientY) => {
    if (isInteracting) {
      const deltaX = clientX - lastPosition.current.x;
      const deltaY = clientY - lastPosition.current.y;
      setRotation([
        rotation[0] + deltaY * 0.005,
        rotation[1] + deltaX * 0.005,
        0,
      ]);
    }
    lastPosition.current = { x: clientX, y: clientY };
  };

  // Start interaction
  const handleStart = (clientX, clientY) => {
    setIsInteracting(true);
    lastPosition.current = { x: clientX, y: clientY };
  };

  // Stop interaction
  const handleEnd = () => {
    setIsInteracting(false);
  };

  // Mouse Events
  const handleMouseDown = (event) => handleStart(event.clientX, event.clientY);
  const handleMouseMove = (event) =>
    handleInteractMove(event.clientX, event.clientY);
  const handleMouseUp = () => handleEnd();

  // Touch Events
  const handleTouchStart = (event) =>
    handleStart(event.touches[0].clientX, event.touches[0].clientY);
  const handleTouchMove = (event) =>
    handleInteractMove(event.touches[0].clientX, event.touches[0].clientY);
  const handleTouchEnd = () => handleEnd();

  // Apply rotation
  useFrame(() => {
    if (!isInteracting) {
      rotationSpeed.current *= dampingFactor;
      group.current.rotation.y += rotationSpeed.current;
    } else {
      /*         const rotation = group.current.rotation.y;
        const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    
        // Set the current stage based on the plane's orientation
        if (normalizedRotation >= 5.45 && normalizedRotation <= 5.85) {
          setStage(4);
        } else if (normalizedRotation >= 0.85 && normalizedRotation <= 1.7) {
          setStage(3);
        } else if (normalizedRotation >= 2 && normalizedRotation <= 3) {
          setStage(2);
        } else if (normalizedRotation >= 3.25 && normalizedRotation <= 4.75) {
          setStage(1);
        } else {
          setStage(null);
        } */
    }

    if (group.current) {
      group.current.rotation.x = rotation[0];
      group.current.rotation.y = rotation[1];
    }
  });

  // Listen to interaction events
  useEffect(() => {
    Object.values(actions).forEach((action) => action.play());
    const element = gl.domElement;
    element.addEventListener("mousedown", handleMouseDown);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseup", handleMouseUp);
    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchmove", handleTouchMove);
    element.addEventListener("touchend", handleTouchEnd);

    return () => {
      element.removeEventListener("mousedown", handleMouseDown);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseup", handleMouseUp);
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    actions,
    isInteracting,
    rotation,
    gl.domElement,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  ]); // Re-bind if dependencies change

  return (
    <a.group ref={group} {...props}>
      <primitive object={nodes.Sketchfab_model} />
    </a.group>
  );
};

export default Plane;
