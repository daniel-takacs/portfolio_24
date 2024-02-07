import { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Plane from "../models/Plane";
import { Sky } from "@react-three/drei";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-40 left-0 right-0 z-10 flex items-center justify-center">
        </div>
        <Canvas camera={{ fov: 25, near: 0.1, far: 1000 }}>
        <Sky
             distance={450000}
             sunPosition={[5, 1, 8]}
             inclination={0}
             azimuth={0.25}
         />
            <Suspense fallback={null}>
                <directionalLight position={[10, 10, 10]}/>
                <ambientLight intensity={1} />
                <Plane />
            </Suspense>
        </Canvas>
    </section>
  );
};

export default Home;
