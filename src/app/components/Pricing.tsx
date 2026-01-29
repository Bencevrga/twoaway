import React from 'react';

interface PricingProps {
  basePath?: string;
}

export const Pricing: React.FC<PricingProps> = ({ basePath = '' }) => {
  const premiumFrom = "1 990 Ft / hó-tól";
  const customRange = "8 000–15 000 Ft / útiterv";

  return (
    <section id="pricing-teaser" className="w-full py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl space-y-10 text-center">
        
        {/* Fejléc / felvezető */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-sky-100 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-sky-300"></span>
            Milyen árakkal dolgozunk?
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Áttekintés a szolgáltatások költségeiről
          </h2>

          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            A végső költségek minden esetben az aktuális piaci árak és az egyedi igények alapján kerülnek meghatározásra. Az alábbi összegek tájékoztató jellegűek, és segítenek eligazodni a különböző szolgáltatási szintek között.
          </p>
        </div>

        {/* Két árazási kártya */}
        <div className="grid gap-6 md:grid-cols-2 text-left max-w-4xl mx-auto">
          
          {/* Prémium ajánlatcsoport */}
          <div className="rounded-[2rem] border border-white/70 bg-white/85 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-[2px] transition px-6 md:px-8 py-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700">
              <span className="text-lg">✨</span>
              Prémium ajánlatcsoport
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-slate-900">
              {premiumFrom}
            </h3>

            <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
              Előfizetéses rendszerben, válogatott repülő + szállás ajánlatokkal,
              heti több frissítéssel. Ideális, ha inspirációt keresel és szeretsz
              kész csomagokból választani.
            </p>

            <ul className="mt-1 space-y-1.5 text-sm text-slate-700">
              <li>• Különböző fókuszú csomagok (városnézés, tengerpart, vegyes).</li>
              <li>• Mindig valós, most is foglalható árakból számolva.</li>
              <li>• Előfizetés bármikor megszüntethető.</li>
            </ul>
          </div>

          {/* Személyre szabott tervezés */}
          <div className="rounded-[2rem] border border-white/70 bg-white/85 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-[2px] transition px-6 md:px-8 py-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <span className="text-lg">🎯</span>
              Személyre szabott tervezés
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-slate-900">
              Általában {customRange}
            </h3>

            <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
              Teljesen rád szabott útiterv, egyéni árazással – a konkrét összeg attól függ,
              mennyire összetett útról, hány főről és hány napról van szó.
            </p>

            <ul className="mt-1 space-y-1.5 text-sm text-slate-700">
              <li>• Repülő + szállás + program kombinációk egyben.</li>
              <li>• Átlátható ajánlat, valós árakkal, foglalási linkekkel.</li>
              <li>• Ideális, ha konkrét elképzelésed van, de nincs időd keresgélni.</li>
            </ul>
          </div>
        </div>

        {/* Link a részletes árakhoz */}
        <div className="text-center">
          <a
            href={`${basePath}/arak`}
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-100 hover:text-white transition"
          >
            Pontos árakra vagy kíváncsi?
            <span className="underline decoration-sky-300/80 underline-offset-4">
              Nézd meg a részletes díjainkat →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;