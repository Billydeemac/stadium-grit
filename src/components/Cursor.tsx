import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const d = () => setDown(true);
    const u = () => setDown(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", d);
    window.addEventListener("mouseup", u);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", d);
      window.removeEventListener("mouseup", u);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{
        transform: `translate(${pos.x - 16}px, ${pos.y - 16}px) scale(${down ? 0.7 : 1})`,
        transition: "transform 60ms ease-out",
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="oklch(0.78 0.17 75)" strokeWidth="1" />
        <line x1="16" y1="0" x2="16" y2="10" stroke="oklch(0.78 0.17 75)" strokeWidth="1.5" />
        <line x1="16" y1="22" x2="16" y2="32" stroke="oklch(0.78 0.17 75)" strokeWidth="1.5" />
        <line x1="0" y1="16" x2="10" y2="16" stroke="oklch(0.78 0.17 75)" strokeWidth="1.5" />
        <line x1="22" y1="16" x2="32" y2="16" stroke="oklch(0.78 0.17 75)" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="oklch(0.78 0.17 75)" />
      </svg>
    </div>
  );
}
