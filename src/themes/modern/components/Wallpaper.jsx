import { useEffect, useState, useRef } from "react";
import { wallpapers } from "../constants";

export default function Wallpaper() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(null);
  const [fade, setFade] = useState(false);

  const currentRef = useRef(0);
  const currentIndexRef = useRef(null);
  const mounted = useRef(false);

  const getRandomIndex = (exclude) => {
    let i = Math.floor(Math.random() * wallpapers.length);
    if (i === exclude) i = (i + 1) % wallpapers.length;
    return i;
  };

  const preload = (src) => {
    const img = new Image();
    img.src = src;
  };

  const fadeTo = (url, index = null) => {
    preload(url);
    setNext(url);

    requestAnimationFrame(() => setFade(true));

    setTimeout(() => {
      setCurrent(url);
      currentRef.current = url;
      currentIndexRef.current = index;
      setFade(false);
      setNext(null);
    }, 850);
  };

  const changeWallpaper = () => {
    const exclude = currentIndexRef.current ?? -1;
    const newIndex = getRandomIndex(exclude);
    const newUrl = wallpapers[newIndex];
    fadeTo(newUrl, newIndex);
  };

  const setAsWallpaper = (url) => {
    fadeTo(url, null);
  };

  useEffect(() => {
    const firstIndex = getRandomIndex(-1);
    const firstUrl = wallpapers[firstIndex];
    setCurrent(firstUrl);
    currentRef.current = firstUrl;
    currentIndexRef.current = firstIndex;
    mounted.current = true;

    window.setAsWallpaper = setAsWallpaper;
  }, []);

  const handleRightClick = (e) => {
    e.preventDefault();
    changeWallpaper();
  };

  return (
    <div className="fixed inset-0" onContextMenu={handleRightClick}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${current})` }}
      />

      {next !== null && mounted.current && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-850 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${next})` }}
        />
      )}
    </div>
  );
}
