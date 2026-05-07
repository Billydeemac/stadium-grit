import { useState } from "react";

export function AudioStinger() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 border-2 border-chrome/40 bg-midnight-deep/90 backdrop-blur px-4 py-3">
      <button
        onClick={() => setPlaying(p => !p)}
        className="size-10 bg-caution text-midnight flex items-center justify-center hover:bg-dust"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14"><rect x="2" y="1" width="3" height="12" fill="currentColor"/><rect x="9" y="1" width="3" height="12" fill="currentColor"/></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 1L13 7L2 13Z" fill="currentColor"/></svg>
        )}
      </button>
      <div>
        <div className="label text-caution text-[10px]">NOW SPINNING</div>
        <div className="text-dust text-xs font-bold">LAST NIGHT — LIVE FROM TN</div>
      </div>
      <div className="flex items-end gap-[2px] h-6 w-12 ml-2">
        {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.5, 0.7].map((h, i) => (
          <div
            key={i}
            className={`flex-1 bg-caution origin-bottom ${playing ? "animate-vu" : ""}`}
            style={{ height: `${h * 100}%`, animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}
