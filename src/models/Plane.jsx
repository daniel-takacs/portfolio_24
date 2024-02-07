import { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from '../assets/3d/plane.glb';

const Plane = ({ ...props }) => {

    const group = useRef();
    const { nodes, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, group);



    return (
        <group ref={group} {...props}>
          <primitive object={nodes.Sketchfab_model} />
        </group>
      );
}

export default Plane