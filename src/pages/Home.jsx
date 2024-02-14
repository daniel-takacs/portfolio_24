import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Plane from "../models/Plane";
import { Cloud, Sky } from "@react-three/drei";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [stage, setStage] = useState(1);

  return (
    <section className="w-full h-screen relative full-page-container">
      <div className="absolute top-32 sm:top-48 left-0 right-0 z-10 flex items-center justify-center no-select">
        <HomeInfo />
      </div>
      <Canvas
        camera={{ fov: 25, near: 0.1, far: 2000 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={<Loader />}>
          <Sky
            distance={450000}
            sunPosition={[5, 0.7, 8]}
            inclination={0}
            azimuth={0.25}
          />
          <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} />
          <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} />
          <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
          <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} />
          <directionalLight position={[10, 10, 10]} />
          <ambientLight intensity={1} />
          <Plane setStage={setStage} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
