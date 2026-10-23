import Image from "next/image";
import { aboutUsData, eventData } from "@/data/ladingPage";
import { partnerData } from "@/data/partners";
import { Info, Partner } from "@/types";
import { FaArrowDown } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="rounded-md h-full w-full flex flex-col items-center border-2 border-solid overflow-hidden bg-[#233047] border-[#38547A]">
      <img
        src={partner.image}
        alt={"Logo de " + partner.name}
        className="object-cover object-center flex-auto min-h-0 w-full"
      />
      <p className="text-center flex-none p-2 font-semibold text-white">
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
          <FaArrowDown className="text-white opacity-50 text-3xl animate-bounce" />
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

      <section
        className="w-full py-2 lg:py-16 px-6 sm:px-10 lg:px-16 mx-auto max-w-400 text-[#92B4D4]
        grid lg:grid-cols-2 grid-cols-1 gap-4"
      >
        <div
          className="col-span-2 flex flex-col lg:flex-row place-content-between items-center
        bg-linear-to-bl to-[#111827] from-[#1A2640] rounded-xl p-8"
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-bold lg:text-5xl text-3xl text-white mb-4">
              Merchandising
            </h2>
            <p className="max-w-240">
              Hoodies, t-shirts, canecas e muito mais. Como sócio tens desconto
              em todos os produtos.
            </p>
            <a className="p-2 bg-[#FFFFFF40] text-sm lg:text-base text-foreground2 self-start rounded-lg">
              Merchandising
            </a>
          </div>

          <div className="relative w-1/2 h-48 lg:h-72">
            <Image
              src="/images/merchandising/merchandising2.png"
              alt="Foto de um rapaz vestindo a camisa do NECC"
              width={196}
              height={256}
              className="absolute w-32 lg:w-48 top-10 left-5 rotate-350 rounded-md z-20 border-solid border-4 border-[#FFFFFF10]"
            />
            <Image
              src="/images/merchandising/merchandising1.png"
              alt="Foto da camisa do NECC"
              width={196}
              height={256}
              className="absolute w-32 lg:w-48 top-4 left-15 rotate-30 z-10 rounded-md border-solid border-4 border-[#FFFFFF10]"
            />
          </div>
        </div>

        <div
          className="flex place-content-between col-span-2 lg:col-span-1
        bg-linear-to-bl to-[#19283F] from-[#15428C] rounded-xl p-8"
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl lg:text-3xl text-white">
              Torna-te Sócio
            </h2>
            <p className="max-w-88 text-sm lg:text-base">
              Participa em todos os nossos eventos gratuitamente e usufrui de
              benefícios exclusivos.
            </p>
            <a className="p-2 bg-[#FFFFFF40] text-sm lg:text-base text-foreground2 self-start rounded-lg">
              Saber mais
            </a>
          </div>

          <Image
            src="/logo.png"
            alt="Logo NECC"
            width={60}
            height={60}
            className="h-10 w-10 lg:h-15 lg:w-15"
          />
        </div>

        <div className="bg-linear-to-bl col-span-2 lg:col-span-1 to-background2 from-[#92B4D4] rounded-xl p-8 flex flex-col gap-4">
          <h2 className="font-bold text-xl lg:text-3xl text-white">
            Torna-te colaborador
          </h2>
          <p className="max-w-88 text-sm lg:text-base">
            Faz parte de um ou mais departamentos e contribui para o
            funcionamento do teu núcleo.
          </p>
          <a className="p-2 self-start bg-[#FFFFFF40] text-sm lg:text-base text-foreground2 rounded-lg shrink">
            Saber mais
          </a>
        </div>
      </section>
    </div>
  );
}
