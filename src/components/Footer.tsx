export default function Footer() {
  return (
    <footer className="py-6 px-8 border-t border-border flex justify-between items-center bg-bg-primary max-md:flex-col max-md:gap-3 max-md:text-center transition-[background-color,border-color] duration-300">
      <div className="flex flex-col">
        <div className="flex items-center gap-2.5 text-base font-bold text-text-primary transition-[color] duration-300">
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
        <span className="text-[11px] text-text-muted tracking-wide ml-[42px] -mt-0.5 transition-[color] duration-300">
          tracker stats
        </span>
      </div>

      <div className="flex gap-12">
        <a
          href="/privacy"
          className="text-text-muted no-underline text-[13px] hover:text-accent transition-colors duration-300"
        >
          Polityka prywatności
        </a>
        <a
          href="/terms"
          className="text-text-muted no-underline text-[13px] hover:text-accent transition-colors duration-300"
        >
          Regulamin
        </a>
        <a
          href="mailto:kontakt@polishfootballersabroad.pl"
          className="text-text-muted no-underline text-[13px] hover:text-accent transition-colors duration-300"
        >
          Kontakt
        </a>
      </div>

      <div className="text-text-muted text-xs transition-[color] duration-300">
        &copy; 2026 Polish Footballers Abroad. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
