"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-[12px] border-b border-border px-4 md:px-8 py-3 flex justify-between items-center transition-[background,border-color] duration-300">
      <a href="#" className="flex items-center gap-2.5 no-underline font-bold text-base text-text-primary transition-colors duration-300">
          <Image
            src="/images/logo-outline.png"
            alt="Polish Footballers Abroad logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg bg-[#E62129] p-0.5"
          />
          Polish Footballers Abroad
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
        </div>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 bg-bg-card border border-border rounded-full p-1 cursor-pointer transition-[background,border-color] duration-300"
          title="Zmień theme"
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
          className="bg-accent text-white border-none px-4 py-2 rounded-md text-sm font-semibold no-underline hover:bg-accent-hover transition-colors duration-300 whitespace-nowrap"
        >
          Zapisz się
        </a>
      </div>
    </nav>
  );
}
