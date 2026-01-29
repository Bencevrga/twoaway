import OfferCard from "@/components/OfferCard";

const offers = [
  {
    title: "Völgyek, barlangok, hőlégballonok",
    subtitle: "Kappadókia, ***-os szállással, reggelivel",
    image:
      "https://images.unsplash.com/photo-1526481280695-3c687fd543c3?auto=format&fit=crop&w=1400&q=80",
    badge: "Top választás",
    tags: ["🛫 Budapest", "⏱ 5-7 nap", "🏜 Kaland & városnézés"],
  },
  {
    title: "1 hetes nyárkezdet Zakynthoson",
    subtitle: "***-os, medencés szállással",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    badge: "Új",
    tags: ["🏖 Tengerpart", "⏱ 7 nap"],
  },
  {
    title: "Félpanziós nyaralás Törökországban",
    subtitle: "Kusadasi, indulás Bécsből, ***-os, medencés szállással",
    image:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=1200&q=80",
    badge: "Last minute",
    tags: ["🛫 Bécs", "🏖 Tengerpart"],
  },
  {
    title: "5 éjszakás mediterrán pihenés",
    subtitle: "Costa Blanca, ****-os szállással",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    tags: ["🌅 Mediterrán hangulat", "⏱ 5 éj"],
  },
  {
    title: "5 éjszaka a Tátra kapujában",
    subtitle: "Zakopane, bécsi indulással, hangulatos szállással",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    tags: ["⛰ Hegyek", "❄ Kirándulás"],
  },
];

export default function TripList() {
  return (
    <section className="w-full py-16" id="trips">
      <div className="mx-auto max-w-[1400px] px-4">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Legfrissebb ajánlataink
          </h2>
          <p className="mt-2 max-w-xl text-sm md:text-base text-white/80">
            Friss inspirációk a legnépszerűbb úti célokra – tengerparttól a
            városnézésig.
          </p>
          <p className="mt-1 text-xs text-white/60">
            Frissítve: ma • Hetente új válogatások
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {/* NAGY 2x2 */}
          <div className="col-span-2 row-span-2 aspect-square">
            <OfferCard {...offers[0]} />
          </div>

          {/* 3 KIS */}
          {offers.slice(1, 4).map((offer, index) => (
            <div className="aspect-square" key={offer.title + index}>
              <OfferCard {...offer} />
            </div>
          ))}

          {/* JOBB ALSÓ CTA */}
          <div className="aspect-square">
            <a
              href="/utak"
              className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-brand to-sky-500 text-base font-medium text-white shadow-xl transition-transform hover:scale-[1.01] hover:shadow-2xl sm:text-lg"
            >
              <span className="mb-1 text-2xl">✨</span>
              <span className="mb-1">További ajánlatok</span>
              <span className="text-xs text-white/85 sm:text-sm">
                Nézd meg az összes aktuális útiötletünket →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
