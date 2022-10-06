import React, { useState } from "react";
import { useStore } from "../hooks/useStore";

const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture] = useStore((state) => [state.activeTexture]);
  return <div>TextureSelector</div>;
};

export default TextureSelector;
