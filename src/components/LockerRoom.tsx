import merch from "@/assets/merch.jpg";

const ITEMS = [
  { name: "Tour Trucker · Dust", price: "$45", tag: "LIMITED" },
  { name: "Distressed Tour Tee", price: "$60", tag: "NEW" },
  { name: "MW Logo Hoodie", price: "$95", tag: "" },
  { name: "Whiskey Glass · 7 Summers", price: "$32", tag: "PAIR" },
  { name: "Tour Vinyl LP", price: "$48", tag: "GOLD" },
  { name: "Custom Field Jersey", price: "$120", tag: "VIP ONLY" },
];

export function LockerRoom() {
  return (
    <section id="locker" className="relative px-6 md:px-12 py-24 distress bg-midnight-deep">
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="label text-caution mb-3">SECTION 05 — LOOK-BOOK</div>
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
        {ITEMS.map((it, i) => (
          <div key={i} className="bg-midnight p-6 group hover:bg-midnight-deep cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-denim/30 to-midnight-deep border border-chrome/20 mb-4 flex items-center justify-center relative overflow-hidden">
              <span className="display text-dust/10 text-9xl">{String(i + 1).padStart(2, "0")}</span>
              {it.tag && (
                <div className="absolute top-2 right-2 label text-[9px] text-caution border border-caution px-1">{it.tag}</div>
              )}
            </div>
            <div className="flex justify-between items-end">
              <div className="display text-dust text-xl group-hover:text-caution leading-tight">{it.name}</div>
              <div className="label text-caution shrink-0">{it.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
