"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "EQUIPA", href: "/equipa" },
  { label: "PARCERIAS", href: "/" },
  { label: "LOJA", href: "/" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="h-20 w-full bg-[#0D0F1A]">
        <div className="flex h-full items-center px-4 sm:px-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Logo NECC"
              width={60}
              height={60}
              className="h-15 w-15"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center sm:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative mx-5 text-sm font-semibold text-white/35 transition-colors hover:text-white"
              >
                {link.label}

                {/* Alterado para origin-center */}
                <span className="absolute bottom-0 left-0 h-0.75 w-full origin-center scale-x-0 bg-[#3B9EFF] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto flex h-10 w-10 items-center justify-center sm:hidden"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <div className="flex w-7 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full rounded bg-white transition-transform duration-200 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full rounded bg-white transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full rounded bg-white transition-transform duration-200 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-20 z-20 bg-black/75 backdrop-blur-lg transition-transform duration-200 sm:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="divide-y-2 divide-[#008CCA42] px-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="group relative block py-4 text-xl font-semibold text-white/35 transition-colors hover:text-white"
            >
              {link.label}

              {/* Alterado para origin-center */}
              <span className="absolute bottom-0 left-0 h-0.75 w-full origin-center scale-x-0 bg-[#3B9EFF] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
