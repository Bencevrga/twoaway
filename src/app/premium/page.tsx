import Link from "next/link";

type Plan = {
  id: "mini" | "plus" | "max";
  name: string;
  badge?: string;
  priceMonthly: string;
  priceYearly?: string;
  focus: string;
  bestFor: string;
  highlights: string[];
  includes: string[];
  notIncluded?: string[];
  ctaLabel: string;
  ctaHref: string;
  accent: "sky" | "emerald" | "violet";
  featured?: boolean;
};

const plans: Plan[] = [
  {
    id: "mini",
    name: "Mini • City&Beach",
    badge: "Belépő csomag",
    priceMonthly: "1 990 Ft / hó",
    priceYearly: "19 900 Ft / év",
    focus: "Vegyes válogatás (city + tengerpart) — a legjobb ár/érték ajánlatokból.",
    bestFor: "Ha most kezdenél, és szeretnél biztos inspirációt kapni hetente.",
    highlights: [
      "Heti 2–3 friss ajánlat",
      "Valós árak + linkek",
      "Könnyű, gyors döntés",
    ],
    includes: [
      "Válogatott repülő + szállás kombinációk",
      "Ártartomány / fő (átlátható bontással)",
      "Foglalási linkek (repjegy + szállás)",
      "Rövid tippek: mikor érdemes foglalni, extra költségek",
    ],
    notIncluded: [
      "Személyre szabott útiterv",
      "Egyedi egyeztetés / konzultáció",
    ],
    ctaLabel: "Csatlakozom a Mini csomaghoz",
    ctaHref: "/szemely",
    accent: "sky",
  },
  {
    id: "plus",
    name: "Plus • City Break fókusz",
    badge: "Legnépszerűbb",
    priceMonthly: "3 490 Ft / hó",
    priceYearly: "34 900 Ft / év",
    focus: "Városnézésre optimalizált ajánlatok: jó időpontok, jó elhelyezkedés, jó ár.",
    bestFor:
      "Ha szereted a városokat (London, Barcelona, Párizs, Róma…), és a napjaidat kimaxolnád.",
    highlights: [
      "Heti 3–5 city ajánlat",
      "Belvárosi / jó környék opciók",
      "Rövid “mit éri meg” tippek",
    ],
    includes: [
      "City break ajánlatok fókuszált válogatása",
      "Rövid környék-ajánló (hol érdemes lakni)",
      "Opciók több időpontra (ha van)",
      "Kézipoggyász / csomag infók jelölve",
      "Mini programötletek (1–2 napos vázlat)",
    ],
    notIncluded: [
      "Teljesen egyedi útiterv (napról napra)",
      "Foglalás helyetted",
    ],
    ctaLabel: "Kérem a Plus csomagot",
    ctaHref: "/szemely",
    accent: "violet",
    featured: true,
  },
  {
    id: "max",
    name: "Max • Tengerpart fókusz",
    badge: "Prémium válogatás",
    priceMonthly: "4 990 Ft / hó",
    priceYearly: "49 900 Ft / év",
    focus: "Tengerparti pihenések: jó szállások, medence/part közel, okos időpontok.",
    bestFor:
      "Ha nyaralós típus vagy, és szeretnél ritkább, de ütősebb ajánlatokat kapni.",
    highlights: [
      "Heti 3–5 tengerparti ajánlat",
      "Szállás-minőség fókusz",
      "Szezonon kívüli “best deals”",
    ],
    includes: [
      "Tengerparti ajánlatok (repjegy + szállás) minőség-fókuszban",
      "Szállás-szűrés: elhelyezkedés, értékelés, extrák",
      "Ár-összehasonlító “jobb / olcsóbb” opciók (ha van)",
      "Tipp: melyik partszakasz / környék passzol",
      "Last minute jelölések, ha tényleg jó",
    ],
    notIncluded: [
      "Személyre szabott konzultáció",
      "Egyedi útiterv PDF",
    ],
    ctaLabel: "Csatlakozom a Max csomaghoz",
    ctaHref: "/szemely",
    accent: "emerald",
  },
];

