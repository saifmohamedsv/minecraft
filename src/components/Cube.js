import React from "react";
import { useBox } from "@react-three/cannon";
import * as textures from "./textures";
import { useStore } from "./useStore";

const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({ type: "Static", position }));

  const activeTexture = textures[texture + "Texture"];
  const [addCube, removeCube] = useStore((state) => [state.removeCube]);

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        map={activeTexture}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
