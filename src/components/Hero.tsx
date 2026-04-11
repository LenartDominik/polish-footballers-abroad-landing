export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-[120px] pb-20 bg-bg-primary transition-[background-color] duration-300">
      <div className="inline-flex items-center gap-2 bg-bg-card border border-border px-4 py-1.5 rounded-full text-[13px] text-text-secondary mb-6 transition-[background-color,border-color] duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
        Już wkrótce — zapisz się na listę oczekujących
      </div>

      <h1 className="text-[48px] font-extrabold leading-[1.1] mb-2 max-w-[700px] max-md:text-[32px] max-sm:text-[28px]">
        Śledź polskich piłkarzy{" "}
        <span className="text-accent">za granicą</span>
      </h1>

      <p className="text-base text-text-secondary max-w-[600px] mx-auto mt-4 mb-8 leading-relaxed transition-[color] duration-300">
        Wszystkie najważniejsze informacje dostajesz w jednym miejscu. W kilka
        sekund sprawdzisz minuty, formę, występy, bramki i asysty polskich
        piłkarzy grających za granicą — bez chaosu i bez straty czasu.
      </p>

      <div className="flex gap-3 mb-12 max-md:flex-col max-md:items-center">
        <a
          href="#lista"
          className="bg-cta-bg text-white border-none px-8 py-3.5 rounded-lg text-[15px] font-semibold no-underline hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(230,33,41,0.3)] transition-[transform,box-shadow] duration-200"
        >
          Dołącz teraz - pierwsze 100 miejsc
        </a>
        <a
          href="#features"
          className="bg-transparent text-text-primary border border-border px-7 py-3.5 rounded-lg text-[15px] font-medium no-underline hover:border-accent hover:text-accent transition-[border-color,color] duration-300"
        >
          Zobacz, jak to działa
        </a>
      </div>

      <div className="flex gap-12 justify-center max-md:gap-6 max-md:flex-wrap">
        <div className="text-center">
          <div className="font-mono text-[32px] font-bold text-accent max-md:text-2xl">
            50+
          </div>
          <div className="text-[13px] text-text-muted mt-1">Piłkarzy</div>
        </div>
        <div className="text-center">
          <div className="font-mono text-[32px] font-bold text-accent max-md:text-2xl">
            12
          </div>
          <div className="text-[13px] text-text-muted mt-1">Lig</div>
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
