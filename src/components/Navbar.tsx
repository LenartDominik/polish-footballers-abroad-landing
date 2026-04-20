"use client";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-[12px] border-b border-border px-8 py-3.5 flex justify-between items-center transition-[background,border-color] duration-300">
      <a href="#" className="flex flex-col no-underline">
        <div className="flex items-center gap-2.5 font-bold text-base text-text-primary transition-colors duration-300">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            <rect width="40" height="40" rx="8" fill="#E62129" />
            <circle
              cx="20"
              cy="18"
              r="9"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M20 9 L22 13 L26 13 L23 16 L24 20 L20 18 L16 20 L17 16 L14 13 L18 13Z"
              fill="white"
              opacity="0.3"
            />
            <rect
              x="15"
              y="27"
              width="10"
              height="2"
              rx="1"
              fill="white"
              opacity="0.6"
            />
            <rect
              x="17"
              y="30"
              width="6"
              height="2"
              rx="1"
              fill="white"
              opacity="0.4"
            />
          </svg>
          Polish Footballers Abroad
        </div>
        <span className="text-[11px] text-text-muted tracking-wide ml-[42px] -mt-0.5 transition-colors duration-300">
          tracker stats
        </span>
      </a>

      <div className="flex items-center gap-6">
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
          className="bg-accent text-white border-none px-5 py-2 rounded-md text-sm font-semibold no-underline hover:bg-accent-hover transition-colors duration-300"
        >
          Zapisz się
        </a>
      </div>
    </nav>
  );
}
