import { partnersData } from "@/data/partners";
import type { Partner } from "@/types";
import Image from "next/image";
import { Reveal, MotionProvider } from "../components/motion";

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
    <Reveal y={30} delay={index * 0.05} className="w-full h-full">
      <div
        className={`relative flex h-full flex-col items-center rounded-3xl p-6 pt-16 shadow-xl transition-transform duration-300 hover:-translate-y-1 ${color}`}
      >
        {/* Badge do logótipo (partners1.png até partners9.png) */}
        <div className="absolute -top-10 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg sm:h-28 sm:w-28">
          <Image
            src={partner.imgUrl || "/images/partners/partner1.png"}
            alt={`Logo de ${partner.name}`}
            width={112}
            height={112}
            className="h-full w-full object-contain select-none"
          />
        </div>

        {/* Detalhes do Parceiro */}
        <div className="mt-2 w-full flex-1 space-y-4 text-slate-200">
          <h3 className="text-center text-xl font-bold text-white mb-2">
            {partner.name}
          </h3>

          {/* Ofertas */}
          {partner.offers && partner.offers.length > 0 && (
            <div>
              <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white opacity-90">
                Ofertas
              </h4>
              <ul className="space-y-1 text-xs leading-relaxed sm:text-sm">
                {partner.offers.map((offer, idx) => (
                  <li key={idx} className="flex gap-1.5">
                    <span className="shrink-0 text-white/70">-</span>
                    <span>{offer}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Descontos */}
          {partner.discounts && partner.discounts.length > 0 && (
            <div>
              <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white opacity-90">
                Descontos
              </h4>
              <ul className="space-y-1 text-xs leading-relaxed sm:text-sm">
                {partner.discounts.map((discount, idx) => (
                  <li key={idx} className="flex gap-1.5">
                    <span className="shrink-0 text-white/70">-</span>
                    <span>{discount}</span>
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
      <main className="min-h-screen bg-[#161E2E]">
        <div className="mx-auto w-full max-w-400 px-6 py-16 sm:px-10 lg:px-16">
          {/* Cabeçalho */}
          <header className="mb-16 sm:mb-20">
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

            {/* Título Desktop */}
            <div className="hidden items-center gap-6 sm:flex">
              <Reveal y={30}>
                <h1 className="shrink-0 text-4xl font-extrabold uppercase tracking-tight text-white lg:text-5xl">
                  PARCEIROS
                </h1>
              </Reveal>

              <div className="h-0.5 flex-1 bg-linear-to-r from-[#38547A] to-transparent" />
            </div>

            {/* Descrição */}
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

          {/* Grelha de Parceiros */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
            {partnersData.map((partner, index) => (
              <PartnerCard
                key={partner.id || partner.name}
                partner={partner}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
    </MotionProvider>
  );
}
