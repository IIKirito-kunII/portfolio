import { useEffect, useRef } from "react";

type FlipTileProps = {
  front: React.ReactNode;
  back: React.ReactNode;
};

export const FlipTile = ({ front, back }: FlipTileProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let t: number;
    const flip = () => {
      el.classList.toggle("flipped");
      t = window.setTimeout(flip, (10 + Math.random() * 10) * 1000);
    };

    t = window.setTimeout(flip, (10 + Math.random() * 10) * 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="perspective w-full h-full">
      <div ref={ref} className="flip-tile w-full h-full">
        <div className="flip-face flip-front w-full h-full">{front}</div>
        <div className="flip-face flip-back w-full h-full">{back}</div>
      </div>
    </div>
  );
};
