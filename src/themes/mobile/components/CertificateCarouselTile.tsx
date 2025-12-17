import { useEffect, useRef, useState } from "react";
import { certificates } from "./constants";

const AUTO_FLIP_MIN = 8000;
const AUTO_FLIP_MAX = 12000;

export default function CertificateCarouselTile() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const timerRef = useRef<any>(null);

  const cert = certificates[index];

  const scheduleFlip = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setFlipped((f) => !f);
      scheduleFlip();
    }, AUTO_FLIP_MIN + Math.random() * (AUTO_FLIP_MAX - AUTO_FLIP_MIN));
  };

  useEffect(() => {
    scheduleFlip();
    return () => clearTimeout(timerRef.current);
  }, []);

  // reset flip when certificate changes
  useEffect(() => {
    setFlipped(false);
  }, [index]);

  const next = () => setIndex((i) => (i + 1) % certificates.length);
  const prev = () =>
    setIndex((i) => (i - 1 + certificates.length) % certificates.length);

  return (
    <div className="col-span-4 row-span-2 grid grid-cols-[0.5fr_3fr_0.5fr] gap-2">
      {/* LEFT ARROW */}
      <Arrow direction="left" onClick={prev} />

      {/* CENTER FLIP TILE */}
      <div
        className="relative perspective"
        onClick={() => window.open(cert.link, "_blank")}
      >
        <div className={`certificate-tile ${flipped ? "flipped" : ""}`}>
          {/* FRONT */}
          <div className="cert-face front">
            <p className="text-xs text-gray-300">{cert.date}</p>
            <h3 className="text-lg font-semibold mt-2 leading-snug">
              {cert.title}
            </h3>
            <span className="mt-auto text-sm text-crimson">
              FreeCodeCamp Certificate
            </span>
          </div>

          {/* BACK */}
          <div
            className="cert-face back"
            style={{
              backgroundImage: `url(${cert.image})`,
            }}
          />
        </div>
      </div>

      {/* RIGHT ARROW */}
      <Arrow direction="right" onClick={next} />
    </div>
  );
}

function Arrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1F1F1F] flex items-center justify-center text-2xl text-crimson active:scale-95 transition select-none"
    >
      {direction === "left" ? "‹" : "›"}
    </div>
  );
}
