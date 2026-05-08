import merch from "@/assets/merch.jpg";
import hat from "@/assets/merch-hat.jpg";
import tee from "@/assets/merch-tee.jpg";
import hoodie from "@/assets/merch-hoodie.jpg";
import glass from "@/assets/merch-glass.jpg";
import vinyl from "@/assets/merch-vinyl.jpg";
import jersey from "@/assets/merch-jersey.jpg";

const ITEMS = [
  { name: "Still The Problem Trucker", price: "$45", tag: "LIMITED", img: hat },
  { name: "Still The Problem Tour Tee", price: "$60", tag: "NEW", img: tee },
  { name: "MW Distressed Hoodie", price: "$95", tag: "", img: hoodie },
  { name: "7 Summers Whiskey Glass", price: "$32", tag: "PAIR", img: glass },
  { name: "Still The Problem Tour Vinyl", price: "$48", tag: "GOLD", img: vinyl },
  { name: "Wallen Field Jersey", price: "$120", tag: "VIP ONLY", img: jersey },
  { name: "Sleeveless 'Pit' Flannel", price: "$65", tag: "PIT", img: merch },
  { name: "Workwear Canvas Vest", price: "$120", tag: "HEAVY", img: merch },
  { name: "Graphic Bandana Set", price: "$28", tag: "SET", img: merch },
  { name: "Leather Flask", price: "$40", tag: "", img: merch },
  { name: "Numbered Tour Poster", price: "$75", tag: "NUMBERED", img: merch },
  { name: "Camo 'Mullet' Beanie", price: "$38", tag: "CAMO", img: merch },
  { name: "Leather-Wrapped Flask", price: "$55", tag: "", img: merch },
  { name: "Embossed Metal License Plate", price: "$35", tag: "", img: merch },
  { name: "Stadium Seat Cushion", price: "$30", tag: "", img: merch },
  { name: "Clear Concert Tote", price: "$25", tag: "STADIUM OK", img: merch },
  { name: "Stadium Warm-Up Jacket", price: "$140", tag: "NEW", img: merch },
  { name: "Distressed 'MW' Baseball Cap", price: "$42", tag: "", img: merch },
  { name: "Leather Baseball Glove", price: "$110", tag: "LIMITED", img: merch },
  { name: "City-Specific 'Lineup' Pennant", price: "$32", tag: "PER CITY", img: merch },
  { name: "'The Pit' Survival Kit", price: "$48", tag: "GA NIGHTS", img: merch },
  { name: "Commemorative Tour Laminate", price: "$55", tag: "REPLICA", img: merch },
];

export function LockerRoom() {
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
        {ITEMS.map((it, i) => {
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
    </section>
  );
}
