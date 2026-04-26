"use client";

import { useState } from "react";

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "duplicate"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.status === 409) {
        setStatus("duplicate");
        return;
      }

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="lista"
      className="py-20 px-6 text-center bg-cta-bg relative"
    >
      <h2 className="text-[32px] font-bold mb-3 text-white">
        Zapisz się na listę oczekujących
      </h2>
      <p className="text-white/85 text-base max-w-[500px] mx-auto mb-8 leading-relaxed">
        Dołącz teraz i otrzymaj pierwszeństwo oraz specjalne oferty po premierze
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex gap-2.5 justify-center max-w-[440px] mx-auto mb-5 max-md:flex-col"
      >
        <input
          type="email"
          placeholder="Podaj swój adres e-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1 bg-black/20 border border-white/20 text-white py-3.5 px-[18px] rounded-lg text-sm outline-none placeholder:text-white/50 focus:border-white/50 transition-[border-color] duration-200"
        />
        <button
          type="submit"
          disabled={status === "loading" || !consent}
          className="bg-cta-btn text-cta-btn-text border-none py-3.5 px-7 rounded-lg text-sm font-semibold cursor-pointer whitespace-nowrap hover:-translate-y-px transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Zapisuję..." : "Zapisz się"}
        </button>
      </form>

      <label className="flex items-center justify-center gap-2 text-sm text-white/80 mb-4 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="accent-[#E62129] w-4 h-4"
        />
        Akceptuję{" "}
        <a href="/privacy" className="underline text-white hover:text-white/80">
          politykę prywatności
        </a>
      </label>

      {status === "success" && (
        <p className="text-white text-sm">
          ✓ Gotowe! Twoje miejsce na liście jest zarezerwowane.
        </p>
      )}
      {status === "duplicate" && (
        <p className="text-white text-sm">
          Ten email jest już na liście.
        </p>
      )}
      {status === "error" && (
        <p className="text-white text-sm">
          Coś poszło nie tak. Spróbuj ponownie.
        </p>
      )}

      <p className="text-sm text-white/80 mt-2">
        🎁 14 dni premium za darmo po premierze
      </p>
    </section>
  );
}
