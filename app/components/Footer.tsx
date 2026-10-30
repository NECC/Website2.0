import Link from "next/link";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import type { FooterColumn } from "@/types";

const columns: FooterColumn[] = [
  {
    title: "NECC",
    links: [
      { label: "Equipa", href: "/team" },
      { label: "Parcerias", href: "/partners" },
      { label: "Merchandising", href: "/merch" },
    ],
  },
  {
    title: "Alunos",
    links: [
      {
        label: "Torna-te sócio",
        href: "https://forms.gle/nxgKMxYbd5zGGr247",
        external: true,
      },
      {
        label: "Torna-te colaborador",
        href: "https://forms.gle/GQwVzyqGpm2A6aAK8",
        external: true,
      },
    ],
  },
  {
    title: "Explorar",
    links: [
      {
        label: "Cartão de sócio",
        href: "https://socios.necc.pt",
        external: true,
      },
      {
        label: "Necchange",
        href: "https://necchange.necc.di.uminho.pt",
        external: true,
      },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/necc.uminho/",
    Icon: FiInstagram,
  },
  { label: "Discord", href: "https://discord.gg/jupjX6hzG", Icon: SiDiscord },
  { label: "GitHub", href: "https://github.com/NECC", Icon: FiGithub },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#161E2E] py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-400 flex-col gap-10 px-6 sm:px-10 lg:px-16">
        {/* Links | contacto (mesmo nível) */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <nav
            aria-label="Rodapé"
            className="grid grid-cols-2 gap-x-8 gap-y-8 sm:flex sm:gap-16"
          >
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h3 className="mb-1 text-base font-semibold text-white">
                  {col.title}
                </h3>
                {col.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#C4D8EE]/70 transition-colors duration-200 hover:text-[#3B9EFF]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-[#C4D8EE]/70 transition-colors duration-200 hover:text-[#3B9EFF]"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            ))}
          </nav>

          {/* Contacto */}
          <div className="flex flex-col gap-3">
            <h3 className="mb-1 text-base font-semibold text-white">
              Contacto
            </h3>

            <div className="flex items-start gap-3">
              <IoLocationOutline
                size={20}
                className="mt-0.5 shrink-0 text-white"
              />
              <span className="text-sm leading-relaxed text-white">
                DI, sala 1.03
                <br />
                Universidade do Minho, Braga
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineMail size={20} className="shrink-0 text-white" />
              <a
                href="mailto:necc@di.uminho.pt"
                className="flex items-center gap-3 text-sm text-white transition-colors duration-200 hover:text-[#3B9EFF]"
              >
                necc@di.uminho.pt
              </a>
            </div>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-sm text-[#C4D8EE]/70 transition-colors duration-200 hover:text-[#3B9EFF]"
            >
              <Icon size={22} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
