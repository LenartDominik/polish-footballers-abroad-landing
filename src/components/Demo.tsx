"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const screenshots = [
  {
    src: "/images/search.png",
    alt: "Pasek wyszukiwarki z wpisanym nazwiskiem piłkarza i listą filtrowanych wyników poniżej",
    label: "Wyszukiwarka — znajdź piłkarza po nazwisku albo klubie",
    url: "search.polishfootballersabroad.pl",
  },
  {
    src: "/images/player-stats.png",
    alt: "Karta statystyk gracza z czterema kolumnami: liga krajowa, rozgrywki europejskie, puchary krajowe i suma sezonu",
    label: "Statystyki gracza — osobno dla ligi, pucharów krajowych i europejskich pucharów",
    url: "polishfootballersabroad.pl/stats",
  },
  {
    src: "/images/player-comparison.png",
    alt: "Dwóch piłkarzy obok siebie z wykresami radarowymi porównującymi ich statystyki",
    label: "Porównywarka — porównaj dwóch graczy z pola albo dwóch bramkarzy",
    url: "polishfootballersabroad.pl/compare",
  },
  {
    src: "/images/average-positions.png",
    alt: "Mapa boiska z zielonym tłem i kropkami oznaczającymi średnie pozycje zawodników podczas meczu",
    label: "Średnie pozycje — zobacz, gdzie na boisku gra zawodnik średnio w ciągu 90 minut",
    url: "polishfootballersabroad.pl/positions",
  },
  {
    src: "/images/live-matches.png",
    alt: "Oś czasu meczu na żywo z zaznaczonymi zdarzeniami polskich piłkarzy",
    label: "Na żywo — śledź polskich piłkarzy minuta po minucie. Bramki, asysty i kluczowe zdarzenia",
    url: "polishfootballersabroad.pl/live",
  },
];

function BrowserMockup({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-bg-secondary border-b border-border">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex-1 bg-bg-card rounded px-2.5 py-0.5 text-[11px] text-text-muted font-mono truncate">
        {url}
      </div>
    </div>
  );
}

function Lightbox({
  screenshot,
  onClose,
}: {
  screenshot: (typeof screenshots)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm lightbox-animate"
      style={{ animation: "lightbox-in 0.2s ease-out" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Powiększony zrzut ekranu"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200 p-2"
        aria-label="Zamknij"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div
        className="relative max-w-[90vw] max-h-[85vh] lightbox-animate"
        style={{ animation: "lightbox-scale 0.2s ease-out" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={1200}
          height={600}
          className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
          priority
        />
      </div>
    </div>
  );
}

export default function Demo() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedIndex, closeLightbox]);

  return (
    <section
      id="demo"
      className="py-20 px-6 bg-bg-primary transition-[background-color] duration-300"
    >
      <div className="text-center mb-10">
        <h2 className="text-[32px] font-bold mb-3">Zobacz demo</h2>
        <div className="w-[60px] h-[3px] bg-divider mx-auto rounded-sm" />
      </div>

      <div className="max-w-[1200px] mx-auto mb-8">
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
          <BrowserMockup url="polishfootballersabroad.pl" />
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            poster="/images/search.png"
            className="w-full"
          >
            <source src="/images/demo-video.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="text-center text-[13px] text-text-muted mt-3">
          Zobacz, jak to działa — wyszukiwanie, statystyki i porównanie graczy
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] mx-auto">
        {screenshots.slice(0, 4).map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setSelectedIndex(i)}
            className="text-left bg-bg-card border border-border rounded-xl overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-[transform,box-shadow,background-color,border-color] duration-200 cursor-pointer"
            aria-label={`Powiększ: ${s.label}`}
          >
            <BrowserMockup url={s.url} />
            <Image
              src={s.src}
              alt={s.alt}
              width={400}
              height={200}
              className="w-full aspect-[2/1] object-cover bg-bg-secondary"
            />
            <div className="py-3 px-4 text-[13px] text-text-secondary border-t border-border transition-[color,border-color] duration-300">
              {s.label}
            </div>
          </button>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto mt-4">
        <button
          type="button"
          onClick={() => setSelectedIndex(4)}
          className="w-full text-left bg-bg-card border border-border rounded-xl overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-[transform,box-shadow,background-color,border-color] duration-200 cursor-pointer"
          aria-label={`Powiększ: ${screenshots[4].label}`}
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <BrowserMockup url={screenshots[4].url} />
              <Image
                src={screenshots[4].src}
                alt={screenshots[4].alt}
                width={600}
                height={300}
                className="w-full aspect-[2/1] object-cover bg-bg-secondary"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center py-6 px-6 md:px-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                </span>
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">Na żywo</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Mecze na żywo</h3>
              <p className="text-[13px] text-text-secondary">
                Oś czasu z bramkami, asystami i kartkami polskich piłkarzy — aktualizowana w czasie rzeczywistym. Pod osią: lista wszystkich zdarzeń z udziałem Polaków.
              </p>
            </div>
          </div>
        </button>
      </div>

      {selectedIndex !== null && (
        <Lightbox
          screenshot={screenshots[selectedIndex]}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
