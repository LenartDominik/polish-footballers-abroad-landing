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
        To dla Ciebie, jeśli śledzisz polskich piłkarzy
      </h2>
      <p className="text-white text-base max-w-[500px] mx-auto mb-8 leading-relaxed">
        Zostaw email — powiadomię Cię, gdy ruszymy. Zapisani dostają 14 dni premium za darmo.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex gap-2.5 justify-center max-w-[440px] mx-auto mb-5 max-md:flex-col"
      >
        <input
          type="email"
          placeholder="Podaj swój adres e-mail"
          required
          aria-label="Adres e-mail"
          aria-describedby={status !== "idle" ? "cta-status" : undefined}
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

      <label className="flex items-center justify-center gap-2 text-sm text-white mb-4 cursor-pointer">
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
        <p id="cta-status" className="text-white text-sm" role="status">
          ✓ Gotowe! Twoje miejsce na liście jest zarezerwowane.
        </p>
      )}
      {status === "duplicate" && (
        <p id="cta-status" className="text-white text-sm" role="status">
          Ten email jest już na liście.
        </p>
      )}
      {status === "error" && (
        <p id="cta-status" className="text-white text-sm" role="status">
          Coś poszło nie tak. Spróbuj ponownie.
        </p>
      )}

      <p className="text-sm text-white mt-2 font-light">
        Tylko email. Żadnego spamu. Wypisz się jednym kliknięciem.
      </p>
    </section>
  );
}
