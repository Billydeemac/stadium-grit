export function Footer() {
  return (
    <footer className="relative bg-midnight-deep border-t-2 border-caution px-6 md:px-12 py-16 distress">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="display text-dust text-5xl md:text-6xl">STILL THE<br/>PROBLEM.</div>
          <div className="label text-caution mt-4">EST. KNOXVILLE · TENNESSEE</div>
        </div>
        <div>
          <div className="label text-dust/50 mb-3">THE TOUR</div>
          <ul className="space-y-2 text-dust">
            <li><a href="#lineup" className="hover:text-caution">Tour Dates</a></li>
            <li><a href="#vault" className="hover:text-caution">The Vault</a></li>
            <li><a href="#locker" className="hover:text-caution">Locker Room</a></li>
          </ul>
        </div>
        <div>
          <div className="label text-dust/50 mb-3">FOLLOW</div>
          <ul className="space-y-2 text-dust">
            <li><a className="hover:text-caution">Instagram</a></li>
            <li><a className="hover:text-caution">YouTube</a></li>
            <li><a className="hover:text-caution">Spotify</a></li>
          </ul>
        </div>
      </div>
      <div className="wood-divider mb-6" />
      <div className="flex flex-wrap justify-between gap-3 label text-dust/50">
        <span>© MMXXVI · BIG LOUD RECORDS</span>
        <span>BOOKED BY WME · MGMT WILL BUSH</span>
        <span>NO REFUNDS · ALL SALES FINAL</span>
      </div>
    </footer>
  );
}
