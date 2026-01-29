import Link from "next/link";

type Step = { n: string; title: string; text: string };
type FAQ = { q: string; a: string };

const steps: Step[] = [
  {
    n: "1",
    title: "Rövid űrlap / üzenet",
    text: "Megírod a dátumot, indulási várost, keretet, utazók számát és a preferenciákat (city, tengerpart, programok).",
  },
  {
    n: "2",
    title: "Opciók összerakása",
    text: "Összeállítunk 2–4 valós árú repülő + szállás opciót foglalási linkekkel és rövid megjegyzésekkel.",
  },
  {
    n: "3",
    title: "Te választasz",
    text: "Kiválasztod a neked legjobb verziót. Ha kell, segítünk finomhangolni (pl. más dátum, más városrész).",
  },
  {
    n: "4",
    title: "Útiterv & tippek",
    text: "Kapsz egy átlátható összefoglalót: költségbontás, ajánlott programok, közlekedés, időzítés — hogy könnyű legyen dönteni.",
  },
];

const faqs: FAQ[] = [
  {
    q: "Ti foglaltok helyettem?",
    a: "Nem. Mi a keresést, szűrést és a döntés előkészítését csináljuk meg. A foglalás minden esetben a hivatalos szolgáltatónál történik.",
  },
  {
    q: "Mennyi idő alatt kapok ajánlatot?",
    a: "Általában 24–72 órán belül (a kérés bonyolultságától és szezontól függően).",
  },
  {
    q: "Mi alapján számoljátok az árat?",
    a: "A munka összetettsége számít (napok száma, útvonalak, több város, különleges igények). Rövid, egyszerű utak olcsóbbak, komplexebb körutak drágábbak.",
  },
  {
    q: "Ha nem tetszenek az opciók?",
    a: "Általában 1 kör finomítást beleteszünk (pl. más időpont, más szállástípus). Teljes újratervezés külön egyeztetés alapján.",
  },
  {
    q: "Kapok programjavaslatokat is?",
    a: "Igen. A csomagtól függően mini útitervet, must-see listát, közlekedési tippeket és költségbontást is adunk.",
  },
];