const accentClasses = (accent: Plan["accent"]) => {
  switch (accent) {
    case "sky":
      return {
        pill: "bg-sky-50 text-sky-700 border-sky-100",
        ring: "focus-visible:ring-sky-200",
        button:
          "bg-brand text-white shadow-brand/40 hover:shadow-xl hover:-translate-y-[1px] hover:bg-brand-dark",
        subtleButton:
          "border border-slate-300 bg-white/80 text-slate-700 hover:bg-white",
      };
    case "violet":
      return {
        pill: "bg-violet-50 text-violet-700 border-violet-100",
        ring: "focus-visible:ring-violet-200",
        button:
          "bg-violet-600 text-white shadow-violet-600/30 hover:shadow-xl hover:-translate-y-[1px] hover:bg-violet-700",
        subtleButton:
          "border border-slate-300 bg-white/80 text-slate-700 hover:bg-white",
      };
    case "emerald":
      return {
        pill: "bg-emerald-50 text-emerald-700 border-emerald-100",
        ring: "focus-visible:ring-emerald-200",
        button:
          "bg-emerald-600 text-white shadow-emerald-600/30 hover:shadow-xl hover:-translate-y-[1px] hover:bg-emerald-700",
        subtleButton:
          "border border-slate-300 bg-white/80 text-slate-700 hover:bg-white",
      };
  }
};

