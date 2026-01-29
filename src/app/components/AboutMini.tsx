export default function AboutMini() {
  return (
    <section id="mit-csinalunk" className="w-full py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* FŐ CÍM */}
        <h2 className="mb-6 text-3xl md:text-4xl font-semibold text-white">
          Mit csinálunk valójában?
        </h2>

        {/* KIEMELT GLASS KÁRTYA */}
        <div
          className="mx-auto max-w-4xl rounded-[2rem] bg-white/85 border border-white/70 
             shadow-xl backdrop-blur-md px-6 sm:px-10 py-8 sm:py-10 space-y-6"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 leading-relaxed">
            Nem klasszikus utazási iroda vagyunk, hanem egy
            <span className="text-brand">
              {" "}
              utazóbarát, független tervező partner
            </span>
            .
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Abban segítünk, hogy a keretedből a lehető legtöbbet hozd ki{" "}
            <span className="font-medium text-slate-900">
              valódi, most is foglalható árak
            </span>{" "}
            alapján, rejtett költségek nélkül. Két fő szolgáltatásunk van, hogy
            mindenki megtalálja a számára legkényelmesebb utat.
          </p>

          {/* Két fő szolgáltatás vizuális kiemelése */}
          <div className="mt-6 grid gap-5 text-left md:grid-cols-2">
            {/* Prémium ajánlatcsoport kártya */}
            <a
              href="/premium"
              className="block cursor-pointer rounded-2xl border border-sky-100 bg-sky-50/80 
                 px-5 py-5 space-y-3 shadow-sm transition-transform hover:-translate-y-[2px] hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-sky-700">
                <span className="text-lg">✨</span>
                <span>Prémium ajánlatcsoport</span>
              </div>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                Válogatott, valós árú repülő + szállás ajánlatok, rendszeresen
                frissítve. Ideális, ha inspirációt keresel, és szeretsz kész
                csomagokból választani.
              </p>
            </a>

            {/* Személyre szabott tervezés kártya */}
            <a
              href="/szemely"
              className="block cursor-pointer rounded-2xl border border-emerald-100 bg-emerald-50/80 
                 px-5 py-5 space-y-3 shadow-sm transition-transform hover:-translate-y-[2px] hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                <span className="text-lg">🎯</span>
                <span>Személyre szabott tervezés</span>
              </div>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                Teljesen rád szabott útiterv, egyéni árazással, rövid
                egyeztetés után. Akkor jó, ha van elképzelésed, de nem akarsz
                órákat keresgélni.
              </p>
            </a>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-500">
            Nem tudod, melyik való neked? Írj nekünk, segítünk eldönteni.
          </p>
        </div>
      </div>
    </section>
  );
}
