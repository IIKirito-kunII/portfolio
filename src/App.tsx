import { useRef, useState } from "react";
import gsap from "gsap";
import { THEME_VARIANTS } from "./index";
import "./App.css";
import Themes from "./Themes";

function App() {
  const [selectedTheme, setSelectedTheme] = useState<
    "classic" | "modern" | null
  >(null);
  const variant =
    THEME_VARIANTS[Math.floor(Math.random() * THEME_VARIANTS.length)];

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<"classic" | "modern" | null>(null);

  function enterFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }

  function handleSelect(side: "classic" | "modern") {
    if (active) return;

    setActive(side);
    enterFullscreen();

    const isClassic = side === "classic";

    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 0.9 },
      onComplete: () => {
        setSelectedTheme(side); // 👈 render Themes here
      },
    });

    tl.to(
      isClassic ? rightRef.current : leftRef.current,
      {
        opacity: 0,
      },
      0
    );

    tl.to(
      isClassic ? leftRef.current : rightRef.current,
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },
      0
    );
  }

  if (selectedTheme) {
    return <Themes THEME={selectedTheme} />;
  }

  return (
    <div className="app-root">
      {/* HEADLINE */}
      <div className="app-headline">
        <h1 className="headline-text">{variant.headline}</h1>
      </div>

      {/* SPLIT SCREEN */}
      <div className="box app-split">
        {/* LEFT */}
        <div
          ref={leftRef}
          className="left-box app-panel app-panel-left"
          onClick={() => handleSelect("classic")}
        >
          <div className="panel-content panel-content-left">
            {variant.options
              .filter((opt) => opt.key === "classic")
              .map((opt) => (
                <div key={opt.key}>
                  <h2 className="panel-title">{opt.title}</h2>
                  <p className="panel-description">{opt.description}</p>
                </div>
              ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          ref={rightRef}
          className="right-box app-panel app-panel-right"
          onClick={() => handleSelect("modern")}
        >
          <div className="panel-content panel-content-right">
            {variant.options
              .filter((opt) => opt.key === "modern")
              .map((opt) => (
                <div key={opt.key}>
                  <h2 className="panel-title">{opt.title}</h2>
                  <p className="panel-description">{opt.description}</p>
                </div>
              ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="app-footer">
          <footer className="footer-text">{variant.footer}</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
