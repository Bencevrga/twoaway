import Link from "next/link";
import Image from "next/image";

const logoSrc = "/img/twoaway-logo-white.svg";

export default function Footer() {
  return (
    <footer className="mt-0 border-t border-white/10 bg-black/40 backdrop-blur-2xl text-white/80 pt-24">
      <div className="container mx-auto space-y-10 px-4 pb-12 md:pb-14">
        {/* Felső rész – mini CTA + brand üzenet */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Útiterv, valódi árakon
            </p>
            <h3 className="text-2xl font-semibold text-white">
              Segítünk megtalálni a következő álomutadat – a valós költségekkel.
            </h3>
            <p className="text-sm text-white/70">
              Nem klasszikus utazási iroda vagyunk, hanem utazóbarát, transzparens
              tervező partner. Nem foglalunk helyetted – csak segítünk megtalálni a
              legjobb lehetőségeket.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
            >
              Kérj személyre szabott útitervet →
            </Link>
            <Link
              href="/premium"
              className="inline-flex items-center justify-center rounded-2xl border border-white/50 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Nézd meg a prémium csoportot
            </Link>
          </div>
        </div>

        {/* Középső rész – fehér kártya */}
        <div
          className="grid gap-10 rounded-4xl border border-slate-200 bg-white px-6 py-8 
                     text-slate-800 shadow-[0_18px_45px_rgba(0,0,0,0.15)] md:grid-cols-4 
                     md:px-8 md:py-9"
        >
          {/* Brand / leírás */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src={logoSrc}
                alt="TwoAway logó"
                width={112}
                height={28}
                className="h-7 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-xs leading-relaxed text-slate-700">
              TwoAway – egyedi útitervek, valós árak, kényelmes szervezés. Repjegy +
              szállás ajánlatok, inspiráció és valós költségek egy helyen.
            </p>

            {/* Social linkek – maradhat <a>, mert külső oldalak */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.tiktok.com/@twoaway"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-[11px] text-slate-800 transition hover:bg-slate-200"
              >
                🎵 TikTok
              </a>
              <a
                href="https://www.instagram.com/twoaway"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-[11px] text-slate-800 transition hover:bg-slate-200"
              >
                📸 Instagram
              </a>
            </div>
          </div>

          {/* Navigáció */}
          <div className="space-y-3 text-left">
            <h4 className="text-sm font-semibold text-slate-900">Oldalak</h4>
            <nav className="space-y-1.5 text-sm text-slate-700">
              <Link href="/" className="block transition hover:text-slate-900">
                Főoldal
              </Link>
              <Link href="/utak" className="block transition hover:text-slate-900">
                Utak
              </Link>
              <Link href="/ebook" className="block transition hover:text-slate-900">
                E-book
              </Link>
              <Link href="/arak" className="block transition hover:text-slate-900">
                Árak
              </Link>
              <Link
                href="/partnerek"
                className="block transition hover:text-slate-900"
              >
                Partnerek
              </Link>
              <Link href="/blog" className="block transition hover:text-slate-900">
                Blog
              </Link>
            </nav>
          </div>

          {/* Szolgáltatások */}
          <div className="space-y-3 text-left">
            <h4 className="text-sm font-semibold text-slate-900">Szolgáltatások</h4>
            <div className="space-y-1.5 text-sm text-slate-700">
              <Link
                href="/premium"
                className="block transition hover:text-slate-900"
              >
                Prémium ajánlatcsoport
              </Link>
              <Link
                href="/tervezes"
                className="block transition hover:text-slate-900"
              >
                Személyre szabott utazástervezés
              </Link>
              <Link
                href="/utasbiztositas"
                className="block transition hover:text-slate-900"
              >
                Utasbiztosítási partner
              </Link>
              <Link href="/gyik" className="block transition hover:text-slate-900">
                Gyakori kérdések
              </Link>
            </div>
          </div>

          {/* Kapcsolat / jogi */}
          <div className="space-y-4 text-left text-sm">
            <div className="space-y-1.5">
              <h4 className="text-sm font-semibold text-slate-900">Kapcsolat</h4>
              <p className="text-xs text-slate-700">
                Kérdésed van, vagy útitervet szeretnél? Írj nekünk bizalommal.
              </p>
              <a
                href="mailto:hello@twoaway.hu"
                className="inline-flex text-xs font-medium text-slate-900 transition hover:text-slate-700"
              >
                hello@twoaway.hu
              </a>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600">
              <Link href="/aszf" className="block transition hover:text-slate-900">
                Általános szerződési feltételek
              </Link>
              <Link
                href="/adatvedelem"
                className="block transition hover:text-slate-900"
              >
                Adatkezelési tájékoztató
              </Link>
              <Link href="/cookie" className="block transition hover:text-slate-900">
                Cookie beállítások
              </Link>
            </div>
          </div>
        </div>

        {/* Alsó sor */}
        <div className="flex flex-col items-center justify-between gap-3 text-[11px] text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} TwoAway. Minden jog fenntartva.</p>
          <p className="text-[11px] text-white/50">
            Nem végzünk repülőjegy- és szállásfoglalást – ajánlataink információs
            jellegűek, a foglalás minden esetben a hivatalos szolgáltatónál
            történik.
          </p>
        </div>
      </div>
    </footer>
  );
}