export default function PremiumPage() {
  return (
    <main className="w-full pb-24">
      {/* HERO */}
      <section className="pt-28 md:pt-32 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-[40px] bg-white/95 border border-slate-200 shadow-[0_24px_80px_rgba(15,23,42,0.35)] px-6 py-8 md:px-10 md:py-10 space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1 text-sky-700 border border-sky-100">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                Premium ajánlatcsoportok
              </span>
              <span className="text-slate-400">
                3 csomag • azonnal használható ajánlatok valós árakon
              </span>
            </div>

            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Csatlakozz a prémium csoportokhoz, és kapd a válogatott ajánlatokat.
              </h1>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A prémium csomagokban rendszeresen küldünk <b>valós árú</b> repülő + szállás
                kombinációkat — linkekkel, rövid tippekkel, átláthatóan. Nem foglalunk helyetted,
                de <b>levesszük a keresgélés terhét</b>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#csomagok"
                className="inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/40 hover:bg-brand-dark transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Megnézem a csomagokat →
              </Link>
              <Link
                href="/szemely"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Inkább személyre szabott útitervet kérek
              </Link>
            </div>

            <p className="text-[11px] text-slate-500">
              Megjegyzés: az árak és elérhető ajánlatok időben változhatnak (repjegy/szállás piac).
              Mi mindig az aktuálisan foglalható opciókat küldjük.
            </p>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="csomagok" className="pb-20">
        <div className="container mx-auto px-4 max-w-6xl space-y-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow">
                Válaszd ki a neked való prémium csomagot
              </h2>
              <p className="text-sm text-white/80">
                Kezdheted kicsiben, vagy választhatsz fókuszált válogatást. Mindegyik csomagban
                az ajánlatok <b>valós árakon</b> és <b>foglalási linkekkel</b> érkeznek.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-2 text-[11px] text-white/70 border border-white/10">
              <span className="mr-1">Tipp:</span>
              <span className="rounded-full bg-white/10 px-3 py-1">City fan? → Plus</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Tengerpart? → Max</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((p) => {
              const a = accentClasses(p.accent);
              return (
                <div
                  key={p.id}
                  className={[
                    "rounded-[28px] bg-white/95 border border-slate-200 shadow-sm overflow-hidden",
                    "hover:shadow-xl hover:-translate-y-0.5 transition",
                    p.featured ? "ring-2 ring-white/40" : "",
                  ].join(" ")}
                >
                  <div className="p-5 md:p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-2">
                        <div
                          className={[
                            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold border w-fit",
                            a.pill,
                          ].join(" ")}
                        >
                          <span className="w-2 h-2 rounded-full bg-current opacity-70" />
                          {p.badge ?? "Prémium"}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                      </div>

                      {p.featured && (
                        <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-800 border border-amber-200">
                          Ajánlott
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-slate-900">{p.priceMonthly}</p>
                      {p.priceYearly && (
                        <p className="text-xs text-slate-500">
                          Éves opció: <span className="font-semibold text-slate-700">{p.priceYearly}</span>
                        </p>
                      )}
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed">{p.focus}</p>

                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                      <p className="text-[11px] uppercase tracking-wide text-slate-500">
                        Neked való, ha…
                      </p>
                      <p className="text-sm font-semibold text-slate-900">{p.bestFor}</p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {p.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] text-slate-700"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-900">Mit tartalmaz:</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {p.includes.map((x) => (
                          <li key={x} className="flex gap-2">
                            <span className="mt-[6px] h-2 w-2 rounded-full bg-slate-300" />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {p.notIncluded?.length ? (
                      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                        <p className="text-[11px] uppercase tracking-wide text-slate-500 mb-2">
                          Nem tartalmazza:
                        </p>
                        <ul className="space-y-1.5 text-[13px] text-slate-600">
                          {p.notIncluded.map((x) => (
                            <li key={x} className="flex gap-2">
                              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-300" />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="pt-2 flex flex-col gap-3">
                      <Link
                        href={p.ctaHref}
                        className={[
                          "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg transition",
                          a.button,
                          "focus-visible:outline-none focus-visible:ring-2",
                          a.ring,
                        ].join(" ")}
                      >
                        {p.ctaLabel} →
                      </Link>

                      <Link
                        href="/szemely"
                        className={[
                          "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition",
                          a.subtleButton,
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                        ].join(" ")}
                      >
                        Nem vagyok biztos → segítsetek választani
                      </Link>
                    </div>

                    <p className="text-[11px] text-slate-500">
                      *A csomagok tartalma finomhangolható — most egy jó, induló struktúra. Ha megvannak a
                      végső nevek és pontos feltételek, 2 perc alatt átírjuk.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (mini) */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-[40px] bg-white/95 border border-slate-200 shadow-[0_24px_80px_rgba(15,23,42,0.35)] px-6 py-10 md:px-10 md:py-12 space-y-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-[11px] font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                Hogyan működik a prémium?
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                3 lépés, és már kapod is a válogatott ajánlatokat
              </h2>
              <p className="text-sm text-slate-700">
                A cél: gyorsan dönteni és jól foglalni — anélkül, hogy órákig keresgélnél.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  n: "1",
                  title: "Csomagválasztás",
                  desc: "Kiválasztod, melyik fókusz illik hozzád (vegyes / city / tengerpart).",
                },
                {
                  n: "2",
                  title: "Ajánlatok érkeznek",
                  desc: "Rendszeresen küldünk foglalható repjegy + szállás opciókat valós árakon.",
                },
                {
                  n: "3",
                  title: "Te foglalsz",
                  desc: "Kattintasz, lefoglalod, kész. Mi a keresést és a szűrést vesszük le a válladról.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="rounded-[28px] bg-white border border-slate-200 shadow-sm p-6 space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-sky-600 text-white flex items-center justify-center text-sm font-semibold shadow-sm">
                      {s.n}
                    </div>
                    <p className="font-semibold text-slate-900">{s.title}</p>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/szemely"
                className="flex-1 inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/40 hover:bg-brand-dark transition"
              >
                Segítsetek kiválasztani a csomagot →
              </Link>
              <Link
                href="/utak"
                className="flex-1 inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
              >
                Megnézem a példa utakat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow">
              Gyakori kérdések
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  q: "Foglaljátok helyettem a repjegyet és a szállást?",
                  a: "Nem. Mi konkrét, foglalható opciókat adunk linkekkel és tippekkel — a foglalás mindig a hivatalos szolgáltatónál történik.",
                },
                {
                  q: "Milyen gyakran jönnek ajánlatok?",
                  a: "Csomagtól függően heti több alkalommal. A cél nem a mennyiség, hanem hogy tényleg jó ár/érték ajánlatokat kapj.",
                },
                {
                  q: "Miért “valós” árak?",
                  a: "Mert az adott pillanatban foglalható repjegy- és szállásárakból számolunk. A turizmus ára mozog — ezért gyors döntésnél a legjobb.",
                },
                {
                  q: "Ha nekem nagyon konkrét igényem van?",
                  a: "Akkor inkább a személyre szabott tervezést javasoljuk. Írsz pár részletet, és összeállítunk több opciót a te keretedre.",
                },
              ].map((x) => (
                <div
                  key={x.q}
                  className="rounded-[28px] bg-white/95 border border-slate-200 shadow-sm p-6"
                >
                  <p className="font-semibold text-slate-900">{x.q}</p>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">{x.a}</p>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-white/60">
              Ha szeretnéd, a következő körben csinálunk külön „Csomagok összehasonlítása” táblázatot is,
              és Sanityből szerkeszthetővé tesszük az árakat/elemeket.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