export default function SzemelyPage() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative w-full">
        <div className="container mx-auto px-4 pt-10 md:pt-14 pb-10">
          <div className="mx-auto max-w-5xl rounded-[2.25rem] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.18)] overflow-hidden">
            <div className="p-7 sm:p-10 md:p-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Személyre szabott utazástervezés
                </span>
                <span className="text-[12px] text-slate-500">
                  1:1 tervezés helyett: gyors, átlátható opciók valós árakon
                </span>
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
                Kérj teljesen rád szabott útitervet — mi összerakjuk az opciókat, te döntesz.
              </h1>

              <p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-700 leading-relaxed">
                Ha van elképzelésed, de <span className="font-semibold text-slate-900">nincs időd órákat keresgélni</span>,
                akkor ez neked szól. Valós árú repülő + szállás kombinációkat adunk foglalási linkekkel,
                költségbontással és rövid tippekkel — hogy könnyű legyen választani.
              </p>

              {/* HERO CTA (letisztult) */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#ajanlatkeres"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold
                             bg-emerald-600 text-white shadow-lg shadow-emerald-600/25
                             hover:shadow-xl hover:-translate-y-[1px] transition
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/45"
                >
                  Kérek személyre szabott ajánlatot →
                </a>

                <Link
                  href="/premium"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold
                             border border-slate-200 bg-white text-slate-900 shadow-sm
                             hover:bg-slate-50 hover:-translate-y-[1px] transition
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40"
                >
                  Inkább a prémium csomagok érdekelnek
                </Link>
              </div>

              <p className="mt-5 text-xs text-slate-500">
                Megjegyzés: A repjegy- és szállásárak gyorsan változnak — mindig az aktuálisan foglalható opciókat küldjük.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MIKOR AJÁNLOTT + MIT KAPSZ */}
      <section className="w-full py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/60 bg-white/85 backdrop-blur-xl shadow-xl p-7 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[12px] font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                Mikor jó választás?
              </div>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">
                Ha gyors döntést szeretnél, felesleges körök nélkül
              </h2>

              <ul className="mt-5 space-y-3 text-sm md:text-[15px] text-slate-700">
                {[
                  "Konkrét dátumod van, de bizonytalan vagy a legjobb útvonalban / átszállásban.",
                  "Szeretnél valós árakat és foglalható linkeket — nem általános tippeket.",
                  "Nem akarsz 20 oldalt átnézni, inkább 2–4 jó opciót néznél meg.",
                  "Páros / baráti / családi utat tervezel és fontos a költségek átláthatósága.",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-500 flex-none" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <p className="text-sm font-semibold text-emerald-800">
                  Extra: “időzítés” tippek
                </p>
                <p className="mt-1 text-sm text-emerald-800/90">
                  Megírjuk, mikor érdemes foglalni (ha van mozgástér), és mire figyelj a csomagoknál (poggyász, transzfer, városrész).
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/85 backdrop-blur-xl shadow-xl p-7 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[12px] font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Mit kapsz meg?
              </div>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">
                Konkrét opciók, valós árak, átlátható összefoglaló
              </h2>

              <div className="mt-5 grid gap-3">
                {[
                  { title: "2–4 utazási opció", text: "Repülő + szállás kombinációk, többféle stílusban." },
                  { title: "Foglalási linkek", text: "Közvetlen linkek a hivatalos szolgáltatókhoz." },
                  { title: "Költségbontás", text: "Látod, miből áll össze az ár (és mi a “rejtett” rész)." },
                  { title: "Mini útiterv / tippek", text: "Ajánlott programok, közlekedés, városrészek — csomagtól függően." },
                ].map((b) => (
                  <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">{b.title}</p>
                    <p className="mt-1 text-sm text-slate-700 leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Nem tartalmazza
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {[
                    "Foglalás intézése helyetted",
                    "Utazási iroda jellegű ügyintézés",
                    "100%-os árgarancia (a piac változhat)",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-400 flex-none" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOGYAN MŰKÖDIK */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl rounded-[2.25rem] border border-white/30 bg-white/70 backdrop-blur-2xl shadow-[0_18px_55px_rgba(0,0,0,0.18)] p-7 md:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow">
                A folyamat egyszerű és gyors
              </h2>
              <p className="mt-2 text-sm md:text-base text-white/80">
                Nem varázslat — csak jó szűrés és átlátható opciók.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold shadow-sm">
                      {s.n}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-2 text-sm text-slate-700 leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#ajanlatkeres"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold
                           bg-emerald-600 text-white shadow-lg shadow-emerald-600/25
                           hover:shadow-xl hover:-translate-y-[1px] transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/45"
              >
                Indulhat az ajánlatkérés →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ÁRAK / CSOMAGOK */}
      <section id="arak-csomagok" className="w-full py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl px-4 py-1 text-xs font-semibold text-sky-100 border border-white/20">
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                Árazás (irányadó)
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white drop-shadow">
                Mennyibe kerül a személyre szabott tervezés?
              </h2>
              <p className="mt-2 text-sm md:text-base text-white/80">
                A végösszeg az út bonyolultságától függ. Itt egy tiszta, induló struktúra.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {/* START */}
              <div className="rounded-[2rem] border border-white/60 bg-white/85 backdrop-blur-xl shadow-xl p-7 md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] font-semibold text-slate-700">
                  Start
                </div>
                <p className="mt-4 text-2xl font-semibold text-slate-900">
                  8 000 – 10 000 Ft
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Egyszerű city break / tengerpart 2–4 nap
                </p>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {[
                    "2–3 opció repülő + szállás",
                    "Foglalási linkek",
                    "Alap költségbontás",
                    "Rövid tippek (városrész/időzítés)",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-400 flex-none" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PLUS */}
              <div className="relative rounded-[2rem] border border-white/60 bg-white/90 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.18)] p-7 md:p-8 ring-2 ring-emerald-500/20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1 text-[12px] font-semibold text-white shadow-lg shadow-emerald-600/25">
                    ⭐ Ajánlott
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-700">
                  Plus
                </div>
                <p className="mt-4 text-2xl font-semibold text-slate-900">
                  10 000 – 13 000 Ft
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  4–7 nap, több igény / több opció
                </p>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {[
                    "3–4 opció repülő + szállás",
                    "Részletesebb költségbontás",
                    "Mini útiterv-vázlat (1–2 napos blokk)",
                    "Közlekedési és “hol érdemes lakni” tippek",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-500 flex-none" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PRO */}
              <div className="rounded-[2rem] border border-white/60 bg-white/85 backdrop-blur-xl shadow-xl p-7 md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[12px] font-semibold text-sky-700">
                  Pro
                </div>
                <p className="mt-4 text-2xl font-semibold text-slate-900">
                  13 000 – 15 000+ Ft
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Komplex út / körút / több város
                </p>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {[
                    "4+ opció, többféle útvonal",
                    "Komplexebb bontás (átszállások/napok)",
                    "Program-struktúra napokra bontva",
                    "Extra tippek (szezon, foglalás, költségcsapdák)",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-sky-500 flex-none" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-white/70">
              *A fenti árak irányadók. Pontos árat az ajánlatkérés után mondunk, amikor látjuk az út részleteit.
            </p>
          </div>
        </div>
      </section>

      {/* AJÁNLATKÉRÉS (ŰRLAP-BLOKK) */}
      <section id="ajanlatkeres" className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl rounded-[2.25rem] border border-white/30 bg-white/70 backdrop-blur-2xl shadow-[0_18px_55px_rgba(0,0,0,0.18)] p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow">
                  Ajánlatkérés 2 perc alatt
                </h2>
                <p className="mt-3 text-sm md:text-base text-white/80 max-w-xl">
                  Írd le röviden, mit szeretnél — mi pedig összerakjuk a legjobb opciókat.
                </p>

                <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-5">
                  <p className="text-sm font-semibold text-white">Mit érdemes megadni?</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    {[
                      "Mikor utaznál (fix dátum vagy rugalmas?)",
                      "Honnan indulsz (Budapest/Bécs stb.)",
                      "Hány fő, milyen szállás (hotel/apartman)",
                      "Keret (kb. mennyit szánsz rá)",
                      "Milyen hangulat: city / tengerpart / vegyes",
                    ].map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/60 flex-none" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* “Fake form” – vizuális, CTA-val */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
                <div className="grid gap-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="text-xs font-semibold text-slate-500">Indulás</p>
                      <p className="mt-1 text-sm font-medium text-slate-900">pl. Budapest</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="text-xs font-semibold text-slate-500">Dátum</p>
                      <p className="mt-1 text-sm font-medium text-slate-900">pl. márc. 14–17.</p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="text-xs font-semibold text-slate-500">Fő</p>
                      <p className="mt-1 text-sm font-medium text-slate-900">pl. 2</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="text-xs font-semibold text-slate-500">Keret</p>
                      <p className="mt-1 text-sm font-medium text-slate-900">pl. 250 000 Ft</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-xs font-semibold text-slate-500">Preferencia</p>
                    <p className="mt-1 text-sm font-medium text-slate-900">
                      city break • jó közlekedés • reggeli előny
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href="/contact"
                      className="inline-flex flex-1 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold
                                 bg-emerald-600 text-white shadow-lg shadow-emerald-600/25
                                 hover:shadow-xl hover:-translate-y-[1px] transition
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/45"
                    >
                      Elküldöm az ajánlatkérést →
                    </a>

                    <Link
                      href="/premium"
                      className="inline-flex flex-1 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold
                                 border border-slate-200 bg-white text-slate-900 shadow-sm
                                 hover:bg-slate-50 hover:-translate-y-[1px] transition
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40"
                    >
                      Inkább prémium csomagot nézek
                    </Link>
                  </div>

                  <p className="text-xs text-slate-500">
                    Tipp: ha rugalmas a dátum, gyakran sokkal jobb árakat találunk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GYIK */}
      <section className="w-full py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow">
                Gyakori kérdések
              </h2>
              <p className="mt-2 text-sm md:text-base text-white/80">
                Röviden, tisztán — hogy tudd, mire számíts.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="rounded-[2rem] border border-white/60 bg-white/85 backdrop-blur-xl shadow-xl p-6 md:p-7"
                >
                  <p className="text-sm font-semibold text-slate-900">{f.q}</p>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold
                           bg-slate-900 text-white shadow-lg shadow-slate-900/20
                           hover:shadow-xl hover:-translate-y-[1px] transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/35"
              >
                Van még kérdésed? Írj nekünk →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
