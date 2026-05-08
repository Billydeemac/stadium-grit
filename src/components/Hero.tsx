import { useEffect, useMemo, useState } from "react";
import heroImg from "@/assets/hero-stadium.jpg";

// Tour dates (kept in sync with TheLineup). ISO with -04:00 (ET).
const TOUR_DATES: { iso: string; city: string; venue: string }[] = [
  { iso: "2026-04-17T20:00:00-04:00", city: "Knoxville, TN", venue: "Neyland Stadium" },
  { iso: "2026-04-24T20:00:00-04:00", city: "East Rutherford, NJ", venue: "MetLife Stadium" },
  { iso: "2026-05-02T20:00:00-07:00", city: "Inglewood, CA", venue: "SoFi Stadium" },
  { iso: "2026-05-09T20:00:00-05:00", city: "Nashville, TN", venue: "Nissan Stadium" },
  { iso: "2026-05-16T20:00:00-05:00", city: "Arlington, TX", venue: "AT&T Stadium" },
  { iso: "2026-05-23T20:00:00-04:00", city: "Atlanta, GA", venue: "Mercedes-Benz Stadium" },
  { iso: "2026-06-06T20:00:00-05:00", city: "Chicago, IL", venue: "Soldier Field" },
  { iso: "2026-06-13T20:00:00-06:00", city: "Denver, CO", venue: "Empower Field" },
  { iso: "2026-06-27T20:00:00-07:00", city: "Seattle, WA", venue: "Lumen Field" },
  { iso: "2026-07-11T20:00:00-04:00", city: "Foxborough, MA", venue: "Gillette Stadium" },
];

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

export function Hero({ onClaim }: { onClaim: () => void }) {
  const nextShow = useMemo(() => {
    const now = Date.now();
    return (
      TOUR_DATES.find((s) => new Date(s.iso).getTime() > now) ??
      TOUR_DATES[TOUR_DATES.length - 1]
    );
  }, []);
  const target = new Date(nextShow.iso);
  const { d, h, m, s } = useCountdown(target);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden distress scanlines stadium-glow">
      <div className="absolute inset-0 animate-shutter">
        <img
          src={heroImg}
          alt="Morgan Wallen walking toward stadium tunnel"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.05)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/30 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/70 via-transparent to-midnight/70" />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <div className="size-8 border-2 border-caution flex items-center justify-center">
            <span className="text-caution text-xs font-black">MW</span>
          </div>
          <span className="label text-dust">MORGAN · WALLEN · MMXXVI</span>
        </div>
        <nav className="hidden md:flex gap-8 label text-dust/80">
          <a href="#lineup" className="hover:text-caution">Lineup</a>
          <a href="#vault" className="hover:text-caution">The Vault</a>
          <a href="#stats" className="hover:text-caution">Stats</a>
          <a href="#locker" className="hover:text-caution">Locker Room</a>
        </nav>
        <div className="hidden md:flex items-center gap-2 label text-caution animate-flicker">
          <span className="size-2 bg-caution"></span>
          ON AIR
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col justify-end min-h-[calc(100vh-100px)] px-6 md:px-12 pb-16">
        <div className="label text-caution mb-6 flex items-center gap-3">
          <span className="h-px w-12 bg-caution" />
          EST. 2026 · TENNESSEE WHISKEY TOUR
        </div>

        <h1 className="display text-dust text-[18vw] md:text-[14vw] leading-[0.78]">
          <span className="block">STILL</span>
          <span className="block outlined-text">THE</span>
          <span className="block">PROBLEM</span>
        </h1>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <div className="label text-dust/60 mb-2">Next Show</div>
            <div className="text-dust text-xl md:text-2xl font-bold uppercase">
              {target.toLocaleDateString("en-US", { day: "2-digit", month: "long", year: "numeric" }).replace(/,/g, " ·").replace(/\s+/g, " · ")}
            </div>
            <div className="text-dust/70 text-sm mt-1">
              {nextShow.venue} · {nextShow.city}
            </div>
            <button
              onClick={onClaim}
              className="mt-6 group relative inline-flex items-center gap-4 bg-caution px-8 py-5 text-midnight font-black tracking-[0.2em] text-sm uppercase border-2 border-caution hover:bg-midnight hover:text-caution transition-colors"
            >
              <span className="size-2 bg-midnight group-hover:bg-caution" />
              Claim Your Seat
              <svg width="20" height="12" viewBox="0 0 20 12"><path d="M0 6h18M14 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
            </button>
          </div>

          <div className="border-2 border-chrome/40 bg-midnight-deep/70 backdrop-blur-sm p-6">
            <div className="label text-caution mb-4">First Pitch · T-Minus</div>
            <div className="grid grid-cols-4 gap-2 font-display text-dust">
              {[
                ["DAYS", d],
                ["HRS", h],
                ["MIN", m],
                ["SEC", s],
              ].map(([l, v]) => (
                <div key={l as string} className="border border-chrome/30 p-3 text-center">
                  <div className="text-4xl md:text-5xl font-bold tabular-nums">{String(v).padStart(2, "0")}</div>
                  <div className="label text-dust/60 mt-1 text-[10px]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-y-2 border-chrome/40 bg-midnight-deep py-3 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center label text-dust gap-8 pr-8">
              {["35 STADIUMS", "✦", "1.2 MILLION TICKETS", "✦", "ONE WHISKEY-SOAKED YEAR", "✦", "BROADCASTED LIVE FROM TN", "✦", "FIELD ACCESS NOW OPEN", "✦"].map((t, j) => (
                <span key={j} className={t === "✦" ? "text-caution" : ""}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
