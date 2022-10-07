import { nanoid } from "nanoid";
import create from "zustand";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  texture: "dirt",

  cubes: getLocalStorage("cubes") || [],

  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        { key: nanoid(), pos: [x, y, z], texture: prev.texture },
      ],
    }));
  },

  removeCube: (x, y, z) => {
    set((prev) => ({
      cubes: prev.cubes.filter((c) => {
        const [X, Y, Z] = c.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },

  setTexture: (texture) => {
    set((prev) => ({
      texture,
    }));
  },

  saveWorld: () => {
    set((prev) => {
      setLocalStorage("cubes", prev.cubes);
    });
  },

  resetWorld: () => {
    set((prev) => ({
      cubes: [],
    }));
  },
}));
