import { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, seen] as const;
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [ref, seen] = useInView<HTMLDivElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return <div ref={ref} className="display text-caution text-7xl md:text-9xl tabular-nums">{n}{suffix}</div>;
}

const STATS = [
  { num: 27, suffix: "B+", label: "Streams Globally", note: "Across all platforms" },
  { num: 19, suffix: "", label: "Weeks At #1", note: "Billboard 200 record holder" },
  { num: 11, suffix: "", label: "No. 1 Singles", note: "Country airplay" },
  { num: 35, suffix: "M+", label: "Albums Sold", note: "Certified RIAA" },
];

export function CareerStats() {
  return (
    <section id="stats" className="relative px-6 md:px-12 py-24 distress border-y-2 border-chrome/30">
      <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="label text-caution mb-3">SECTION 04 — THE SCORECARD</div>
          <h2 className="display text-dust text-6xl md:text-8xl">Career Stats</h2>
        </div>
        <div className="label text-dust/50">Updated · Q1 · 2026</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={i} className="border border-chrome/20 p-8 hover:bg-midnight-deep transition-colors">
            <div className="label text-dust/50 mb-4">{String(i + 1).padStart(2, "0")} / 04</div>
            <Counter to={s.num} suffix={s.suffix} />
            <div className="display text-dust text-2xl mt-4">{s.label}</div>
            <div className="text-dust/50 text-xs mt-2 font-mono">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
