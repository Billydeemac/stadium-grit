import { useEffect, useState } from "react";

const CITIES = [
  "KNOXVILLE, TN", "EAST RUTHERFORD, NJ", "ARLINGTON, TX", "ATLANTA, GA",
  "CHICAGO, IL", "DENVER, CO", "SEATTLE, WA", "FOXBOROUGH, MA",
];

const TIERS = [
  { name: "General Admission", sub: "The Pit", price: 199, perks: ["Floor access", "Digital memento", "Tour app entry"] },
  { name: "Long Night VIP", sub: "Tier II", price: 550, perks: ["Pit access", "Early entry", "Hat + merch bundle"] },
  { name: "Broad Shoulders Lounge", sub: "Tier III", price: 950, perks: ["Premium viewing deck", "Open whiskey bar", "Private restrooms"] },
  { name: "The Starting Lineup", sub: "Tier IV", price: 2000, perks: ["On-stage viewing (3 songs)", "Backstage tour", "Signed jersey"] },
  { name: "The Fan Card", sub: "All-Access Season Pass · Tier V", price: 5000, featured: true, perks: ["Free entry to ALL 2026 tour stops", "Front row at any show you choose", "Personal meet & greet (every city)", "Whiskey tasting with the band", "Custom signed acoustic guitar", "Annual signed merch drop", "Priority pit + on-stage viewing (3 songs)", "Backstage tour & soundcheck access", "Exclusive fan-only livestreams", "Early ticket windows for future tours", "20% off all merch & vault items", "Birthday voice note from Morgan", "Members-only Discord + app badge", "Concierge text line for travel & lodging"] },
];

export function TicketModal({
  open, initialCity, onClose,
}: { open: boolean; initialCity: string | null; onClose: () => void }) {
  const [step, setStep] = useState<1 | 2>(initialCity ? 2 : 1);
  const [city, setCity] = useState<string | null>(initialCity);

  useEffect(() => {
    if (open) {
      setCity(initialCity);
      setStep(initialCity ? 2 : 1);
    }
  }, [open, initialCity]);

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const checkout = (tier: typeof TIERS[number], idx: number) => {
    const params = new URLSearchParams({
      mode: "ticket",
      ticket: String(idx + 1),
      tier: tier.name,
      price: String(tier.price),
      city: city ?? "",
      tour: "STILL_THE_PROBLEM_2026",
    });
    window.location.href = `/ticket-checkout.html?${params.toString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-midnight-deep/95 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div className="min-h-screen flex items-start md:items-center justify-center p-4 md:p-12">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl border-2 border-caution bg-midnight distress"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-caution px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="size-2 bg-caution animate-flicker" />
              <span className="label text-caution">THE GAUNTLET · STEP {step} OF 02</span>
            </div>
            <button onClick={onClose} className="label text-dust hover:text-caution">CLOSE ✕</button>
          </div>

          {/* Step indicator */}
          <div className="grid grid-cols-2">
            <button
              onClick={() => setStep(1)}
              className={`label py-3 border-r border-chrome/30 ${step === 1 ? "bg-caution text-midnight" : "text-dust/60"}`}
            >
              01 · CITY {city && step === 2 && `— ${city}`}
            </button>
            <div className={`label py-3 text-center ${step === 2 ? "bg-caution text-midnight" : "text-dust/60"}`}>
              02 · TIER
            </div>
          </div>

          <div className="p-6 md:p-10">
            {step === 1 ? (
              <>
                <h3 className="display text-dust text-4xl md:text-6xl mb-6">Pick Your Stadium.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-chrome/20">
                  {CITIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setCity(c); setStep(2); }}
                      className="bg-midnight p-5 text-left hover:bg-caution hover:text-midnight group label flex items-center justify-between"
                    >
                      <span>{c}</span>
                      <span className="text-caution group-hover:text-midnight">→</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h3 className="display text-dust text-4xl md:text-6xl mb-2">Pick Your Tier.</h3>
                <p className="label text-caution mb-8">DESTINATION · {city}</p>
                <div className="space-y-3">
                  {TIERS.map((t, i) => (
                    <div
                      key={t.name}
                      className={
                        t.featured
                          ? "relative ticket-stub border-2 border-caution bg-caution/10 shadow-[0_0_40px_-5px_var(--caution)] p-6 flex flex-col md:flex-row md:items-center gap-4"
                          : "ticket-stub border-2 border-chrome/30 hover:border-caution transition-colors p-5 flex flex-col md:flex-row md:items-center gap-4"
                      }
                    >
                      {t.featured && (
                        <span className="absolute -top-3 left-6 bg-caution text-midnight label px-2 py-1 animate-flicker">
                          ★ MOST WANTED ★
                        </span>
                      )}
                      <div className={`display tabular-nums w-16 text-caution ${t.featured ? "text-6xl" : "text-5xl"}`}>{String(i + 1).padStart(2, "0")}</div>
                      <div className="flex-1">
                        <div className={`display text-dust ${t.featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>{t.name}</div>
                        <div className="label text-caution">{t.sub}</div>
                        <div className={`text-dust/80 text-xs mt-2 font-mono ${t.featured ? "leading-relaxed" : ""}`}>{t.perks.join(" · ")}</div>
                      </div>
                      <div className="text-right">
                        <div className={`display text-dust ${t.featured ? "text-5xl" : "text-4xl"}`}>${t.price}</div>
                        <button onClick={() => checkout(t, i)} className={`mt-2 label bg-caution text-midnight hover:bg-dust ${t.featured ? "font-bold px-6 py-3" : "px-4 py-2"}`}>
                          {t.featured ? "JOIN THE FAN CARD →" : "CLAIM →"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="mt-6 label text-dust/60 hover:text-caution">← CHANGE CITY</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
