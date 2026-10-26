import Image from "next/image";
import { aboutUsData, eventData } from "@/data/ladingPage";
import { partnerData } from "@/data/partners";
import { Info, Partner } from "@/types";
import Marquee from "react-fast-marquee";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { MotionLi, Reveal, MotionProvider } from "./components/motion";

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex flex-col items-center rounded-xl border-2 border-solid border-[#38547A] bg-[#233047]">
      <Image
        width={256}
        height={256}
        src={partner.imgUrl}
        alt={"Logo de " + partner.name}
        className="rounded-t-xl object-cover object-center"
      />

      <p className="p-4 text-center font-semibold text-white">
        {partner.name}
      </p>
    </div>
  );
}

const aboutUsListItem = (info: Info, pos: number) => {
  return (
    <MotionLi
      key={pos}
      x={-40}
      y={0}
      className="group flex items-center gap-4 py-6 lg:gap-8"
    >
      <span className="w-16 shrink-0 text-6xl font-black text-[#92B4D4]/15 transition-colors duration-300 group-hover:text-[#3B9EFF] lg:w-24 lg:text-7xl">
        {String(pos + 1).padStart(2, "0")}
      </span>

      <div className="flex shrink-0 flex-col items-center gap-4 self-stretch">
        <div className="size-3 shrink-0 rounded-full bg-[#38547A] transition-colors duration-300 group-hover:bg-[#3B9EFF]" />

        <div className="w-0.5 flex-1 bg-linear-to-b from-[#38547A] to-transparent" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 lg:gap-4">
        <div className="flex items-center gap-4">
          <info.icon className="size-6 shrink-0 text-[#C4D8EE] transition-colors duration-300 group-hover:text-white lg:size-7" />

          <h2 className="text-base font-black uppercase text-[#C4D8EE] transition-colors duration-300 group-hover:text-white lg:text-xl">
            {info.name}
          </h2>
        </div>

        <p className="text-sm leading-relaxed text-[#92B4D4] lg:text-base">
          {info.description}
        </p>
      </div>
    </MotionLi>
  );
};

const eventListItem = (info: Info, pos: number) => {
  return (
    <MotionLi
      key={pos}
      x={pos % 2 === 0 ? -60 : 60}
      y={0}
      className="group flex items-center py-6 even:flex-row-reverse lg:py-4"
    >
      <div className="flex items-center rounded-full border-2 border-[#38547A] bg-[#233047] p-5 transition-colors duration-300 group-hover:border-white lg:p-6">
        <info.icon className="text-[#C4D8EE] transition-colors duration-300 group-hover:text-white lg:size-8" />
      </div>

      <div className="h-0.5 w-1/2 bg-linear-to-l from-[#38547A] to-transparent group-odd:bg-linear-to-r sm:w-full" />

      <div className="flex w-full flex-col gap-2 sm:w-1/2">
        <h2 className="text-base font-bold uppercase text-[#C4D8EE] transition-colors duration-300 group-hover:text-white lg:mb-4 lg:text-xl">
          {info.name}
        </h2>

        <p className="text-sm leading-relaxed text-[#92B4D4] lg:text-base">
          {info.description}
        </p>
      </div>
    </MotionLi>
  );
};

