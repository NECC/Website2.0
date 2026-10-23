import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden py-16 px-8 md:px-16 lg:px-24 bg-[#171F33]">
      <Image
        src="/footer-bg.png"
        alt="footer backgroud image"
        fill
        sizes="100vw"
        className="object-cover opacity-75 pointer-events-none z-0 md:scale-150 object-top-right md:translate-y-1/8"
      />
      <div
        className={`absolute inset-0 bg-background opacity-84 pointer-events-none z-10`}
      />
      <div
        className={`max-w-7xl mx-auto flex justify-between items-start flex-col md:flex-row gap-10 relative z-20`}
      >
        {/* left side */}
        <div className={`flex items-center gap-4`}>
          <div>
            <Image src="/logo.png" alt="NECC's logo" width={48} height={48} />
          </div>

          <div className="flex flex-col">
            <h2 className={`text-xl font-bold text-default opacity-50`}>
              NECC
            </h2>
            <p className={`text-sm text-default max-w-62.5 leading-snug mt-1`}>
              Núcleo de Estudantes de Ciências da Computação
            </p>
          </div>
        </div>

        <div className={`flex flex-col gap-8`}>
          <div className="flex flex-col gap-3">
            <h3
              className={`text-xs font-bold tracking-[0.2em] text-white uppercase mb-1`}
            >
              Contacto
            </h3>
            <div className="flex items-center gap-3">
              <IoLocationOutline  size={20} className="text-white" />
                <span className="text-sm text-white">
                  DI sala 1.03, Universidade do Minho, Braga
                </span>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineMail size={20} className="text-white" />

              <span className="text-sm text-white">necc@di.uminho.pt</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3
              className={`text-xs font-bold tracking-[0.2em] text-white  mb-1`}
            >
              Social
            </h3>

            <div className={`flex items-center gap-4`}>
              <Link
                href="https://www.instagram.com/necc_uminho/"
                className="text-white hover:text-[#3B9EFF] transition-colors duration-200 group"
                target="_blank"
              >
                <FiInstagram size={20} />
              </Link>

              <Link
                href="https://discord.gg/3Z2v6J7"
                className="text-white hover:text-[#3B9EFF] transition-colors duration-200 group"
                target="_blank"
              >
                <SiDiscord size={20} />
              </Link>

              <Link
                href="teste"
                className="text-white hover:text-[#3B9EFF] transition-colors duration-200 group"
                target="_blank"
              >
                <FiGithub size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
