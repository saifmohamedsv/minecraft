import React from "react";
import { usePlane } from "@react-three/cannon";
import { groundTexture } from "./textures";
import { useStore } from "../hooks/useStore";

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));

  groundTexture.repeat.set(100, 100);

  const [addCube] = useStore((state) => [state.addCube]);

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val));
        addCube(x, y + 0.5, z);
      }}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};

export default Ground;
