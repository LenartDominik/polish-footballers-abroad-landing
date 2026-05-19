"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Czy to jest płatne?",
    answer:
      "Wszystkie osoby zapisane na listę otrzymają 14 dni pełnego dostępu premium — bez żadnych opłat. Po tym okresie część funkcji pozostanie darmowa, a część będzie wymagała subskrypcji premium.",
  },
  {
    question: "Co będzie darmowe, a co premium?",
    answer:
      "Wyszukiwarka i statystyki gracza pozostaną darmowe. W planie premium znajdą się: porównywarka graczy, średnie pozycje na boisku i mecze na żywo. Model subskrypcji premium wprowadzimy później — osoby zapisane na listę otrzymają najlepsze warunki.",
  },
  {
    question: "Skąd pochodzą dane?",
    answer:
      "Dane pochodzą z publicznie dostępnych źródeł statystycznych i są aktualizowane na bieżąco.",
  },
  {
    question: "Gdzie mogę śledzić polskich piłkarzy?",
    answer:
      "We wszystkich topowych ligach europejskich — Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Eredivisie, Primeira Liga — oraz wybranych ligach spoza Europy. Zasięg zależy od tego, którzy Polacy znajdują się w naszej bazie danych.",
  },
  {
    question: "Czy mogę się wypisać z listy?",
    answer: "Tak, jednym kliknięciem w emailu potwierdzającym.",
  },
  {
    question: "Czy jest wersja mobilna?",
    answer:
      "Tak, aplikacja działa w przeglądarce na telefonie, tablecie i komputerze — bez instalacji.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border transition-[border-color] duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-none"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-semibold text-text-primary pr-4 transition-colors duration-300">
          {question}
        </span>
        <span
          className={`shrink-0 w-5 h-5 text-text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-40" : "max-h-0"}`}
      >
        <p className="pb-5 text-sm text-text-secondary leading-relaxed transition-[color] duration-300">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 bg-bg-secondary transition-[background-color] duration-300">
      <div className="text-center mb-10">
        <h2 className="text-[32px] font-bold mb-3">Często zadawane pytania</h2>
        <div className="w-[60px] h-[3px] bg-divider mx-auto rounded-sm" />
      </div>

      <div className="max-w-[640px] mx-auto">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
