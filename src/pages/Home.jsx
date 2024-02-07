import { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Plane from "../models/Plane";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-40 left-0 right-0 z-10 flex items-center justify-center">
        </div>
        <Canvas>
            <Suspense fallback={null}>
                <directionalLight position={[1, 1, 1]}/>
                <ambientLight intensity={0} />
                <Plane />
            </Suspense>
        </Canvas>
    </section>
  );
};

export default Home;
