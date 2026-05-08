import { useState } from "react";

type Status = "ON SALE" | "FINAL TICKETS" | "SOLD OUT";
type Show = {
  date: string; day: string; city: string; state: string; venue: string;
  status: Status; vip: boolean;
};

const SHOWS: Show[] = [
  { date: "APR 17", day: "FRI", city: "KNOXVILLE", state: "TN", venue: "Neyland Stadium", status: "FINAL TICKETS", vip: true },
  { date: "APR 24", day: "FRI", city: "EAST RUTHERFORD", state: "NJ", venue: "MetLife Stadium", status: "ON SALE", vip: true },
  { date: "MAY 02", day: "SAT", city: "INGLEWOOD", state: "CA", venue: "SoFi Stadium", status: "SOLD OUT", vip: false },
  { date: "MAY 09", day: "SAT", city: "NASHVILLE", state: "TN", venue: "Nissan Stadium", status: "SOLD OUT", vip: false },
  { date: "MAY 16", day: "SAT", city: "ARLINGTON", state: "TX", venue: "AT&T Stadium", status: "ON SALE", vip: true },
  { date: "MAY 23", day: "SAT", city: "ATLANTA", state: "GA", venue: "Mercedes-Benz Stadium", status: "FINAL TICKETS", vip: true },
  { date: "JUN 06", day: "SAT", city: "CHICAGO", state: "IL", venue: "Soldier Field", status: "ON SALE", vip: true },
  { date: "JUN 13", day: "SAT", city: "DENVER", state: "CO", venue: "Empower Field", status: "ON SALE", vip: true },
  { date: "JUN 27", day: "SAT", city: "SEATTLE", state: "WA", venue: "Lumen Field", status: "ON SALE", vip: false },
  { date: "JUL 11", day: "SAT", city: "FOXBOROUGH", state: "MA", venue: "Gillette Stadium", status: "ON SALE", vip: true },
];

const STATUS_STYLES: Record<Status, string> = {
  "ON SALE": "bg-denim text-dust border-denim",
  "FINAL TICKETS": "bg-caution text-midnight border-caution animate-flicker",
  "SOLD OUT": "bg-midnight-deep text-chrome/60 border-chrome/30 line-through",
};

export function TheLineup({ onPick }: { onPick: (city: string) => void }) {
  const [vipOnly, setVipOnly] = useState(false);
  const filtered = vipOnly ? SHOWS.filter(s => s.vip) : SHOWS;

  return (
    <section id="lineup" className="relative px-6 md:px-12 py-24 distress">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
        <div>
          <div className="label text-caution mb-3">SECTION 03 — TOUR REGISTRY</div>
          <h2 className="display text-dust text-6xl md:text-8xl">The Lineup</h2>
          <p className="mt-3 text-dust/60 max-w-md">A coast-to-coast manifest of stadium nights. Read it like a scoreboard.</p>
        </div>
        <button
          onClick={() => setVipOnly(v => !v)}
          className={`label border-2 px-5 py-3 transition-colors ${vipOnly ? "bg-caution text-midnight border-caution" : "border-chrome/40 text-dust hover:border-caution"}`}
        >
          <span className="mr-2">{vipOnly ? "▣" : "□"}</span>
          Field Access Only
        </button>
      </div>

      <div className="wood-divider mb-2" />
      <div className="grid grid-cols-12 label text-dust/50 py-3 px-2 border-b border-chrome/20">
        <div className="col-span-2">DATE</div>
        <div className="col-span-4 md:col-span-3">CITY</div>
        <div className="hidden md:block md:col-span-4">VENUE</div>
        <div className="col-span-3 md:col-span-2">STATUS</div>
        <div className="col-span-3 md:col-span-1 text-right">ACT</div>
      </div>

      {filtered.map((s, i) => (
        <button
          key={i}
          onClick={() => s.status !== "SOLD OUT" && onPick(s.city)}
          disabled={s.status === "SOLD OUT"}
          className="grid grid-cols-12 items-center w-full text-left border-b border-chrome/10 px-2 py-5 hover:bg-midnight-deep/60 group disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
        >
          <div className="col-span-2">
            <div className="label text-caution">{s.day}</div>
            <div className="display text-dust text-2xl md:text-3xl">{s.date}</div>
          </div>
          <div className="col-span-4 md:col-span-3">
            <div className="display text-dust text-xl md:text-2xl group-hover:text-caution transition-colors">
              {s.city}, {s.state}
            </div>
          </div>
          <div className="hidden md:block md:col-span-4 text-dust/70 text-sm">{s.venue}</div>
          <div className="col-span-3 md:col-span-2">
            <span className={`label inline-block border-2 px-2 py-1 text-[10px] ${STATUS_STYLES[s.status]}`}>
              {s.status}
            </span>
          </div>
          <div className="col-span-3 md:col-span-1 text-right label text-dust group-hover:text-caution">
            {s.status === "SOLD OUT" ? "—" : "GET →"}
          </div>
        </button>
      ))}
    </section>
  );
}
