export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-bg-secondary transition-[background-color] duration-300"
    >
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-bold mb-3">Zobacz, jak to działa</h2>
        <div className="w-[60px] h-[3px] bg-divider mx-auto mb-4 rounded-sm" />
        <p className="text-text-secondary text-base transition-[color] duration-300">
          Wszystko czego potrzebujesz w jednym miejscu
        </p>
      </div>

      {/* Value proposition cards — 3 wider */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
        <div className="bg-bg-card border border-border rounded-xl p-7 text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-[transform,box-shadow,background-color,border-color] duration-200">
          <div className="text-[28px] mb-3">📱</div>
          <h3 className="text-base font-semibold mb-2.5 text-text-primary">
            Jeden czytelny dashboard
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed transition-[color] duration-300">
            Zapomnij o dziesiątkach otwartych kart w przeglądarce. Wszystkie
            statystyki masz pod ręką na jednym ekranie.
          </p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-7 text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-[transform,box-shadow,background-color,border-color] duration-200">
          <div className="text-[28px] mb-3">⚡</div>
          <h3 className="text-base font-semibold mb-2.5 text-text-primary">
            Dane w czasie rzeczywistym
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed transition-[color] duration-300">
            Otrzymuj natychmiastowe aktualizacje o występach, golach i asystach
            Twoich ulubionych zawodników.
          </p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-7 text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-[transform,box-shadow,background-color,border-color] duration-200">
          <div className="text-[28px] mb-3">🔔</div>
          <h3 className="text-base font-semibold mb-2.5 text-text-primary">
            Spersonalizowane powiadomienia
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed transition-[color] duration-300">
            Skonfiguruj alerty dla konkretnych piłkarzy, aby nigdy nie
            przegapić ważnego momentu ich kariery.
          </p>
        </div>
      </div>

      {/* Feature cards — 4 narrower */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[900px] mx-auto mt-12">
        <div className="bg-bg-card border border-border rounded-xl py-7 px-5 text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-[transform,box-shadow,background-color,border-color] duration-200">
          <div className="w-14 h-14 rounded-xl bg-bg-primary border border-border flex items-center justify-center mx-auto mb-4 text-[26px] transition-[background-color,border-color] duration-300">
            🔍
          </div>
          <h3 className="text-[15px] font-semibold mb-2">Wyszukiwarka</h3>
          <p className="text-[13px] text-text-secondary leading-relaxed transition-[color] duration-300">
            Znajdź polskiego piłkarza po nazwisku lub klubie
          </p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl py-7 px-5 text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-[transform,box-shadow,background-color,border-color] duration-200">
          <div className="w-14 h-14 rounded-xl bg-bg-primary border border-border flex items-center justify-center mx-auto mb-4 text-[26px] transition-[background-color,border-color] duration-300">
            📊
          </div>
          <h3 className="text-[15px] font-semibold mb-2">Statystyki gracza</h3>
          <p className="text-[13px] text-text-secondary leading-relaxed transition-[color] duration-300">
            Wszystkie statystyki z podziałem na ligę, puchary krajowe i
            rozgrywki europejskie
          </p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl py-7 px-5 text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-[transform,box-shadow,background-color,border-color] duration-200">
          <div className="w-14 h-14 rounded-xl bg-bg-primary border border-border flex items-center justify-center mx-auto mb-4 text-[26px] transition-[background-color,border-color] duration-300">
            ⚖️
          </div>
          <h3 className="text-[15px] font-semibold mb-2">Porównywarka</h3>
          <p className="text-[13px] text-text-secondary leading-relaxed transition-[color] duration-300">
            Porównaj dwóch graczy z pola albo dwóch bramkarzy
          </p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl py-7 px-5 text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-[transform,box-shadow,background-color,border-color] duration-200">
          <div className="w-14 h-14 rounded-xl bg-bg-primary border border-border flex items-center justify-center mx-auto mb-4 text-[26px] transition-[background-color,border-color] duration-300">
            📍
          </div>
          <h3 className="text-[15px] font-semibold mb-2">Średnie pozycje</h3>
          <p className="text-[13px] text-text-secondary leading-relaxed transition-[color] duration-300">
            Zobacz, gdzie na boisku średnio gra zawodnik w ciągu 90 minut
          </p>
        </div>
      </div>
    </section>
  );
}
