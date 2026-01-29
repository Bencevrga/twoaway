"use client";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({
  title = "Találd meg a következő álomutadat",
  subtitle = "Inspirációtól a megvalósításig.",
}: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Tartalom */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-24 pb-20 text-center text-white">
        {/* Cím */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight drop-shadow">
          {title}
        </h1>

        {/* Alcím */}
        <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg md:text-xl text-white/85 font-light">
          {subtitle}
        </p>

        {/* CTA BLOKK – GLASS CONTAINER */}
        <div className="mt-12 flex justify-center">
          <div
            className="
              flex gap-4
              rounded-full
              bg-white/10 backdrop-blur-xl
              px-4 py-3
              border border-white/20
            "
          >
            {/* Primary CTA */}
            <a
              href="#trips"
              className="
                inline-flex items-center justify-center
                rounded-full
                px-7 py-3
                text-sm sm:text-base font-medium
                text-slate-900
                bg-white
                transition
                hover:bg-white/90
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/70
              "
            >
              Felfedezés
            </a>

            {/* Secondary CTA */}
            <a
              href="/szemely"
              className="
                inline-flex items-center justify-center
                rounded-full
                px-7 py-3
                text-sm sm:text-base font-medium
                text-white
                border border-white/40
                bg-transparent
                transition
                hover:bg-white/10
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/60
              "
            >
              Ajánlatkérés
            </a>
          </div>
        </div>

        {/* Lábléc szöveg */}
        <p className="mt-6 text-xs sm:text-sm text-white/65">
          Nem foglalunk helyetted – csak segítünk megtalálni a legjobb lehetőségeket.
        </p>
      </div>
    </section>
  );
}
