import Image from "next/image";
import { aboutUsData, eventData } from "@/data/ladingPage";
import { partnerData } from "@/data/partners";
import { Info, Partner } from "@/types";
import Marquee from "react-fast-marquee";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex flex-col items-center rounded-xl border-2 border-solid border-[#38547A] bg-[#233047]">
      <Image
        width={256}
        height={256}
        src={partner.image}
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
    <li key={pos} className="group flex items-center gap-4 py-6 lg:gap-8">
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
    </li>
  );
};

const eventListItem = (info: Info, pos: number) => {
  return (
    <li
      key={pos}
      className="group flex items-center py-2 even:flex-row-reverse lg:py-4"
    >
      <div className="flex items-center rounded-full border-2 border-[#38547A] bg-[#233047] p-5 transition-colors duration-300 group-hover:border-white lg:p-6">
        <info.icon className="text-[#C4D8EE] transition-colors duration-300 group-hover:text-white lg:size-8" />
      </div>

      <div className="h-0.5 w-full bg-linear-to-l from-[#38547A] to-transparent group-odd:bg-linear-to-r" />

      <div className="flex w-3/4 flex-col gap-2 sm:w-1/2">
        <h2 className="text-base font-bold uppercase text-[#C4D8EE] transition-colors duration-300 group-hover:text-white lg:mb-4 lg:text-xl">
          {info.name}
        </h2>

        <p className="text-xs text-[#92B4D4] lg:text-lg">
          {info.description}
        </p>
      </div>
    </li>
  );
};

export default function Home() {
  const aboutUsElements = aboutUsData.map(aboutUsListItem);
  const eventsElements = eventData.map(eventListItem);

  return (
    <div className="bg-[#161E2E]">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/banner.webp"
          alt="Banner NECC"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute sm:bottom-60 bottom-1/2  left-0 z-10 w-full px-6 sm:px-10 lg:px-16">
          <div className="mx-auto flex sm:flex-row flex-col w-full max-w-350 items-center gap-2 lg:gap-6">
            <h1 className="font-orbitron md:text-8xl text-6xl font-extrabold tracking-wide text-white lg:text-9xl">
              NECC
            </h1>

            <div className="h-16 w-0.5 bg-white opacity-35 md:h-20 sm:block hidden " />

            <h2 className="font-orbitron  leading-relaxed tracking-wide text-white opacity-75 text-md lg:text-2xl">
              Núcleo de Estudantes de
              <br />
              Ciências da Computação
            </h2>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-sm uppercase leading-relaxed text-white opacity-50">
            Desliza para ver mais
          </span>
          <MdOutlineKeyboardArrowDown className="animate-bounce text-3xl text-white opacity-50" />
        </div>
      </section>

      {/* Sobre nós */}
      <section className="mx-auto grid w-full max-w-400 grid-cols-1 items-center gap-8 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[30rem_1fr] lg:gap-4 lg:px-16 lg:py-20">
        <div>
          <h1 className="text-center text-3xl font-bold uppercase text-white lg:text-left lg:text-5xl">
            Sobre nós
          </h1>

          <p className="mb-8 mt-4 text-center text-sm text-[#92B4D4] sm:mb-0 lg:text-left lg:text-base">
            Tudo que precisas de saber sobre o NECC.
          </p>
        </div>

        <ol className="m-0 grid w-full list-none gap-1 p-0 text-[#92B4D4]">
          {aboutUsElements}
        </ol>
      </section>

      {/* Eventos */}
      <section className="mx-auto w-full max-w-400 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mb-12 flex items-center gap-6 sm:mb-16">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#38547A]" />

          <h1 className="text-center text-3xl font-bold text-white lg:text-6xl">
            Eventos
          </h1>

          <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#38547A]" />
        </div>

        <ul className="m-0 grid list-inside gap-1 py-4">
          {eventsElements}
        </ul>
      </section>

      {/* Parceiros */}
      <section className="mx-auto w-full max-w-400 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mb-12 flex items-center gap-6 sm:mb-16">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#38547A]" />

          <h1 className="text-center text-3xl font-bold text-white lg:text-6xl">
            Parceiros
          </h1>

          <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#38547A]" />
        </div>

        <Marquee
          speed={60}
          gradient={false}
          pauseOnHover
        >
          {partnerData.map((partner) => (
            <div key={partner.name} className="mx-4 w-64  ">
              <PartnerCard partner={partner} />
            </div>
          ))}
        </Marquee>
      </section>

      {/* Call to action */}
      <section className="mx-auto grid w-full max-w-400 grid-cols-1 gap-4 px-6 py-12 text-[#92B4D4] sm:px-10 sm:py-16 lg:grid-cols-2 lg:gap-6 lg:px-16 lg:py-20">
        {/* Merchandising — apenas desktop */}
        <div className="group relative hidden flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#1A2640] to-[#111827] p-5 sm:p-8 lg:col-span-2 lg:flex lg:flex-row lg:items-center lg:p-6 hover:border-[#3B9EFF]/50 hover:bg-linear-to-br hover:from-[#1A2640]/90 hover:to-[#111827]/90">
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
              className="absolute left-4 top-8 z-20 w-36 rounded-lg border border-white/10 object-cover shadow-xl transition-transform duration-300 group-hover:-rotate-3"
            />

            <Image
              src="/images/merchandising/merchandising1.png"
              alt="T-shirt do NECC"
              width={196}
              height={256}
              className="absolute left-36 top-0 z-10 w-36 rounded-lg border border-white/10 object-cover shadow-xl transition-transform duration-300 group-hover:rotate-3"
            />
          </div>
        </div>

        {/* Sócios */}
        <div className="flex flex-col gap-4 rounded-2xl border border-[#3B9EFF]/20 bg-linear-to-br from-[#15428C] to-[#19283F] p-5 transition-colors duration-300 hover:border-[#3B9EFF]/50 sm:p-8 lg:h-full">
          <div className="flex flex-1 flex-col gap-2 sm:gap-3">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Torna-te sócio
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-[#D0E1F3] sm:text-base">
              Participa nos nossos eventos e usufrui de benefícios exclusivos
              para a comunidade de Ciências da Computação.
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

        {/* Colaboradores — apenas desktop */}
        <div className="hidden flex-col gap-4 rounded-2xl border border-white/10 bg-linear-to-br from-[#233047] to-[#19283F] p-5 transition-colors duration-300 hover:border-[#92B4D4]/40 sm:p-8 lg:flex lg:h-full">
          <div className="flex flex-1 flex-col gap-2 sm:gap-3">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Torna-te colaborador
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-[#92B4D4] sm:text-base">
              Junta-te a um ou mais departamentos, desenvolve novas competências
              e ajuda a dinamizar a comunidade académica.
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
      </section>
    </div>
  );
}