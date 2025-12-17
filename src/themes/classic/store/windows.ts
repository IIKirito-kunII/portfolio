import { useModal } from "@react95/core";
import { useState } from "react";

export const useWindowManager = () => {
  const modal = useModal();
  const [activeWindows, setActiveWindows] = useState<Record<string, any>>({});

  const openWindow = (id: string, settings: any) => {
    modal.add(settings);
    modal.restore(id);
    modal.focus(id);

    setActiveWindows((prev) => ({
      ...prev,
      [id]: settings,
    }));
  };

  const closeWindow = (id: string) => {
    modal.remove(id);
    modal.minimize(id);
    modal.focus("no-id");

    setActiveWindows((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  return {
    ...modal,
    openWindow,
    closeWindow,
    activeWindows, // <-- we expose this
  };
};
