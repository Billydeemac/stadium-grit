const ALBUMS = [
  { title: "If I Know Me", year: "2018", cert: "2× PLATINUM", tracks: 14 },
  { title: "Dangerous: The Double Album", year: "2021", cert: "DIAMOND", tracks: 30 },
  { title: "One Thing at a Time", year: "2023", cert: "5× PLATINUM", tracks: 36 },
  { title: "I'm The Problem", year: "2025", cert: "3× PLATINUM", tracks: 37 },
];

export function TheVault() {
  return (
    <section id="vault" className="relative px-6 md:px-12 py-24 bg-midnight-deep distress">
      <div className="mb-14">
        <div className="label text-caution mb-3">SECTION 03 — DISCOGRAPHY</div>
        <h2 className="display text-dust text-6xl md:text-8xl">The Vault</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ALBUMS.map((a, i) => (
          <div key={i} className="group relative border-2 border-chrome/30 bg-midnight p-6 hover:border-caution transition-colors">
            <div className="relative aspect-square mb-5 overflow-hidden bg-midnight-deep">
              {/* Vinyl */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:translate-x-[35%] group-hover:rotate-180">
                <div className="relative size-[85%] rounded-full bg-gradient-to-br from-black to-neutral-900 group-hover:animate-spin-slow">
                  {[...Array(8)].map((_, j) => (
                    <div key={j} className="absolute inset-0 rounded-full border border-chrome/10" style={{ margin: `${j * 6}%` }} />
                  ))}
                  <div className="absolute inset-0 m-[40%] rounded-full bg-caution flex items-center justify-center">
                    <div className="size-2 rounded-full bg-midnight" />
                  </div>
                </div>
              </div>
              {/* Sleeve */}
              <div className="absolute inset-0 bg-gradient-to-br from-denim/40 via-midnight to-midnight-deep border border-chrome/20 flex flex-col justify-end p-4">
                <div className="display text-dust text-3xl leading-none">{a.title.split(" ")[0]}</div>
                <div className="label text-caution mt-2">{a.year}</div>
              </div>
            </div>
            <div className="display text-dust text-2xl">{a.title}</div>
            <div className="flex items-center justify-between mt-2">
              <span className="label text-caution">{a.cert}</span>
              <span className="label text-dust/50">{a.tracks} TRACKS</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
