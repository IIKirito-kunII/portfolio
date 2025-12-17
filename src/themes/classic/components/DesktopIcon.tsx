import { useEffect, useRef, useState } from "react";
import "./desktopIcon.css";

export default function DesktopIcon({
  label,
  icon,
  onOpen,
}: {
  label: string;
  icon: React.ReactNode;
  onOpen: () => void;
}) {
  const [selected, setSelected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected(true);
  };

  const handleDoubleClick = () => {
    setSelected(false);
    onOpen();
  };

  useEffect(() => {
    const unselectAll = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setSelected(false);
      }
    };

    document.addEventListener("mousedown", unselectAll);
    return () => document.removeEventListener("mousedown", unselectAll);
  }, []);

  return (
    <div
      ref={ref}
      className={`desktop-icon ${selected ? "selected" : ""}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      tabIndex={0}
    >
      <div className="icon-image">{icon}</div>
      <span className="icon-label">{label}</span>
    </div>
  );
}
