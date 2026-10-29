import { partnersData } from "@/data/partners";
import type { Partner } from "@/types";
import Image from "next/image";
import { Reveal, MotionProvider } from "../components/motion";
import { FaArrowRight } from "react-icons/fa6";

const isLight = (index: number) => {
  const row = Math.floor(index / 3);
  const col = index % 3;
  return (row + col) % 2 === 0;
};

const PartnerCard = ({
  partner,
  index,
}: {
  partner: Partner;
  index: number;
}) => {
  const color = isLight(index) ? "bg-[#38547A]" : "bg-[#233047]";

  return (
    <Reveal y={30}>
      <div
        className={`group relative mx-auto flex h-full min-h-95 w-full max-w-72 flex-col items-center rounded-2xl p-5 pt-24 sm:min-h-105 sm:max-w-64 lg:max-w-72 ${color}`}
      >
        {/* Logo */}
        <div className="absolute -top-16 flex h-36 w-36 items-center justify-center overflow-hidden rounded-2xl sm:-top-20 sm:h-44 sm:w-44">
          <Image
            src={partner.imgUrl}
            alt={`Logo de ${partner.name}`}
            width={176}
            height={176}
            className="pointer-events-none h-full w-fullobject-contain"
          />
        </div>

        <div className="mt-6 flex w-full flex-1 flex-col gap-4 sm:mt-10">
          {partner.discounts && partner.discounts.length > 0 && (
            <div>
              <h3 className="mb-1.5 text-sm font-bold leading-tight text-[#92B4D4] sm:text-base lg:text-lg">
                Descontos
              </h3>
              <ul className="space-y-1 text-xs leading-relaxed text-[#92B4D4] sm:text-sm lg:text-base">
                {partner.discounts.map((discount, i) => (
                  <li
                    key={i}
                    className="text-xs leading-relaxed text-[#92B4D4] sm:text-sm lg:text-base"
                  >
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#92B4D4] align-middle" />
                    {discount}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
};

export default function PartnersPage() {
  return (
    <MotionProvider>
      <main className="bg-[#161E2E]">
        <div className="mx-auto w-full max-w-400 px-6 py-16 sm:px-10 lg:px-16">
          {/* Cabeçalho */}
          <header className="mb-9 sm:mb-20">
            {/* Título Mobile */}
            <div className="sm:hidden">
              <Reveal y={30}>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#38547A]" />

                  <h1 className="text-center text-3xl font-extrabold uppercase tracking-tight text-white">
                    PARCEIROS
                  </h1>

                  <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#38547A]" />
                </div>
              </Reveal>
            </div>

            <div className="hidden items-center gap-6 sm:flex">
              <Reveal y={30}>
                <h1 className="shrink-0 text-4xl font-extrabold uppercase tracking-tight text-white lg:text-5xl">
                  PARCEIROS
                </h1>
              </Reveal>

              <div className="h-0.5 flex-1 bg-linear-to-r from-[#38547A] to-transparent" />
            </div>

            <Reveal y={20} delay={0.2}>
              <div className="mt-4 max-w-2xl text-center text-xs leading-relaxed text-[#92B4D4] sm:text-start sm:text-sm lg:text-base">
                <p>
                  Conhece os nossos parceiros e explora as diversas vantagens
                  que tens por ser sócio do NECC.
                </p>

                <p>
                  Visita estes espaços para o que precisares e aproveita os
                  descontos!
                </p>
              </div>
            </Reveal>
          </header>
          <div className="grid grid-cols-1 justify-between gap-x-6 gap-y-24 pt-20 sm:grid-cols-[repeat(2,16rem)] lg:grid-cols-[repeat(3,18rem)] lg:gap-y-28 bg-">
            {partnersData.map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index} />
            ))}
          </div>
          {/* Sócios */}
          <Reveal delay={0.1} className="py-16 lg:py-20">
            <div className="flex flex-col gap-5 rounded-2xl border border-[#3B9EFF]/20 bg-linear-to-br from-[#15428C] to-[#19283F] p-5 transition-colors duration-300 hover:border-[#3B9EFF]/50 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    Torna-te sócio
                  </h2>

                  <p className="max-w-md text-sm leading-relaxed text-[#D0E1F3] sm:text-base">
                    Participa nos nossos eventos e usufrui de benefícios
                    exclusivos para a comunidade de Ciências da Computação.
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 lg:hidden">
                  <a
                    href=""
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#92B4D4]/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-[#92B4D4]/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#92B4D4]"
                  >
                    Tornar-me sócio
                    <FaArrowRight />
                  </a>

                  <Image
                    src="/card.png"
                    alt="Cartão de sócio do NECC"
                    width={400}
                    height={250}
                    className="h-auto w-20 object-contain sm:w-44"
                  />
                </div>

                <a
                  href=""
                  className="hidden min-h-11 w-fit items-center justify-center gap-2 rounded-lg border border-[#92B4D4]/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-[#92B4D4]/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#92B4D4] sm:px-5 lg:inline-flex"
                >
                  Tornar-me sócio
                  <FaArrowRight />
                </a>
              </div>

              <Image
                src="/images/merch/card.png"
                alt="Cartão de sócio do NECC"
                width={400}
                height={250}
                className="hidden h-auto w-56 shrink-0 object-contain lg:block lg:w-72"
              />
            </div>
          </Reveal>
        </div>
      </main>
    </MotionProvider>
  );
}
