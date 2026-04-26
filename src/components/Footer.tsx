import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-6 px-8 border-t border-border flex justify-between items-center bg-bg-primary max-md:flex-col max-md:gap-3 max-md:text-center transition-[background-color,border-color] duration-300">
      <div className="flex flex-col">
        <div className="flex items-center gap-2.5 text-base font-bold text-text-primary transition-[color] duration-300">
          <Image
            src="/images/logo-outline.png"
            alt="Polish Footballers Abroad logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg bg-[#E62129] p-0.5"
          />
          Polish Footballers Abroad
        </div>
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
