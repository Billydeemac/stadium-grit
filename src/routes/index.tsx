import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { TheLineup } from "@/components/TheLineup";
import { TheVault } from "@/components/TheVault";
import { CareerStats } from "@/components/CareerStats";
import { LockerRoom } from "@/components/LockerRoom";
import { AudioStinger } from "@/components/AudioStinger";
import { TicketModal } from "@/components/TicketModal";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Morgan Wallen | Still The Problem 2026 Tour Tickets" },
      { name: "description", content: "Experience Morgan Wallen live. Get tickets for the Still The Problem 2026 Stadium Tour. Exclusive VIP packages and field access available." },
      { property: "og:title", content: "Morgan Wallen | Still The Problem 2026 Tour" },
      { property: "og:description", content: "Stadium-sized country. 35 cities. Field-access VIP tiers now open." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState<string | null>(null);

  const openModal = (c: string | null = null) => {
    setCity(c);
    setOpen(true);
  };

  return (
    <main className="bg-midnight text-dust min-h-screen overflow-x-hidden">
      <Cursor />
      <Hero onClaim={() => openModal()} />
      <LockerRoom />
      <TheLineup onPick={(c) => openModal(c)} />
      <TheVault />
      <CareerStats />
      <Footer />
      <AudioStinger />
      <TicketModal open={open} initialCity={city} onClose={() => setOpen(false)} />
    </main>
  );
}
