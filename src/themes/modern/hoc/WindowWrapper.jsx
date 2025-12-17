import { useGSAP } from "@gsap/react";
import useWindowStore from "../store/window";
import { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex, isMax } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (!isOpen || isMax) {
        Draggable.get(el)?.kill();
        return;
      }

      const handle = el.querySelector(".window-drag-handle");
      if (!handle) return;

      const [instance] = Draggable.create(el, {
        trigger: handle,
        type: "x,y",
        ignore: "input, button, .sliders",
        inertia: false,
      });

      return () => instance.kill();
    }, [isOpen, isMax]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? "block" : "none";
      el.classList.toggle("window-maximized", isMax);
    }, [isOpen, isMax]);

    const bringToFront = () => focusWindow(windowKey);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
        onPointerDown={bringToFront}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
