"use client";

interface Testimonial {
  name: string;
  tag: string;
  initial: string;
  highlight?: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Boglárka & Máté",
    tag: "Valencia • City break",
    initial: "B",
    highlight: "„Nulláról komplett útiterv, 2 nap alatt”",
    text: `A TwoAway előtt csak ötletelgettünk, de mindig elakadtunk a keresésben.
           Itt konkrét opciókat kaptunk árakkal, linkekkel, napi bontású útitervvel.
           Csak választani kellett.`,
  },
  {
    name: "Nóri",
    tag: "Mallorca • Tengerpart",
    initial: "N",
    text: `A tengerpartos prémium csoport miatt iratkoztam fel, és már az első hónapban 
           találtunk egy olyan ajánlatot, amit biztos nem szúrok ki magamtól.`,
  },
  {
    name: "Dávid",
    tag: "London • City break",
    initial: "D",
    text: `A plusz infók miatt döntöttem mellettük: melyik városrész, milyen extra költségek,
           mikor érdemes foglalni. Nagyon sokat segített.`,
  },
  {
    name: "Eszter & Ákos",
    tag: "Szicília • Páros utazás",
    initial: "E",
    text: `Személyre szabott tervezést kértünk. Két opciót is kaptunk térképpel és programokkal.
           Megérte a szolgáltatás.`,
  },
  {
    name: "Tamás",
    tag: "Barcelona • Barátokkal",
    initial: "T",
    text: `A vegyes prémium csomagban kaptunk egy ajánlatot, ami pont jó időpontra esett,
           és még olcsóbb is lett, mint elsőre.`,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20">
      <div className="container mx-auto space-y-10 px-4">
        {/* Fejléc */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 
               text-xs font-semibold text-sky-100 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-sky-300"></span>
            Rólunk mondták
          </div>

          <h2 className="text-3xl font-bold text-white drop-shadow md:text-4xl">
            Mit mondanak, akik már velünk utaztak?
          </h2>

          <p className="text-sm text-white/80 md:text-base">
            Valódi emberek valódi útitervekkel – nézd meg az élményeiket.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/50 
              bg-white/80 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 
              hover:shadow-2xl md:p-7"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full 
                  bg-sky-200 font-semibold text-sky-800 shadow-sm"
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-[11px] uppercase tracking-wide text-slate-500">
                    {t.tag}
                  </p>
                </div>
              </div>

              {t.highlight && (
                <p className="text-[15px] font-semibold text-sky-700">
                  {t.highlight}
                </p>
              )}

              <p className="text-sm leading-relaxed text-slate-700 md:text-[15px]">
                {t.text}
              </p>
            </article>
          ))}

          {/* CTA kártya */}
          <a
            href="/reviews"
            className="flex flex-col items-center justify-center gap-3 rounded-3xl 
            border border-white/20 bg-white/10 p-8 text-center shadow-sm backdrop-blur-xl 
            transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/20">
              <span className="text-xl text-sky-600">⭐</span>
            </div>

            <h3 className="text-lg font-semibold text-white">További vélemények</h3>

            <p className="max-w-[200px] text-sm text-white/70">
              Nézd meg, mások hogyan éltek át TwoAway utazásokat.
            </p>

            <span className="mt-1 text-sm font-medium text-sky-300">Böngészés →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
