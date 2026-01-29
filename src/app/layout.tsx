import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TwoAway – Utazás okosan",
  description: "Egyedi útitervek, valós árak, kényelmes szervezés.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className={`min-h-screen text-slate-900 ${inter.className}`}>
        {/* 🌍 Alap háttérkép – mindig teljes viewport */}
        <div
          aria-hidden
          className="fixed inset-0 -z-30 bg-[url('/img/hero.jpg')] bg-cover bg-center bg-fixed"
        />

        {/* 🌫️ Fő hangulat gradient – mindig teljes viewport */}
        <div
          aria-hidden
          className="fixed inset-0 -z-20 bg-gradient-to-br from-brand/30 via-slate-900/80 to-sky-500/20"
        />

        {/* 📦 Oldal wrapper (ehhez kötjük a bottom fade-et!) */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1 pt-20 md:pt-24">{children}</main>

          <Footer />

          {/* ✅ Lezáró gradient CSAK az oldal legalján (nem fixed!) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[40vh]
                       bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"
          />
        </div>
      </body>
    </html>
  );
}
