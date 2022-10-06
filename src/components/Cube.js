import React, { useState } from "react";
import { useBox } from "@react-three/cannon";
import * as textures from "./textures";
import { useStore } from "../hooks/useStore";

const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({ type: "Static", position }));
  const [isHovered, setIsHovered] = useState(false);
  const activeTexture = textures[texture + "Texture"];
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  return (
    <mesh
      onPointerEnter={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
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
          addCube(x, y, z - 1);
          return;
        }
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        map={activeTexture}
        transparent={true}
        opacity={texture === "glass" ? 0.9 : 1}
        color={isHovered ? "gray" : "white"}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
