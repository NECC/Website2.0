"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "EQUIPA", href: "/team" },
  { label: "PARCERIAS", href: "/partners" },
  { label: "MERCHANDISING", href: "/merch" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isTransparent = pathname === "/" || pathname === "/merch"; // Navbar is transparent on the home page and merch page

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <div className="relative z-50">
      <nav
        className={`w-full ${
          isTransparent ? "absolute inset-x-0 top-0" : "relative bg-[#161E2E]"
        }`}
      >
        <div className="relative z-30 mx-auto flex max-w-400 items-center px-6 py-2 sm:px-10 sm:py-6 lg:px-16">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="mr-5 shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Logo NECC"
              width={60}
              height={60}
              priority
              className="h-8 w-8"
            />
          </Link>

          <div className="hidden items-center sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative mx-5 text-sm font-semibold text-white/35 transition-colors hover:text-white"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-0.75 w-full origin-center scale-x-0 bg-[#3B9EFF] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            className="relative ml-auto flex h-10 w-10 shrink-0 items-center justify-center sm:hidden"
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

      <div
        className={`fixed inset-0 z-10 h-dvh w-full bg-black/75 pt-16 backdrop-blur-lg transition-transform duration-200 sm:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative z-10 divide-y-2 divide-[#008CCA42] px-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
              className="group relative block py-4 text-xl font-semibold text-white/60 transition-colors hover:text-white"
            >
              {link.label}

              <span className="absolute bottom-0 left-0 h-0.75 w-full origin-center scale-x-0 bg-[#3B9EFF] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
