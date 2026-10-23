import Image from "next/image";
import { aboutUsData, eventData } from "@/data/ladingPage";
import { partnerData } from "@/data/partners";
import { Info, Partner } from "@/types";
import Marquee from "react-fast-marquee";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="rounded-md h-full w-full flex flex-col items-center border-2 border-solid overflow-hidden bg-[#233047] border-[#38547A]">
      <img
        src={partner.image}
        alt={"Logo de " + partner.name}
        className="object-cover object-center flex-auto min-h-0 w-full"
      />
      <p className="text-center font-semibold text-white p-4">
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

      {/* Separador */}
      <div className="flex self-stretch shrink-0 flex-col items-center gap-4">
        <div className="size-3 shrink-0 rounded-full bg-[#38547A] transition-colors duration-300 group-hover:bg-[#3B9EFF]" />

        <div className="w-0.5 flex-1 bg-linear-to-b from-[#38547A] to-transparent" />
      </div>

      {/* Conteúdo */}
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

      <div className="flex sm:w-1/2  w:3/4 flex-col gap-2">
        <h2 className="text-base font-bold uppercase text-[#C4D8EE] transition-colors duration-300 group-hover:text-white lg:mb-4 lg:text-xl">
          {info.name}
        </h2>

        <p className="text-xs text-[#92B4D4] lg:text-lg">{info.description}</p>
      </div>
    </li>
  );
};

export default function Home() {
  const aboutUsElements = aboutUsData.map(aboutUsListItem);
  const eventsElements = eventData.map(eventListItem);

  return (
    <div className="bg-[#161E2E]">
      <div className="h-screen relative w-full overflow-hidden">
        <Image
          src="/banner.png"
          alt="Banner NECC"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute z-10 bottom-60 left-0 w-full px-6 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-350 flex items-center gap-2 lg:gap-6">
            <h1 className="font-orbitron font-extrabold text-5xl lg:text-9xl text-white tracking-wide ">
              NECC
            </h1>

            <div className="h-16 md:h-20 w-1 bg-white opacity-35"></div>
            <h2 className="font-orbitron md:text-md text-sm  lg:text-2xl text-white opacity-75 tracking-wide leading-relaxed">
              Núcleo de Estudantes de
              <br />
              Ciências da Computação
            </h2>
          </div>
        </div>

        <div className="absolute z-10 bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-sm text-white opacity-50 leading-relaxed uppercase">
            Desliza para ver mais
          </span>
          <MdOutlineKeyboardArrowDown className="text-white opacity-50 text-3xl animate-bounce" />
        </div>
      </div>
      <section
        className="w-full py-2 lg:py-16 px-2 sm:px-10 lg:px-16 mx-auto max-w-400
        grid lg:grid-cols-[30rem_1fr] items-center lg:gap-4"
      >
        <div>
          <h1 className="text-3xl lg:text-5xl uppercase text-white font-bold text-center lg:text-left ">
            Sobre nós
          </h1>
          <p className="text-sm lg:text-md text-center lg:text-left text-[#92B4D4] mt-4 sm:mb-8 mb-20">
            Tudo que precisas de saber sobre o NECC.
          </p>
        </div>
        <ol
          role="list"
          className="m-0 p-0 py-4 grid gap-1 list-inside list-none w-full [counter-reset:orderedList] text-[#92B4D4]"
        >
          {aboutUsElements}
        </ol>
      </section>
      <section className="w-full py-2 lg:py-16 lg:px-16 mx-auto max-w-400 text-[#92B4D4]">
        <div className="flex items-center gap-6 mb-20">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#38547A]" />

          <h1 className="text-center text-3xl font-bold text-white lg:text-6xl">
            Eventos
          </h1>

          <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#38547A]" />
        </div>

        <ul className="m-0 p-0 px-4 py-4 grid gap-1 list-inside">
          {eventsElements}
        </ul>
      </section>
      <section className="w-full py-2 lg:py-16 px-6 sm:px-10 lg:px-16 mx-auto max-w-400 ">
        <div className="flex items-center gap-6 mb-20">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#38547A]" />
          <h1 className="text-center text-3xl font-bold text-white lg:text-6xl">
            Parceiros
          </h1>
          <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#38547A]" />
        </div>

        <Marquee
          speed={60}
          gradient={false}
          pauseOnHover={true}
          className="py-4 "
        >
          {partnerData.map((partner) => (
            <div key={partner.name} className="w-64 mx-4">
              <PartnerCard partner={partner} />
            </div>
          ))}
        </Marquee>
      </section>
      <section className="mx-auto grid w-full max-w-400 grid-cols-1 gap-4 px-4 py-12 text-[#92B4D4] sm:px-8 lg:grid-cols-2 lg:gap-6 lg:px-16 lg:py-16">
        <div className="group relative hidden flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#1A2640] to-[#111827] p-5 sm:p-8 lg:col-span-2 lg:flex lg:flex-row lg:items-center lg:p-6">
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
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#92B4D4]/40 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-[#92B4D4] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#92B4D4] sm:w-auto"
            >
              Explorar merchandising
              <span><FaArrowRight /></span>
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
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-fit sm:px-5"
          >
            Tornar-me sócio
            <span>
              <FaArrowRight />
            </span>
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
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
