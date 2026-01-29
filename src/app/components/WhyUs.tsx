export default function WhyUs() {
  return (
    <section id="why-us" className="w-full py-20">
      <div className="container mx-auto space-y-16 px-4">
        {/* Fejléc */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50/80 px-4 py-1 text-xs font-semibold text-sky-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            <span>Miért minket válassz?</span>
          </div>

          <h2 className="text-3xl font-bold text-white drop-shadow md:text-4xl">
            Miért éri meg a TwoAway-jel utazni?
          </h2>

          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            Valódi árak, időspórolás, őszinte tanácsadás &amp; social-first
            szemlélet –{" "}
            <span className="font-semibold text-white">
              minden a tiszta és valós utazási döntésekért.
            </span>
          </p>
        </div>

        {/* KÁRTYÁK GRID / MOBILON SWIPE */}
        <div className="grid gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:grid-cols-2 md:overflow-visible md:snap-none xl:grid-cols-4">
          {/* 1. Kártya */}
          <div className="snap-center flex min-w-[85%] flex-shrink-0 flex-col space-y-3 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl md:min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700">
              <span className="text-lg">💸</span>
              <span>Valódi, átlátható árak</span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Nincs „meglepi” a végén
            </h3>

            <p className="text-sm leading-relaxed text-slate-700">
              Mindig külön bontjuk a repülőjegyet, szállást, extra költségeket –
              pontosan látod, mire mennyit költesz.
            </p>
          </div>

          {/* 2. Kártya */}
          <div className="snap-center flex min-w-[85%] flex-shrink-0 flex-col space-y-3 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl md:min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <span className="text-lg">⏱️</span>
              <span>Időt és energiát spórolunk</span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Nem neked kell száz oldalt átnézned
            </h3>

            <p className="text-sm leading-relaxed text-slate-700">
              Mi szűrjük le a zajt – csak valóban a keretedhez és stílusodhoz
              illő opciókat kapod meg.
            </p>
          </div>

          {/* 3. Kártya */}
          <div className="snap-center flex min-w-[85%] flex-shrink-0 flex-col space-y-3 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl md:min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-700">
              <span className="text-lg">📍</span>
              <span>Utazóbarát szemlélet</span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Nem prospektusból dolgozunk
            </h3>

            <p className="text-sm leading-relaxed text-slate-700">
              Olyan helyeket ajánlunk, amiket mi is bejárnánk – TikTokon és
              Instán is mutatjuk az ötleteinket.
            </p>
          </div>

          {/* 4. Kártya */}
          <div className="snap-center flex min-w-[85%] flex-shrink-0 flex-col space-y-3 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl md:min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700">
              <span className="text-lg">🧩</span>
              <span>Rád szabott együttműködés</span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Te döntöd el, meddig kísérjünk
            </h3>

            <p className="text-sm leading-relaxed text-slate-700">
              Elég a prémium ajánlatcsoport? Vagy teljesen egyedi tervezést
              szeretnél? Mi igazodunk hozzád.
            </p>
          </div>
        </div>

        {/* Mini „bizalom” sor */}
        <div className="border-t border-white/40 pt-8">
          <div className="grid gap-6 text-center md:grid-cols-3">
            <div className="space-y-1">
              <p className="text-xl font-bold text-white">Valós árak</p>
              <p className="text-sm text-white/80">
                Aktuális árakkal, rejtett díjak nélkül.
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-xl font-bold text-white">Transzparens bontás</p>
              <p className="text-sm text-white/80">
                Minden költség külön jelölve.
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-xl font-bold text-white">
                Social-first szemlélet
              </p>
              <p className="text-sm text-white/80">
                Tippek &amp; kulisszák TikTokon &amp; Instagramon.
              </p>
            </div>
          </div>
        </div>

        {/* CTA a blokk végén */}
        <div className="pt-4 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-200 transition hover:text-white"
          >
            Szeretnéd látni, hogyan működik ez élőben? →
            <span>Nézd meg a TikTok videóinkat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
