"use client";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20">
      <div className="container mx-auto px-4 space-y-10">
        {/* FELVEZETŐ */}
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Két módon tudunk segíteni
          </h2>
          <p className="text-sm md:text-base text-white/80">
            Válaszd azt, ami jobban illik hozzád – kész, válogatott ajánlatok
            vagy teljesen rád szabott útiterv.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* 1. Prémium ajánlatcsoport */}
          <div
            id="premium-service"
            className="bg-white/85 border border-white/70 rounded-[2rem] shadow-xl backdrop-blur-md p-8 md:p-10 flex flex-col"
          >
            {/* badge / címke */}
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1 text-xs font-semibold text-sky-700 w-fit mx-auto md:mx-0">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              <span>Prémium ajánlatcsoport</span>
            </div>

            {/* cím + intro */}
            <div className="mt-5 space-y-2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Folyamatosan érkező, válogatott ajánlatok
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-lg mx-auto md:mx-0">
                Előfizetőként elsőként kapod meg a szerintünk{" "}
                <span className="font-semibold text-slate-900">
                  legjobb, valós árú repülő + szállás kombinációkat
                </span>
                . Nem kell naponta böngészned, mi szűrjük helyetted a zajt.
              </p>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-6" />

            {/* lépések */}
            <div className="w-full max-w-md mx-auto space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white shadow-sm">
                  1
                </div>
                <div className="space-y-1 text-left">
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="text-sky-700">Előfizetsz</span> a prémium
                    csoportba
                  </p>
                  <p className="text-sm text-slate-700">
                    Kiválasztod a neked való csomagot – városnézés, tengerpart
                    vagy vegyes fókusz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white shadow-sm">
                  2
                </div>
                <div className="space-y-1 text-left">
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="text-sky-700">Kapod a friss ajánlatokat</span>
                  </p>
                  <p className="text-sm text-slate-700">
                    Heti több alkalommal küldünk konkrét, foglalható ajánlatokat
                    valós árakkal, linkekkel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white shadow-sm">
                  3
                </div>
                <div className="space-y-1 text-left">
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="text-sky-700">Te választasz és foglalsz</span>
                  </p>
                  <p className="text-sm text-slate-700">
                    A számodra szimpatikus ajánlatot pár kattintással lefoglalod
                    – minden infó egy helyen.
                  </p>
                </div>
              </div>
            </div>

            {/* chipek */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-[11px] text-slate-700 md:justify-start">
              <span className="rounded-full bg-slate-100 px-3 py-1 border border-slate-200">
                Szeretsz kész ötletekből választani
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 border border-slate-200">
                Fontos az ár-érték arány
              </span>
            </div>

            {/* CTA SÁV (erősebb, látható gomb) */}
            <div className="mt-8 pt-6 border-t border-slate-200/70">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold text-slate-900">
                    Belépés a prémium ajánlatokhoz
                  </p>
                  <p className="text-xs text-slate-600">
                    Konkrét dátumok + foglalási linkek a prémium oldalon.
                  </p>
                </div>

                <a
                  href="/premium"
                  className="inline-flex items-center justify-center gap-2 rounded-full
                             bg-sky-600 px-6 py-3 text-sm font-semibold text-white
                             shadow-lg shadow-sky-600/30
                             transition hover:bg-sky-700 hover:-translate-y-[1px] hover:shadow-xl
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Megnézem a prémium csoportot <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* 2. Személyre szabott utazástervezés */}
          <div
            id="custom-service"
            className="bg-white/85 border border-white/70 rounded-[2rem] shadow-xl backdrop-blur-md p-8 md:p-10 flex flex-col"
          >
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold text-emerald-700 w-fit mx-auto md:mx-0">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Személyre szabott utazástervezés</span>
            </div>

            {/* cím + intro */}
            <div className="mt-5 space-y-2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Teljesen rád szabott útiterv, egyéni áron
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-lg mx-auto md:mx-0">
                Ha konkrét, személyes igényeidhez szabott utat szeretnél, akkor
                ezt a szolgáltatásunkat neked találtuk ki –{" "}
                <span className="font-semibold text-slate-900">
                  nem sablon, hanem ténylegesen rád hangolt útiterv
                </span>
                .
              </p>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-6" />

            {/* lépések */}
            <div className="w-full max-w-md mx-auto space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white shadow-sm">
                  1
                </div>
                <div className="space-y-1 text-left">
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="text-emerald-700">
                      Felveszed velünk a kapcsolatot
                    </span>
                  </p>
                  <p className="text-sm text-slate-700">
                    Leírod, mikor utaznál, honnan-hova, mekkora kerettel, kivel
                    és milyen hangulatra vágysz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white shadow-sm">
                  2
                </div>
                <div className="space-y-1 text-left">
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="text-emerald-700">Összerakunk több opciót</span>
                  </p>
                  <p className="text-sm text-slate-700">
                    Repülő + szállás + program kombinációkat állítunk össze,
                    átlátható ajánlatban, valós árakkal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white shadow-sm">
                  3
                </div>
                <div className="space-y-1 text-left">
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="text-emerald-700">
                      Te választasz, mi pedig végigkísérünk
                    </span>
                  </p>
                  <p className="text-sm text-slate-700">
                    Kiválasztod a számodra ideális verziót, mi pedig elküldjük a
                    foglalási linkeket és extra úti tippeket.
                  </p>
                </div>
              </div>
            </div>

            {/* chipek */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-[11px] text-slate-700 md:justify-start">
              <span className="rounded-full bg-slate-100 px-3 py-1 border border-slate-200">
                Konkrét elképzelésed van
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 border border-slate-200">
                Nincs időd keresgélni
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 border border-slate-200">
                Rád szabott útitervet szeretnél
              </span>
            </div>

            {/* CTA SÁV (kontrasztos, “pro” outline gomb) */}
            <div className="mt-8 pt-6 border-t border-slate-200/70">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold text-slate-900">
                    Kérj személyre szabott opciókat
                  </p>
                  <p className="text-xs text-slate-600">
                    1 rövid egyeztetés után 2–3 útvariációt küldünk.
                  </p>
                </div>

                <a
                  href="/szemely"
                  className="inline-flex items-center justify-center gap-2 rounded-full
                             border border-emerald-500 bg-white px-6 py-3 text-sm font-semibold text-emerald-800
                             shadow-lg shadow-emerald-500/10
                             transition hover:bg-emerald-50 hover:-translate-y-[1px] hover:shadow-xl
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Kérek személyre szabott ajánlatot <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
