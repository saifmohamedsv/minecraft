import React from "react";
import { useBox } from "@react-three/cannon";
import * as textures from "./textures";
import { useStore } from "../hooks/useStore";

const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({ type: "Static", position }));

  const activeTexture = textures[texture + "Texture"];
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        console.log("face:", clickedFace);
        const { x, y, z } = ref.current.position;

        if (e.altKey) {
          removeCube(x, y, z);
          return;
        }
        if (clickedFace === 0) {
          addCube(x + 1, y, z);
          return;
        } else if (clickedFace === 1) {
          addCube(x - 1, y, z);
          return;
        } else if (clickedFace === 2) {
          addCube(x, y + 1, z);
          return;
        } else if (clickedFace === 3) {
          addCube(x, y - 1, z);
          return;
        } else if (clickedFace === 4) {
          addCube(x, y, z + 1);
          return;
        } else if (clickedFace === 5) {
          addCube(x - 1, y, z - 1);
          return;
        }
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        map={activeTexture}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
