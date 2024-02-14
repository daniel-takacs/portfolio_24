import { Html } from "@react-three/drei";
import { airplane } from '../assets/icons/index'

const Loader = () => {
  return (
    <Html center> {/* Use center prop if you want to center it in the 3D canvas */}
      <div className="flex justify-center items-center w-full h-screen"> {/* Adjusted to cover the full viewport */}
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full slow-spin">
          <span><img src={airplane} alt="" /></span>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
