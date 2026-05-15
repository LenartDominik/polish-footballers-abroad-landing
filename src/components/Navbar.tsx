"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [menuOpen]);

  const navLinks = [
    { href: "#features", label: "Funkcje" },
    { href: "#demo", label: "Demo" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-[12px] border-b border-border px-4 md:px-8 py-3 flex justify-between items-center transition-[background,border-color] duration-300">
        <a
          href="/"
          className="flex items-center gap-2.5 no-underline font-bold text-base text-text-primary transition-colors duration-300"
        >
          <Image
            src="/images/logo-nowe.png"
            alt="Polish Footballers Abroad logo"
            width={32}
            height={32}
            priority
            className="w-8 h-8 rounded-lg"
          />
          <span className="hidden sm:inline">Polish Footballers Abroad</span>
        </a>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex gap-5">
            <a
              href="#features"
              className="text-text-secondary no-underline text-sm font-medium hover:text-accent transition-colors duration-300"
            >
              Funkcje
            </a>
            <a
              href="#demo"
              className="text-text-secondary no-underline text-sm font-medium hover:text-accent transition-colors duration-300"
            >
              Demo
            </a>
            <a
              href="#faq"
              className="text-text-secondary no-underline text-sm font-medium hover:text-accent transition-colors duration-300"
            >
              FAQ
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center gap-2 bg-bg-card border border-border rounded-full p-1 cursor-pointer transition-[background,border-color] duration-300"
            title="Zmień motyw"
            aria-label="Przełącz między ciemnym a jasnym motywem"
          >
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-sm transition-[background] duration-200 ${theme === "dark" ? "bg-accent" : "hover:bg-bg-card-hover"}`}
            >
              🌙
            </span>
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-sm transition-[background] duration-200 ${theme === "light" ? "bg-accent" : "hover:bg-bg-card-hover"}`}
            >
              ☀️
            </span>
          </button>

          <a
            href="#lista"
            className="hidden md:inline-block bg-accent text-white border-none px-4 py-2 rounded-md text-sm font-semibold no-underline hover:bg-accent-hover transition-colors duration-300 whitespace-nowrap"
          >
            Dołącz
          </a>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 cursor-pointer"
            aria-label="Otwórz menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-[2px] bg-text-primary rounded transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-5 h-[2px] bg-text-primary rounded transition-all duration-200 ${menuOpen ? "opacity-0 scale-0" : ""}`}
            />
            <span
              className={`block w-5 h-[2px] bg-text-primary rounded transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-bg-primary border-l border-border flex flex-col transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer header — logo + close */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <a
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2 no-underline font-bold text-sm text-text-primary"
            >
              <Image
                src="/images/logo-nowe.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 rounded-md"
              />
              Polish Footballers Abroad
            </a>
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
              aria-label="Zamknij menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col px-5 pt-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-text-primary no-underline text-base font-medium py-3 border-b border-border transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <div className="px-5 pt-4">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 w-full text-left text-text-secondary text-sm py-3 cursor-pointer bg-transparent border-none hover:text-text-primary transition-colors duration-200"
              aria-label="Przełącz między ciemnym a jasnym motywem"
            >
              <span className="text-base">{theme === "dark" ? "☀️" : "🌙"}</span>
              <span>{theme === "dark" ? "Jasny motyw" : "Ciemny motyw"}</span>
            </button>
          </div>

          {/* CTA button */}
          <div className="mt-auto px-5 pb-6">
            <a
              href="#lista"
              onClick={closeMenu}
              className="block w-full text-center bg-accent text-white border-none px-4 py-3 rounded-lg text-sm font-semibold no-underline hover:bg-accent-hover transition-colors duration-300"
            >
              Dołącz do listy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
