import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Polityka prywatności — Polish Footballers Abroad",
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-32 bg-bg-primary text-text-primary transition-[background-color,color] duration-300">
        <h1 className="text-3xl font-bold mb-8">Polityka prywatności</h1>

        <div className="space-y-6 text-text-secondary leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              1. Administrator danych
            </h2>
            <p>
              Administratorem Twoich danych osobowych jest Polish Footballers
              Abroad. Kontakt:{" "}
              <a
                href="mailto:polishfootballersabroad@gmail.com"
                className="text-accent hover:underline"
              >
                polishfootballersabroad@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              2. Zbierane dane
            </h2>
            <p>
              W ramach listy oczekujących zbieramy wyłącznie Twój adres e-mail.
              Nie zbieramy żadnych innych danych osobowych.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              3. Cel przetwarzania
            </h2>
            <p>
              Twój adres e-mail jest przetwarzany wyłącznie w celu powiadomienia
              Cię o premierze aplikacji Polish Footballers Abroad Tracker Stats.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              4. Podstawa prawna
            </h2>
            <p>
              Przetwarzanie odbywa się na podstawie Art. 6 ust. 1 lit. a RODO —
              Twojej wyraźnej zgody wyrażonej poprzez zapisanie się na listę
              oczekujących.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              5. Czas przechowywania
            </h2>
            <p>
              Twój adres e-mail będzie przechowywany do 12 miesięcy po premierze
              aplikacji. Po tym czasie dane zostaną trwale usunięte.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              6. Twoje prawa
            </h2>
            <p>
              Masz prawo dostępu do swoich danych, ich usunięcia, sprostowania
              oraz wycofania zgody w dowolnym momencie. Aby skorzystać z tych
              praw, skontaktuj się ze mną pod adresem{" "}
              <a
                href="mailto:polishfootballersabroad@gmail.com"
                className="text-accent hover:underline"
              >
                polishfootballersabroad@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              7. Zabezpieczenia
            </h2>
            <p>
              Dane przechowujemy w bezpiecznej bazie Supabase (AWS) — są
              szyfrowane i chronione przez cały czas.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
