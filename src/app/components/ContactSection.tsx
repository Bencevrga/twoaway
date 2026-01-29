"use client";

import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  }

  return (
    <section id="contact" className="relative w-full py-24">
      {/* FULL-WIDTH háttér overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

      {/* TARTALOM */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-white/90 backdrop-blur-xl border border-white/70 shadow-2xl p-8 md:p-12">
          {/* HEADER */}
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1 text-xs font-semibold text-sky-700">
              💬 Kapcsolat
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Kérdésed van? Vedd fel velünk a kapcsolatot
            </h2>

            <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto">
              Írj nekünk bátran, 24–48 órán belül válaszolunk. Ha gyorsabb
              megoldást szeretnél, Instagramon is elérsz minket.
            </p>
          </div>

          {/* CONTENT */}
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Név
                </label>
                <input
                  required
                  type="text"
                  placeholder="Teljes neved"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email cím
                </label>
                <input
                  required
                  type="email"
                  placeholder="email@pelda.hu"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Üzenet
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Írd le, miben segíthetünk…"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand/40 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-full
                           bg-brand px-6 py-3 text-sm font-semibold text-white
                           shadow-lg shadow-brand/30 transition
                           hover:-translate-y-[1px] hover:shadow-xl
                           disabled:opacity-60"
              >
                {sent ? "Üzenet elküldve ✓" : loading ? "Küldés..." : "Üzenet elküldése"}
              </button>
            </form>

            {/* JOBB OLDAL */}
            <div className="flex flex-col justify-between rounded-2xl bg-slate-50 p-6 border border-slate-200">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  Más csatornák
                </h3>

                <p className="text-sm text-slate-600">
                  Ha nem szeretsz űrlapokat kitölteni, itt is elérsz minket:
                </p>

                <a
                  href="https://www.instagram.com/twoaway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-300
                             bg-white px-5 py-3 text-sm font-medium text-slate-800
                             hover:bg-slate-100 transition"
                >
                  📸 Instagram: @twoaway
                </a>
              </div>

              <p className="text-xs text-slate-500 mt-6">
                Nem spam-elünk, az üzeneted kizárólag kapcsolatfelvételre használjuk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
