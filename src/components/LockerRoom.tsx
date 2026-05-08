import { useState } from "react";
import merch from "@/assets/merch.jpg";
import hat from "@/assets/merch-hat.jpg";
import tee from "@/assets/merch-tee.jpg";
import hoodie from "@/assets/merch-hoodie.jpg";
import glass from "@/assets/merch-glass.jpg";
import vinyl from "@/assets/merch-vinyl.jpg";
import jersey from "@/assets/merch-jersey.jpg";
import flannel from "@/assets/merch-flannel.jpg";
import vest from "@/assets/merch-vest.jpg";
import bandana from "@/assets/merch-bandana.jpg";
import flask from "@/assets/merch-flask.jpg";
import poster from "@/assets/merch-poster.jpg";
import beanie from "@/assets/merch-beanie.jpg";
import leatherflask from "@/assets/merch-leatherflask.jpg";
import plate from "@/assets/merch-plate.jpg";
import cushion from "@/assets/merch-cushion.jpg";
import tote from "@/assets/merch-tote.jpg";
import jacket from "@/assets/merch-jacket.jpg";
import cap from "@/assets/merch-cap.jpg";
import glove from "@/assets/merch-glove.jpg";
import pennant from "@/assets/merch-pennant.jpg";
import kit from "@/assets/merch-kit.jpg";
import laminate from "@/assets/merch-laminate.jpg";

const ITEMS = [
  { name: "Still The Problem Trucker", price: "$45", tag: "LIMITED", img: hat },
  { name: "Still The Problem Tour Tee", price: "$60", tag: "NEW", img: tee },
  { name: "MW Distressed Hoodie", price: "$95", tag: "", img: hoodie },
  { name: "7 Summers Whiskey Glass", price: "$32", tag: "PAIR", img: glass },
  { name: "Still The Problem Tour Vinyl", price: "$48", tag: "GOLD", img: vinyl },
  { name: "Wallen Field Jersey", price: "$120", tag: "VIP ONLY", img: jersey },
  { name: "Sleeveless 'Pit' Flannel", price: "$65", tag: "PIT", img: flannel },
  { name: "Workwear Canvas Vest", price: "$120", tag: "HEAVY", img: vest },
  { name: "Graphic Bandana Set", price: "$28", tag: "SET", img: bandana },
  { name: "Leather Flask", price: "$40", tag: "", img: flask },
  { name: "Numbered Tour Poster", price: "$75", tag: "NUMBERED", img: poster },
  { name: "Camo 'Mullet' Beanie", price: "$38", tag: "CAMO", img: beanie },
  { name: "Leather-Wrapped Flask", price: "$55", tag: "", img: leatherflask },
  { name: "Embossed Metal License Plate", price: "$35", tag: "", img: plate },
  { name: "Stadium Seat Cushion", price: "$30", tag: "", img: cushion },
  { name: "Clear Concert Tote", price: "$25", tag: "STADIUM OK", img: tote },
  { name: "Stadium Warm-Up Jacket", price: "$140", tag: "NEW", img: jacket },
  { name: "Distressed 'MW' Baseball Cap", price: "$42", tag: "", img: cap },
  { name: "Leather Baseball Glove", price: "$110", tag: "LIMITED", img: glove },
  { name: "City-Specific 'Lineup' Pennant", price: "$32", tag: "PER CITY", img: pennant },
  { name: "'The Pit' Survival Kit", price: "$48", tag: "GA NIGHTS", img: kit },
  { name: "Commemorative Tour Laminate", price: "$55", tag: "REPLICA", img: laminate },
];

export function LockerRoom() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? ITEMS : ITEMS.slice(0, 6);
  const hiddenCount = ITEMS.length - 6;
  return (
    <section id="locker" className="relative px-6 md:px-12 py-24 distress bg-midnight-deep">
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="label text-caution mb-3">SECTION 02 — LOOK-BOOK</div>
          <h2 className="display text-dust text-6xl md:text-8xl">Locker Room</h2>
          <p className="mt-4 text-dust/70 max-w-md">
            Field-issued gear. Made heavy, worn hard. Each piece numbered and stamped from the dressing-room floor of Neyland Stadium.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="label bg-caution text-midnight px-6 py-4 hover:bg-dust transition-colors">Shop The Drop</button>
            <button className="label border-2 border-chrome/40 text-dust px-6 py-4 hover:border-caution">Lookbook PDF</button>
          </div>
        </div>
        <div className="relative border-2 border-chrome/30 overflow-hidden">
          <img src={merch} alt="Tour merch lookbook" loading="lazy" width={1280} height={1280} className="w-full h-full object-cover grayscale contrast-125" />
          <div className="absolute top-4 left-4 label text-caution bg-midnight/80 px-2 py-1 border border-caution">FILE · 04 / 26</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-chrome/20">
        {visible.map((it, i) => {
          const params = new URLSearchParams({
            mode: "merch",
            item: it.name,
            price: it.price.replace(/[^0-9]/g, ""),
            sku: `MW-MERCH-${String(i + 1).padStart(2, "0")}`,
          });
          return (
            <a
              key={i}
              href={`/ticket-checkout.html?${params.toString()}`}
              className="bg-midnight p-6 group hover:bg-midnight-deep cursor-pointer block"
            >
              <div className="aspect-square bg-midnight-deep border border-chrome/20 mb-4 relative overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-2 left-2 display text-dust/30 text-6xl mix-blend-overlay pointer-events-none">{String(i + 1).padStart(2, "0")}</span>
                {it.tag && (
                  <div className="absolute top-2 right-2 label text-[9px] text-caution bg-midnight/80 border border-caution px-1 py-0.5">{it.tag}</div>
                )}
              </div>
              <div className="flex justify-between items-end">
                <div className="display text-dust text-xl group-hover:text-caution leading-tight">{it.name}</div>
                <div className="label text-caution shrink-0">{it.price}</div>
              </div>
            </a>
          );
        })}
      </div>

      {hiddenCount > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="label border-2 border-caution bg-midnight text-caution px-8 py-4 hover:bg-caution hover:text-midnight transition-colors flex items-center gap-3"
          >
            <span className="size-2 bg-caution group-hover:bg-midnight" />
            {showAll ? "SHOW LESS ▲" : `SHOW ${hiddenCount} MORE ITEMS ▼`}
          </button>
        </div>
      )}
    </section>
  );
}
