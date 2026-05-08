import { useEffect, useRef, useState } from "react";

const SRC = "/MW_intro_.mp3";

export function AudioStinger() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.55;

    const tryPlay = () => audio.play().then(() => setPlaying(true)).catch(() => {});
    tryPlay();

    const onGesture = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("scroll", onGesture);
      window.removeEventListener("touchstart", onGesture);
    };
    window.addEventListener("pointerdown", onGesture, { passive: true });
    window.addEventListener("keydown", onGesture);
    window.addEventListener("scroll", onGesture, { passive: true });
    window.addEventListener("touchstart", onGesture, { passive: true });

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("scroll", onGesture);
      window.removeEventListener("touchstart", onGesture);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  };

  return (
    <>
      <audio ref={audioRef} src={SRC} loop autoPlay playsInline preload="auto" />
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 border-2 border-chrome/40 bg-midnight-deep/90 backdrop-blur px-4 py-3">
        <button
          onClick={toggle}
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
    </>
  );
}
