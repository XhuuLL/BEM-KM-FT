"use client";

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/constants/nav";
import ThemeToggle from "@/components/theme/theme-toggle";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  return (
    <>
      {/* Logo */}
      <Link
        href="/"
        className="
          fixed top-4 left-4 z-50
          flex items-center gap-2
        "
      >
        <Image
          src="/logos/BEM.png"
          alt="BEM Fakultas Teknik"
          width={42}
          height={42}
          className="rounded-full"
        />
      </Link>

      {/* Theme Toggle*/}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* FLOATING NAVBAR */}
      <header className="fixed top-6 inset-x-0 z-40 flex justify-center pointer-events-none">
        <div
          className="
            pointer-events-auto
            flex items-center
            px-4 py-2
            rounded-full
            bg-white/70 dark:bg-slate-900/70
            backdrop-blur-xl
            border border-white/20 dark:border-slate-800
            shadow-lg
          "
        >
          {/* Desktop */}
          <div className="hidden md:block">
            <DesktopNav links={navLinks} />
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <MobileNav links={navLinks} />
          </div>
        </div>
      </header>
    </>
  );
}
