import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations, Gallerys } from "../constants";

const DEFAULT_LOCATION = locations.work;
const DEFAULT_GALLERY = Gallerys.library;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    activeGallery: DEFAULT_GALLERY,

    setActiveLocation: (location = null) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),

    setActiveGallery: (Gallery = null) =>
      set((state) => {
        state.activeGallery = Gallery;
      }),

    resetActiveGallery: () =>
      set((state) => {
        state.activeGallery = DEFAULT_GALLERY;
      }),
  }))
);

export default useLocationStore;
