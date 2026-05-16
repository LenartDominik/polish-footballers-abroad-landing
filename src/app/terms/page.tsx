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
            <p>
              Korzystając z serwisu Polish Footballers Abroad akceptujesz
              niniejszy regulamin. Jeśli nie zgadzasz się z warunkami, nie
              korzystaj z serwisu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              1. Opis usługi
            </h2>
            <p>
              Polish Footballers Abroad to serwis do śledzenia statystyk
              polskich piłkarzy grających za granicą. Aplikacja agreguje dane
              z wielu lig i rozgrywek w jednym miejscu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              2. Lista oczekujących
            </h2>
            <p>
              Zapisanie się na listę oczekujących nie jest wiążące i nie
              stanowi zobowiązania do zakupu. Służy do informowania o
              nowościach i aktualizacjach serwisu. Zapisując się, wyrażasz
              zgodę na otrzymywanie e-maili dotyczących serwisu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              3. Bonus — 14 dni premium
            </h2>
            <p>
              Osoby zapisane na listę oczekującą otrzymają 14 dni darmowego
              dostępu do funkcji premium po udostępnieniu aplikacji.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              4. Dokładność danych
            </h2>
            <p>
              Staramy się, aby dane statystyczne były aktualne i dokładne, ale
              mogą one być opóźnione, niekompletne lub zawierać błędy wynikające
              z zewnętrznych źródeł. Nie ponosimy odpowiedzialności za
              decyzje podjęte na podstawie danych z serwisu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              5. Dane i hosting
            </h2>
            <p>
              Dane użytkowników przechowywane są w Supabase. Szczegóły
              dotyczące zbierania i przetwarzania danych znajdują się w{" "}
              <a href="/privacy" className="text-accent hover:underline">
                polityce prywatności
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              6. Akceptowalne użycie
            </h2>
            <p>Zgadzasz się nie:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nadużywać serwisu lub próbować ominąć zabezpieczenia</li>
              <li>
                Scrapować, crawlować lub automatycznie pobierać dane z serwisu
              </li>
              <li>Przesyłać lub rozpowszechniać złośliwą zawartość</li>
              <li>Korzystać z serwisu w sposób naruszający prawo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              7. Ograniczenie odpowiedzialności
            </h2>
            <p>
              W maksymalnym zakresie dozwolonym przez prawo, Polish Footballers
              Abroad nie ponosi odpowiedzialności za jakiekolwiek straty
              pośrednie, przypadkowe, specjalne lub wynikowe powstałe w związku
              z korzystaniem z serwisu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              8. Prawa zastrzeżone
            </h2>
            <p>
              Wszelkie prawa do serwisu, jego nazwy, logo, interfejsu i
              zawartości są zastrzeżone. Kopiowanie, rozpowszechnianie lub
              modyfikowanie bez zgody administratora jest zabronione.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              9. Prywatność dzieci
            </h2>
            <p>
              Serwis nie jest przeznaczony dla osób poniżej 16 lat. Nie
              zbieramy świadomie danych od dzieci poniżej tego wieku.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              10. Zmiany regulaminu
            </h2>
            <p>
              Możemy aktualizować niniejszy regulamin. O zmianach poinformujemy
              na stronie. Dalsze korzystanie z serwisu po wprowadzeniu zmian
              oznacza akceptację zaktualizowanego regulaminu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              11. Prawo właściwe
            </h2>
            <p>
              Niniejszy regulamin podlega prawu polskiemu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              12. Kontakt
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

          <p className="mt-10 text-sm text-text-muted">
            © 2026 Polish Footballers Abroad. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
