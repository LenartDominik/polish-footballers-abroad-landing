import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-main",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://polish-footballers-abroad-tracker-l.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Polish Footballers Abroad — Statystyki piłkarzy za granicą",
  description:
    "Koniec z szukaniem. Śledź statystyki polskich piłkarzy za granicą — minuty, bramki, asysty i formę w jednym miejscu.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Polish Footballers Abroad — Statystyki piłkarzy za granicą",
    description:
      "Koniec z szukaniem. Śledź statystyki polskich piłkarzy za granicą — minuty, bramki, asysty i formę w jednym miejscu.",
    url: siteUrl,
    siteName: "Polish Footballers Abroad",
    images: [
      {
        url: "/images/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Polish Footballers Abroad — Tracker Stats",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polish Footballers Abroad — Statystyki piłkarzy za granicą",
    description:
      "Koniec z szukaniem. Śledź statystyki polskich piłkarzy za granicą — minuty, bramki, asysty i formę w jednym miejscu.",
    images: ["/images/og-image-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md">
          Przejdź do treści
        </a>
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Czy to jest płatne?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Na start wszystko za darmo. Osoby zapisane na listę otrzymają 14 dni pełnego dostępu premium — bez żadnych opłat. Po tym okresie część funkcji pozostanie darmowa, a część będzie wymagała subskrypcji premium.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Co będzie darmowe, a co premium?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Wyszukiwarka i statystyki gracza pozostaną darmowe. W planach premium: porównywarka graczy, średnie pozycje na boisku i mecze na żywo. Model premium wprowadzimy później — zapisani na listę dostaną najwięcej.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Skąd bierzecie dane?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dane pochodzą z publicznie dostępnych źródeł statystycznych i są aktualizowane na bieżąco.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Jakie ligi są objęte?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Śledzimy polskich piłkarzy we wszystkich głównych ligach europejskich — Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Eredivisie, Liga Portugal i innych. Zasięg zależy od tego, gdzie akurat grają Polacy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Czy mogę się wypisać z listy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tak, jednym kliknięciem w emailu potwierdzającym.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Czy jest wersja mobilna?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tak, aplikacja działa w przeglądarce na telefonie, tablecie i komputerze — bez instalacji.",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
