import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./components/Ground";
import Player from "./components/Player";
import FBV from "./components/FBV";
import { Cubes } from "./components/Cubes";
import TextureSelector from "./components/TextureSelector";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <FBV></FBV>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
