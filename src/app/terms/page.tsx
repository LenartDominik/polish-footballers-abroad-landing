import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Regulamin — Polish Footballers Abroad",
};

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-32 bg-bg-primary text-text-primary transition-[background-color,color] duration-300">
        <h1 className="text-3xl font-bold mb-8">Regulamin</h1>

        <div className="space-y-6 text-text-secondary leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              1. Opis usługi
            </h2>
            <p>
              Polish Footballers Abroad Tracker Stats to aplikacja do
              śledzenia statystyk polskich piłkarzy grających za granicą.
              Aplikacja agreguje dane z wielu lig i rozgrywek w jednym miejscu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              2. Lista oczekujących
            </h2>
            <p>
              Zapisanie się na listę oczekujących nie jest wiążące i nie
              stanowi zobowiązania do zakupu. Służy wyłącznie do powiadomienia
              o premierze aplikacji.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              3. Bonus — 14 dni premium
            </h2>
            <p>
              Osoby zapisane na listę oczekującą otrzymają 14 dni darmowego
              dostępu do funkcji premium po premierze aplikacji. Bonus
              przysługuje jednym osobom z pierwszej setki zapisanych.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              4. Prawa zastrzeżone
            </h2>
            <p>
              Wszelkie prawa do aplikacji, jej nazwy, logo i zawartości są
              zastrzeżone. Kopiowanie, rozpowszechnianie lub modyfikowanie
              bez zgody administratora jest zabronione.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              5. Kontakt
            </h2>
            <p>
              W sprawach związanych z regulaminem kontaktuj się pod adresem{" "}
              <a
                href="mailto:polishfootballersabroad@gmail.com"
                className="text-accent hover:underline"
              >
                polishfootballersabroad@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
