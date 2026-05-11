import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-main",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://polish-footballers-abroad-landing.vercel.app";

export const metadata: Metadata = {
  title: "Polish Footballers Abroad — Statystyki piłkarzy za granicą",
  description:
    "Śledź statystyki polskich piłkarzy grających za granicą. Sprawdzaj minuty, bramki, asysty i formę — wszystkie dane w jednym miejscu.",
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
      "Śledź statystyki polskich piłkarzy grających za granicą. Sprawdzaj minuty, bramki, asysty i formę — wszystkie dane w jednym miejscu.",
    url: siteUrl,
    siteName: "Polish Footballers Abroad",
    images: [
      {
        url: "/images/og-image.png",
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
      "Śledź statystyki polskich piłkarzy grających za granicą. Sprawdzaj minuty, bramki, asysty i formę — wszystkie dane w jednym miejscu.",
    images: ["/images/og-image.png"],
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md">
          Przejdź do treści
        </a>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
