import { create } from "zustand";

interface BootStore {
  isBooting: boolean; // Tracks if the slow, sequential load is active
  startBoot: () => void;
  stopBoot: () => void;
}

export const useBoot = create<BootStore>((set) => ({
  isBooting: false,
  startBoot: () => set({ isBooting: true }),
  stopBoot: () => set({ isBooting: false }),
}));
