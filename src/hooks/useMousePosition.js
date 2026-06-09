import { useState, useEffect } from "react";

export function useMousePosition(ref) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [ref]);

  return position;
}
