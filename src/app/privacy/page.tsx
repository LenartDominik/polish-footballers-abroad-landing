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
              W ramach listy oczekujących zbieramy Twój adres e-mail.
              Dodatkowo zbieramy anonimowe dane analityczne (odwiedziny stron,
              informacje o urządzeniu i przeglądarce) za pomocą Vercel Analytics.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              3. Cel przetwarzania
            </h2>
            <p>
              Twój adres e-mail jest przetwarzany w celu informowania o
              nowościach i aktualizacjach serwisu Polish Footballers Abroad.
              Dane analityczne służą do monitorowania wydajności i poprawy
              serwisu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              4. Podstawa prawna
            </h2>
            <p>
              Przetwarzanie odbywa się na podstawie Art. 6 ust. 1 lit. a RODO —
              Twojej wyraźnej zgody wyrażonej poprzez zapisanie się na listę
              oczekujących. Dane analityczne są przetwarzane na podstawie
              uzasadnionego interesu administratora (Art. 6 ust. 1 lit. f RODO).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              5. Podmioty przetwarzające dane
            </h2>
            <p>
              Twoje dane mogą być udostępniane następującym podmiotom:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Supabase</strong> — przechowywanie adresu e-mail w bazie
                danych (hosting: AWS)
              </li>
              <li>
                <strong>MailerLite</strong> — wysyłka e-maili powitalnych i
                aktualizacji o serwisie
              </li>
              <li>
                <strong>Vercel</strong> — hosting serwisu oraz anonimowa
                analityka (Vercel Analytics, Speed Insights)
              </li>
            </ul>
            <p className="mt-2">
              Nie sprzedajemy ani nie przekazujemy Twoich danych innym podmiotom.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              6. E-mail
            </h2>
            <p>
              Po zapisie na listę otrzymasz e-mail powitalny. Możesz zrezygnować z
              otrzymywania kolejnych e-maili w dowolnym momencie, klikając link
              wypisu w treści wiadomości.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              7. Analityka
            </h2>
            <p>
              Korzystamy z Vercel Analytics i Vercel Speed Insights do
              zbierania anonimowych danych o ruchu na stronie — m.in. liczba
              odwiedzin, typ przeglądarki i urządzenia, przybliżona lokalizacja
              na podstawie adresu IP. Dane te nie pozwalają na identyfikację
              konkretnej osoby.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              8. Cookies i localStorage
            </h2>
            <p>
              Serwis wykorzystuje localStorage do zapisania preferencji motywu
              (ciemny/jasny). Vercel Analytics może używać cookies do pomiaru
              ruchu. Możesz wyłączyć cookies w ustawieniach przeglądarki, ale
              może to wpłynąć na działanie niektórych funkcji.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              9. Czas przechowywania
            </h2>
            <p>
              Twój adres e-mail będzie przechowywany do 12 miesięcy od momentu
              zapisu. Po tym czasie dane zostaną trwale usunięte, chyba że
              wyraźnie wyrazisz zgodę na dalsze przetwarzanie.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              10. Twoje prawa
            </h2>
            <p>
              Masz prawo dostępu do swoich danych, ich usunięcia, sprostowania
              oraz wycofania zgody w dowolnym momencie. Aby skorzystać z tych
              praw, skontaktuj się pod adresem{" "}
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
              11. Zabezpieczenia
            </h2>
            <p>
              Dane przechowujemy w bezpiecznej bazie Supabase (AWS) — są
              szyfrowane w tranzycie i przechowywaniu oraz chronione przez cały
              czas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              12. Prywatność dzieci
            </h2>
            <p>
              Serwis nie jest przeznaczony dla osób poniżej 16 lat. Nie
              zbieramy świadomie danych osobowych od dzieci.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              13. Zmiany polityki
            </h2>
            <p>
              Możemy aktualizować tę politykę prywatności. O zmianach
              poinformujemy na stronie. Dalsze korzystanie z serwisu po
              wprowadzeniu zmian oznacza akceptację zaktualizowanej polityki.
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
