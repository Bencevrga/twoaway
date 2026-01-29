"use client";

const tiktokUrl = "https://www.tiktok.com/@twoaway";
const instagramUrl = "https://www.instagram.com/twoaway";

// A public/img/ mappából töltjük be
const tiktokImage = "/img/twoaway-tiktok-post.jpg";
const instagramImage = "/img/twoaway-instagram-post.jpg";

export default function SocialSection() {
  return (
    <section id="social" className="relative w-full py-24">
      <div className="container mx-auto space-y-14 text-center px-4">
        
        {/* Fejléc */}
        <div className="mx-auto max-w-2xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl px-4 py-1 text-xs font-semibold text-sky-200 border border-white/20">
            <span className="h-2 w-2 rounded-full bg-sky-400"></span>
            Kövess minket utazós tartalmakért
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-sm">
            TikTokon és Instagramon is velünk utazhatsz
          </h2>

          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Valós árak, last minute ajánlatok és kulisszák minden nap — elsőként nálunk.
          </p>
        </div>

        {/* Kártyák */}
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          
          {/* TikTok kártya */}
          <a
            href={tiktokUrl}
            target="_blank"
            className="group relative block rounded-[32px] bg-white/80 backdrop-blur-xl border border-white/40 p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* HEADER */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-xl">
                  🎵
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    TikTok
                  </p>
                  <p className="text-sm font-semibold text-slate-900">@twoaway</p>
                </div>
              </div>

              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] text-slate-600">
                Short-form • Tippek
              </span>
            </div>

            {/* KÉP */}
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200">
              <img
                src={tiktokImage}
                alt="TikTok tartalom"
                className="h-full w-full object-cover transition group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg">
                  ▶
                </div>
              </div>
            </div>

            {/* Szöveg */}
            <div className="mt-4 space-y-1 text-left">
              <p className="text-sm font-semibold text-slate-900">
                Last minute city break valós árakon
              </p>
              <p className="text-xs text-slate-500">
                Rövid videó, ahol azonnal láthatod a tényleges költségeket.
              </p>
            </div>

            <div className="mt-4">
              <span className="text-sm font-semibold text-sky-700 group-hover:underline">
                Kövess TikTokon →
              </span>
            </div>
          </a>

          {/* Instagram kártya */}
          <a
            href={instagramUrl}
            target="_blank"
            className="group block rounded-[32px] bg-white/80 backdrop-blur-xl border border-white/40 p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-xl">
                  📸
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Instagram
                  </p>
                  <p className="text-sm font-semibold text-slate-900">@twoaway</p>
                </div>
              </div>

              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] text-slate-600">
                Carousel • Tippek
              </span>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200">
              <img
                src={instagramImage}
                alt="Instagram tartalom"
                className="h-full w-full object-cover transition group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg">
                  ▶
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-1 text-left">
              <p className="text-sm font-semibold text-slate-900">
                3 napos útiterv városnézéshez
              </p>
              <p className="text-xs text-slate-500">
                Menthető carousel hasznos infókkal és ajánlásokkal.
              </p>
            </div>

            <div className="mt-4">
              <span className="text-sm font-semibold text-sky-700 group-hover:underline">
                Kövess Instagramon →
              </span>
            </div>
          </a>
        </div>

        {/* Lábjegyzet */}
        <p className="pt-4 text-xs text-white/60 md:text-sm">
          TikTok: @twoaway • Instagram: @twoaway
        </p>
      </div>
    </section>
  );
}
