const ALBUMS = [
  {
    title: "Stand Alone",
    year: "2015",
    cert: "EP — DEBUT",
    tracks: 5,
    spotifyId: "2F66LRNUc5LQRC9qEVhfeu",
    cover: "https://i.scdn.co/image/ab67616d0000b2738690b099a7824870fb67294f",
  },
  {
    title: "If I Know Me",
    year: "2018",
    cert: "2× PLATINUM",
    tracks: 14,
    spotifyId: "6WKNoni6aDzCTUN1CtJJ5R",
    cover: "https://i.scdn.co/image/ab67616d0000b2731215aac0c23dd8c31f5c14c1",
  },
  {
    title: "Dangerous: The Double Album",
    year: "2021",
    cert: "DIAMOND",
    tracks: 30,
    spotifyId: "6JlCkqkqobGirPsaleJpFr",
    cover: "https://i.scdn.co/image/ab67616d0000b2737d6813fd233f3bc4977cceca",
  },
  {
    title: "One Thing At A Time",
    year: "2023",
    cert: "5× PLATINUM",
    tracks: 36,
    spotifyId: "6i7mF7whyRJuLJ4ogbH2wh",
    cover: "https://i.scdn.co/image/ab67616d0000b273705079df9a25a28b452c1fc9",
  },
  {
    title: "I'm The Problem",
    year: "2025",
    cert: "3× PLATINUM",
    tracks: 37,
    spotifyId: "5IZ8sY5FjtL9hloXpv0XbD",
    cover: "https://i.scdn.co/image/ab67616d0000b27335ea219ce47813b5e2dc3745",
  },
  {
    title: "Stand Alone (10th Anniversary Deluxe)",
    year: "2025",
    cert: "DELUXE EDITION",
    tracks: 12,
    spotifyId: "5DDVH0WdBqbQg7XriGDFEw",
    cover: "https://i.scdn.co/image/ab67616d0000b2734cf3f116ed6e3f294376d03a",
  },
];

export function TheVault() {
  return (
    <section id="vault" className="relative px-6 md:px-12 py-24 bg-midnight-deep distress">
      <div className="mb-14">
        <div className="label text-caution mb-3">SECTION 04 — DISCOGRAPHY</div>
        <h2 className="display text-dust text-6xl md:text-8xl">The Vault</h2>
        <p className="label text-dust/60 mt-4 max-w-xl">
          TAP ANY RECORD — ROUTES TO YOUR STREAMING APP OF CHOICE.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ALBUMS.map((a) => (
          <a
            key={a.spotifyId}
            href={`https://album.link/s/${a.spotifyId}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Stream ${a.title} by Morgan Wallen`}
            className="group relative block border-2 border-chrome/30 bg-midnight p-6 hover:border-caution transition-colors"
          >
            <div className="relative aspect-square mb-5 overflow-hidden bg-midnight-deep">
              {/* Vinyl slides out on hover */}
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
              {/* Real album cover sleeve */}
              <div className="absolute inset-0 border border-chrome/20">
                <img
                  src={a.cover}
                  alt={`${a.title} album cover`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                  <span className="label text-caution">{a.year}</span>
                  <span className="label text-dust opacity-0 group-hover:opacity-100 transition-opacity">▶ PLAY</span>
                </div>
              </div>
            </div>
            <div className="display text-dust text-2xl">{a.title}</div>
            <div className="flex items-center justify-between mt-2">
              <span className="label text-caution">{a.cert}</span>
              <span className="label text-dust/50">{a.tracks} TRACKS</span>
            </div>
          </a>
        ))}
      </div>

      <p className="label text-dust/40 mt-10 text-center">
        POWERED BY ODESLI — OPENS IN SPOTIFY, APPLE MUSIC, YOUTUBE MUSIC, AMAZON & MORE.
      </p>
    </section>
  );
}
