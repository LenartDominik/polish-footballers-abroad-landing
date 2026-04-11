import Image from "next/image";

const screenshots = [
  {
    src: "/images/search.png",
    alt: "Pasek wyszukiwarki z wpisanym nazwiskiem piłkarza i listą filtrowanych wyników poniżej",
    label: "Wyszukiwarka — znajdź piłkarza po nazwisku albo klubie",
  },
  {
    src: "/images/player-stats.png",
    alt: "Karta statystyk gracza z czterema kolumnami: liga krajowa, rozgrywki europejskie, puchary krajowe i suma sezonu",
    label: "Statystyki gracza — osobno dla ligi, pucharów krajowych i europejskich pucharów",
  },
  {
    src: "/images/player-comparison.png",
    alt: "Dwóch piłkarzy obok siebie z wykresami radarowymi porównującymi ich statystyki",
    label: "Porównywarka — porównaj dwóch graczy z pola albo dwóch bramkarzy",
  },
  {
    src: "/images/average-positions.png",
    alt: "Mapa boiska z zielonym tłem i kropkami oznaczającymi średnie pozycje zawodników podczas meczu",
    label: "Średnie pozycje — zobacz, gdzie na boisku gra zawodnik średnio w ciągu 90 minut",
  },
];

export default function Demo() {
  return (
    <section
      id="demo"
      className="py-20 px-6 bg-bg-primary transition-[background-color] duration-300"
    >
      <div className="text-center mb-10">
        <h2 className="text-[32px] font-bold mb-3">Zobacz demo</h2>
        <div className="w-[60px] h-[3px] bg-divider mx-auto rounded-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
        {screenshots.map((s) => (
          <div
            key={s.src}
            className="bg-bg-card border border-border rounded-xl overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-[transform,box-shadow,background-color,border-color] duration-200"
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={400}
              height={200}
              className="w-full h-[200px] object-cover bg-bg-secondary"
            />
            <div className="py-3 px-4 text-[13px] text-text-secondary border-t border-border transition-[color,border-color] duration-300">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
