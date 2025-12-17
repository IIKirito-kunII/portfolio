import { useEffect, useRef, useState } from "react";
import { SKILL_FACES } from "./constants";

const SkillsCube = () => {
  const [rotation, setRotation] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const rotate = () => {
    setRotation((r) => r + 90);
    scheduleNext();
  };

  const scheduleNext = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(
      rotate,
      10000 + Math.random() * 10000
    );
  };

  useEffect(() => {
    scheduleNext();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-full perspective cursor-pointer" onClick={rotate}>
      <div
        className="skill-cube"
        style={{ transform: `rotateY(-${rotation}deg)` }}
      >
        {SKILL_FACES.map((s, i) => (
          <div
            key={i}
            className={`skill-face face-${i}`}
            style={{ borderLeft: `4px solid ${s.color}` }}
          >
            <h3 className="text-sm font-semibold" style={{ color: s.color }}>
              {s.title}
            </h3>
            <ul className="text-sm mt-2 text-gray-200 space-y-1">
              {s.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCube;
