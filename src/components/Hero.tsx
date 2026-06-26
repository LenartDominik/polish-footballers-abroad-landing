export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-[120px] pb-20 bg-bg-primary transition-[background-color] duration-300">
      <div className="inline-flex items-center gap-2 bg-bg-card border border-border px-4 py-1.5 rounded-full text-[13px] text-text-secondary mb-6 transition-[background-color,border-color] duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
        Już wkrótce — dołącz do listy oczekujących
      </div>

      <h1 className="text-[48px] font-extrabold leading-[1.1] mb-2 max-w-[700px] max-md:text-[32px] max-sm:text-[28px]">
        Koniec z szukaniem
      </h1>

      <p className="text-[48px] font-extrabold leading-[1.1] max-w-[700px] max-md:text-[32px] max-sm:text-[28px]">
        60+ polskich piłkarzy{" "}
        <span className="text-accent">za granicą</span> — w jednym miejscu
      </p>

      <p className="text-base text-text-secondary max-w-[600px] mx-auto mt-4 mb-8 leading-relaxed transition-[color] duration-300">
        Masz dość przeskakiwania między dziesiątkami zakładek, żeby sprawdzić formę polskich piłkarzy za granicą? Minuty, bramki, asysty, kartki i oceny znajdziesz w jednej aplikacji — szybko, wygodnie i zawsze pod ręką.
        <br />Porównasz zawodników w kilka sekund.
      </p>

      <div className="flex gap-3 mb-12 max-md:flex-col max-md:items-center">
        <a
          href="#demo"
          className="bg-cta-bg text-white border-none px-8 py-3.5 rounded-lg text-[15px] font-semibold no-underline hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(230,33,41,0.3)] transition-[transform,box-shadow] duration-200"
        >
          Zobacz demo
        </a>
        <a
          href="#lista"
          className="bg-transparent text-text-primary border border-border px-7 py-3.5 rounded-lg text-[15px] font-medium no-underline hover:border-accent hover:text-accent transition-[border-color,color] duration-300"
        >
          Zarezerwuj miejsce
        </a>
      </div>

      <div className="flex gap-12 justify-center max-md:gap-6 max-md:flex-wrap">
        <div className="text-center">
          <div className="font-mono text-[32px] font-bold text-accent max-md:text-2xl">
            60+
          </div>
          <div className="text-[13px] text-text-muted mt-1">Piłkarzy</div>
        </div>
        <div className="text-center">
          <div className="font-mono text-[32px] font-bold text-accent max-md:text-2xl">
            46
          </div>
          <div className="text-[13px] text-text-muted mt-1">Rozgrywek</div>
        </div>
        <div className="text-center">
          <div className="font-mono text-[32px] font-bold text-accent max-md:text-2xl">
            1000+
          </div>
          <div className="text-[13px] text-text-muted mt-1">Meczów</div>
        </div>
        <div className="text-center">
          <div className="font-mono text-[32px] font-bold text-accent max-md:text-2xl">
            24/7
          </div>
          <div className="text-[13px] text-text-muted mt-1">Aktualizacje</div>
        </div>
      </div>
    </section>
  );
}
