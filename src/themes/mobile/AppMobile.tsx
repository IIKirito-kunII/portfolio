import { useRef, useState } from "react";
import { Home, Dashboard } from "./components";
import "./AppMobile.css";

export default function AppMobile() {
  const startY = useRef(0);
  const [offsetY, setOffsetY] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const onPointerDown = (e: React.PointerEvent) => {
    startY.current = e.clientY;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (unlocked) return;
    const delta = e.clientY - startY.current;
    if (delta < 0) {
      setOffsetY(Math.max(delta, -window.innerHeight));
    }
  };

  const onPointerUp = () => {
    if (offsetY < -window.innerHeight * 0.25) {
      setUnlocked(true);
      setOffsetY(-window.innerHeight);
    } else {
      setOffsetY(0);
    }
  };

  return (
    <div
      className="relative w-screen h-dvh bg-black touch-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* Dashboard */}
      <div className="w-screen h-full">
        <Dashboard />
      </div>

      {/* Home (on top) */}
      <div
        className="absolute inset-0 z-10 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <Home />
      </div>
    </div>
  );
}
