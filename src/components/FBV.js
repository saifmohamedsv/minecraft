import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";

const FBV = () => {
  const { camera, gl } = useThree();
  return (
    <PointerLockControls args={[camera, gl.domElement]}>
      FBV
    </PointerLockControls>
  );
};

export default FBV;
