import { useEffect } from "react";

import AppClassic from "./themes/classic/AppClassic";
import AppModern from "./themes/modern/AppModern";

function Themes({ THEME }: { THEME: "classic" | "modern" }) {
  useEffect(() => {
    const id = "theme-style";
    document.getElementById(id)?.remove();

    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      THEME === "modern" ? "/themes/AppModern.css" : "/themes/AppClassic.css";

    document.head.appendChild(link);
  }, [THEME]);
  return THEME === "modern" ? <AppModern /> : <AppClassic />;
}

export default Themes;
