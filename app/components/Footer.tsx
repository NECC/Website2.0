import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer
      className="w-full overflow-hidden bg-[#171F33] bg-cover bg-top-right bg-no-repeat py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(23, 31, 51, 0.90), rgba(23, 31, 51, 0.8)), url('/footer-bg.png')",
      }}
    >
      <div className="mx-auto flex w-full max-w-400 flex-col gap-10 px-6 sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:px-16">
        <div className="flex items-center gap-6">
          <Image
            src="/logo.png"
            alt="Logótipo do NECC"
            width={48}
            height={48}
            className="shrink-0"
          />

          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-white">NECC</h2>

            <p className="mt-1 max-w-62.5 text-sm leading-snug text-white">
              Núcleo de Estudantes de Ciências da Computação
            </p>
          </div>
        </div>

        {/* Contactos e redes sociais */}
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-16">
          {/* Contacto */}
          <div className="flex flex-col gap-3">
            <h3 className="mb-1 text-xs font-bold uppercase  text-[#C4D8EE]">
              Contacto
            </h3>

            <div className="flex items-start gap-3">
              <IoLocationOutline
                size={20}
                className="mt-0.5 shrink-0 text-white"
                aria-hidden="true"
              />

              <span className="text-sm leading-relaxed text-white">
                DI, sala 1.03
                <br />
                Universidade do Minho, Braga
              </span>
            </div>

            <a
              href="mailto:necc@di.uminho.pt"
              className="flex items-center gap-3 text-sm text-white transition-colors duration-200 hover:text-[#3B9EFF]"
            >
              <MdOutlineMail
                size={20}
                className="shrink-0"
                aria-hidden="true"
              />
              necc@di.uminho.pt
            </a>
          </div>

          {/* Redes sociais */}
          <div className="flex flex-col gap-3">
            <h3 className="mb-1 text-xs font-bold uppercase text-[#C4D8EE]">
              Social
            </h3>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/necc_uminho/"
                target="_blank"
                className="text-white transition-colors duration-200 hover:text-[#3B9EFF]"
              >
                <FiInstagram size={20} />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener "
                className="text-white transition-colors duration-200 hover:text-[#3B9EFF]"
              >
                <SiDiscord size={20} />
              </a>

              <a
                href="teste"
                target="_blank"
                className="text-white transition-colors duration-200 hover:text-[#3B9EFF]"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}