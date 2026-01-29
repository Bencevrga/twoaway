"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Főoldal" },
  { href: "/premium", label: "Prémium utak" },
  { href: "/szemely", label: "Személyre szabott utazás" },
  { href: "/#mit-csinalunk", label: "Hogyan működik?" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">

  {/* Szöveges logó */}
  <Image
    src="/img/logo.jpg"
    alt="TwoAway"
    width={120}
    height={32}
    className="h-15 w-auto object-contain"
    priority
  />
</Link>

        <nav className="hidden items-center gap-4 text-xs font-medium text-slate-300 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1 transition ${
                  active
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/40"
                    : "hover:bg-slate-800/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/premium#csomagok"
          className="inline-flex items-center rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm shadow-slate-900/30 hover:bg-white md:text-sm"
        >
          Fedezd fel a prémiumot
        </Link>
      </div>
    </header>
  );
}