export default function Home() {
  const aboutUsElements = aboutUsData.map(aboutUsListItem);
  const eventsElements = eventData.map(eventListItem);

  return (
    <MotionProvider>
      <div className="overflow-x-clip bg-[#161E2E]">
        {/* Hero */}
        <section className="relative h-screen w-full overflow-hidden">
          <Image
            src="/banner.webp"
            alt="Banner NECC"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute bottom-1/2 left-0 z-10 w-full px-6 sm:bottom-60 sm:px-10 lg:px-16">
            <div className="mx-auto flex w-full max-w-350 flex-col items-center gap-2 sm:flex-row lg:gap-6">
              <Reveal onLoad y={40}>
                <h1 className="font-orbitron text-6xl font-extrabold tracking-wide text-white md:text-8xl lg:text-9xl">
                  NECC
                </h1>
              </Reveal>

              <div className="hidden h-16 w-0.5 bg-white opacity-35 sm:block md:h-20" />

              <Reveal onLoad y={40} delay={0.25}>
                <h2 className="text-md font-orbitron leading-relaxed tracking-wide text-white opacity-75 lg:text-2xl">
                  Núcleo de Estudantes de
                  <br />
                  Ciências da Computação
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2">
            <Reveal
              onLoad
              y={0}
              delay={1}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-sm uppercase leading-relaxed text-white opacity-50">
                Desliza para ver mais
              </span>

              <MdOutlineKeyboardArrowDown className="animate-bounce text-3xl text-white opacity-50" />
            </Reveal>
          </div>
        </section>

        {/* Sobre nós */}
        <section className="mx-auto grid w-full max-w-400 grid-cols-1 items-center gap-8 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[30rem_1fr] lg:gap-4 lg:px-16 lg:py-20">
          <Reveal>
            <h1 className="text-center text-3xl font-bold uppercase text-white lg:text-left lg:text-5xl">
              Sobre nós
            </h1>

            <p className="mt-4 text-center text-sm text-[#92B4D4] sm:text-base lg:text-left">
              Tudo que precisas de saber sobre o NECC.
            </p>
          </Reveal>

          <ol>{aboutUsElements}</ol>
        </section>

        {/* Eventos */}
        <section className="mx-auto w-full max-w-400 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <Reveal className="mb-12 flex items-center gap-6 sm:mb-16">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#38547A]" />

            <h1 className="text-center text-3xl font-bold text-white lg:text-6xl">
              Eventos
            </h1>

            <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#38547A]" />
          </Reveal>

          <ul>{eventsElements}</ul>
        </section>

        {/* Parceiros */}
        <section className="mx-auto w-full max-w-400 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <Reveal className="flex items-center gap-6">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#38547A]" />

            <h1 className="text-center text-3xl font-bold text-white lg:text-6xl">
              Parceiros
            </h1>

            <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#38547A]" />
          </Reveal>

          <p className="pt-6 pb-10 text-center text-sm leading-relaxed text-[#92B4D4] lg:text-base">
            Com o teu cartão de membro NECC tens acesso a descontos e benefícios
            exclusivos nos nossos parceiros locais em Braga.
          </p>

          <Marquee speed={60} gradient={false} pauseOnHover>
            {partnerData.map((partner) => (
              <div key={partner.name} className="mx-4 w-64">
                <PartnerCard partner={partner} />
              </div>
            ))}
          </Marquee>
        </section>

        {/* Call to action */}
        <section className="mx-auto grid w-full max-w-400 grid-cols-1 gap-4 px-6  text-[#92B4D4] sm:px-10 py-16 lg:grid-cols-2 lg:gap-6 lg:px-16 lg:py-20">
          {/* Merchandising — apenas desktop */}
          <Reveal className="hidden lg:col-span-2 lg:block">
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#1A2640] to-[#111827] p-5 transition-colors hover:border-[#3B9EFF]/50 hover:from-[#1A2640]/90 hover:to-[#111827]/90 sm:p-8 lg:flex-row lg:items-center lg:p-6">
              <div className="relative z-10 flex max-w-2xl flex-col items-start gap-4">
                <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-5xl">
                  Merchandising
                </h2>

                <p className="max-w-xl text-sm leading-relaxed text-[#92B4D4] sm:text-base">
                  Hoodies, t-shirts, canecas e muito mais. Mostra o teu espírito
                  académico e aproveita descontos exclusivos por seres sócio do
                  NECC.
                </p>

                <a
                  href=""
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#92B4D4]/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-[#92B4D4]/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#92B4D4] sm:w-fit sm:px-5"
                >
                  Explorar merchandising
                  <FaArrowRight />
                </a>
              </div>

              <div className="relative hidden h-64 w-80 shrink-0 lg:block">
                <Image
                  src="/images/merchandising/merchandising2.png"
                  alt="Estudante a vestir uma t-shirt do NECC"
                  width={196}
                  height={256}
                  className="absolute top-8 left-4 z-20 w-36 rounded-lg border border-white/10 object-cover shadow-xl transition-transform duration-300 group-hover:-rotate-3"
                />

                <Image
                  src="/images/merchandising/merchandising1.png"
                  alt="T-shirt do NECC"
                  width={196}
                  height={256}
                  className="absolute top-0 left-36 z-10 w-36 rounded-lg border border-white/10 object-cover shadow-xl transition-transform duration-300 group-hover:rotate-3"
                />
              </div>
            </div>
          </Reveal>

          {/* Sócios */}
          <Reveal delay={0.1} className="lg:h-full">
            <div className="flex flex-col gap-4 rounded-2xl border border-[#3B9EFF]/20 bg-linear-to-br from-[#15428C] to-[#19283F] p-5 transition-colors duration-300 hover:border-[#3B9EFF]/50 sm:p-8 lg:h-full">
              <div className="flex flex-1 flex-col gap-2 sm:gap-3">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Torna-te sócio
                </h2>

                <p className="max-w-md text-sm leading-relaxed text-[#D0E1F3] sm:text-base">
                  Participa nos nossos eventos e usufrui de benefícios
                  exclusivos para a comunidade de Ciências da Computação.
                </p>
              </div>

              <a
                href=""
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#92B4D4]/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-[#92B4D4]/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#92B4D4] sm:w-fit sm:px-5"
              >
                Tornar-me sócio
                <FaArrowRight />
              </a>
            </div>
          </Reveal>

          {/* Colaboradores — apenas desktop */}
          <Reveal delay={0.2} className="hidden lg:block lg:h-full">
            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-linear-to-br from-[#233047] to-[#19283F] p-5 transition-colors duration-300 hover:border-[#92B4D4]/40 sm:p-8 lg:h-full">
              <div className="flex flex-1 flex-col gap-2 sm:gap-3">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Torna-te colaborador
                </h2>

                <p className="max-w-md text-sm leading-relaxed text-[#92B4D4] sm:text-base">
                  Junta-te a um ou mais departamentos, desenvolve novas
                  competências e ajuda a dinamizar a comunidade académica.
                </p>
              </div>

              <a
                href=""
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#92B4D4]/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-[#92B4D4]/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#92B4D4] sm:w-fit sm:px-5"
              >
                Tornar-me colaborador
                <FaArrowRight />
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </MotionProvider>
  );
}