import Image from "next/image";
import Carousel from "./components/Carousel";
import { 
  FaArrowDown,
  FaUser,
  FaCalendar,
  FaMapPin,
  FaUserGroup,
  FaWrench,
  FaCircleQuestion,
  FaDisplay,
  FaAtom,
} from "react-icons/fa6";

type Info = {
  name: string;
  icon: any;
  description: string;
}

const aboutUsList: Info[] = [
  {
    name: "Missão",
    icon: FaUser,
    description: "Representar e apoiar os estudantes de Ciências da Computação da Universidade do Minho, promovendo o seu desenvolvimento académico, profissional e pessoal.",
  },
  {
    name: "Fundação",
    icon: FaCalendar,
    description: "Fundado em 2001, o NECC é um dos núcleos de estudantes mais antigos da Universidade do Minho, com mais de duas décadas ao serviço da comunidade académica.",
  },
  {
    name: "Localização",
    icon: FaMapPin,
    description: "Encontra-nos no Departamento de Informática da Universidade do Minho, sala 1.03, Campus de Gualtar, Braga.",
  },
  {
    name: "Comunidade",
    icon: FaUserGroup,
    description: "Uma comunidade ativa de estudantes organizada em departamentos de Direção, Desenvolvimento, Comunicação, Pedagógico, Recreativo e órgãos fiscais.",
  },
] as const;

const eventList: Info[] = [
  {
    name: "Workshops",
    icon: FaWrench,
    description: "Sessões práticas sobre tecnologias, linguagens e ferramentas relevantes para a área da computação, conduzidas por membros e convidados.",
  },
  {
    name: "Sessões de dúvidas",
    icon: FaCircleQuestion,
    description: "Espaços de apoio académico onde membros mais experientes ajudam colegas a superar dificuldades nas unidades curriculares do curso.",
  },
  {
    name: "LIP",
    icon: FaDisplay,
    description: "Linux Installation Party — um evento dedicado a ajudar estudantes a instalar e configurar Linux, promovendo o software livre e o controlo do próprio ambiente de trabalho.",
  },
  {
    name: "SCI",
    icon: FaAtom,
    description: "Semana da Ciência e Inovação — uma semana de palestras, painéis e demonstrações com investigadores e profissionais da área da computação e tecnologia.",
  },
] as const;

// TODO(roberto): Fill all partners
const partnerList: Partner[] = [
  {name: "Teste", description: "Todos os benefícios do teste"},
  {name: "Teste 2", description: "Todos os benefícios do teste 2"},
] as const;

export type Partner = {
  name: string;
  imageSrc?: string;
  description: string;
};

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="rounded-md h-full w-full flex flex-col items-center bg-background2 border-1 border-solid overflow-hidden">
      <img src={partner.imageSrc}
        alt={"Logo de " + partner.name}
        className="object-cover object-center flex-auto min-h-0 w-full"
      />
      <p className="text-center flex-none p-2">{partner.name}</p>
    </div>
  );
}

const aboutUsListItem = (info: Info, pos: number) => {
  return (
    <li key={pos}>
      <div className="flex gap-4 lg:gap-12 items-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="size-[8px] bg-[#38547A] rounded-full"></div>
          <div className="w-[1px] h-[80px] bg-linear-to-bl from-[#38547A] to-transparent"></div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2 text-foreground2">
            <info.icon className="size-4 lg:size-8"/>
            <h2 className="text-md lg:text-xl weight-900 uppercase">{info.name}</h2>
          </div>
          <p className="text-xs lg:text-sm">{info.description}</p>
        </div>
      </div>
    </li>
  );
};

const eventListItem = (info: Info, pos: number) => {
  return (
    <li key={pos} className="flex odd:flex-row-reverse items-center py-2 lg:py-4 group">
      <div className="size-[4rem] bg-[#233047] flex items-center rounded-full flex-shrink border-solid border-1">
        <info.icon className="m-auto lg:size-[2rem]"/>
      </div>
      <div className="h-[1px] group-odd:bg-linear-to-l group-even:bg-linear-to-r from-border to-transparent flex-grow"></div>
      <div className="flex-shrink w-1/2 lg:w-full lg:max-w-120">
        <h2 className="text-white text-base lg:text-xl font-bold lg:mb-4 weight-900 uppercase">{info.name}</h2>
        <p className="text-xs lg:text-lg">{info.description}</p>
      </div>
    </li>
  );
};

type CardInfo = {
  title: string;
  description: string;
  cta?: {
    label: string;
    href: string;
  };
  imageSrc?: string;
};

const Card = (info: CardInfo) => { };

export default function Home() {
  const aboutUsElements = aboutUsList.map(aboutUsListItem);
  const eventsElements = eventList.map(eventListItem);

  return (
    <div className="bg-background">
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
            <h2 className="font-orbitron text-md lg:text-2xl text-white opacity-75 tracking-wide leading-relaxed">
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

      <section className="w-full py-2 lg:py-16 px-2 sm:px-10 lg:px-16 mx-auto max-w-400
        grid lg:grid-cols-[24rem_1fr] items-center lg:gap-4 text-[#92B4D4]">
        <div>
          <h1 className="text-white separator text-3xl lg:text-5xl uppercase text-foreground2 font-bold">
            Sobre nós
          </h1>
          <p className="text-sm lg:text-md text-center">Tudo que precisas de saber sobre o NECC.</p>
        </div>
        <ol role="list" className="m-0 p-0 py-4 list-about-us grid gap-1 list-inside">
          {aboutUsElements}
        </ol>
      </section>

      <section className="w-full py-2 lg:py-16 lg:px-16 mx-auto max-w-400 text-[#92B4D4]">
        <h1 className="text-white separator text-3xl lg:text-7xl font-bold">
          Eventos
        </h1>
        <ul className="m-0 p-0 px-4 py-4 grid gap-1 list-inside">
          {eventsElements}
        </ul>
      </section>

      <section className="w-full py-2 lg:py-16 px-6 sm:px-10 lg:px-16 mx-auto max-w-400 text-[#92B4D4]">
        <h1 className="text-white separator text-3xl lg:text-7xl font-bold py-4">
          Parceiros
        </h1>
        <Carousel itemSize={256} gap={32} speed={60}>
          {partnerList.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </Carousel>
      </section>

      <section className="w-full py-2 lg:py-16 px-6 sm:px-10 lg:px-16 mx-auto max-w-400 text-[#92B4D4]
        grid lg:grid-cols-2 grid-cols-1 gap-4">

        <div className="col-span-2 flex flex-col lg:flex-row place-content-between items-center
        bg-linear-to-bl to-[#111827] from-[#1A2640] rounded-xl p-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold lg:text-5xl text-3xl text-white mb-4">Merchandising</h2>
            <p className="max-w-240">Hoodies, t-shirts, canecas e muito mais. Como sócio tens desconto em todos os produtos.</p>
            {/* TODO(roberto):  fill redirect link */}
            <a className="p-2 bg-[#FFFFFF40] text-sm lg:text-base text-foreground2 self-start rounded-lg">Merchandising</a>
          </div>

          <div className="relative w-1/2 h-[12rem] lg:h-[18rem]">
            <Image
              src="/merchandising-02.png"
              alt="Foto de um rapaz vestindo a camisa do NECC"
              width={196}
              height={256}
              className="absolute w-32 lg:w-48 top-10 left-5 rotate-350 rounded-md z-20 border-solid border-4 border-[#FFFFFF10]"
            />
            <Image
              src="/merchandising-01.png"
              alt="Foto da camisa do NECC"
              width={196}
              height={256}
              className="absolute w-32 lg:w-48 top-4 left-15 rotate-30 z-10 rounded-md border-solid border-4 border-[#FFFFFF10]"
            />
          </div>
        </div>

        <div className="flex place-content-between col-span-2 lg:col-span-1
        bg-linear-to-bl to-[#19283F] from-[#15428C] rounded-xl p-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl lg:text-3xl text-white">Torna-te Sócio</h2>
            <p className="max-w-88 text-sm lg:text-base">Participa em todos os nossos eventos gratuitamente e usufrui de benefícios exclusivos.</p>
            {/* TODO(roberto):  fill redirect link */}
            <a className="p-2 bg-[#FFFFFF40] text-sm lg:text-base text-foreground2 self-start rounded-lg">Saber mais</a>
          </div>

          <Image
            src="/logo.png"
            alt="Logo NECC"
            width={60}
            height={60}
            className="h-10 w-10 lg:h-15 lg:w-15"
          />
        </div>

        <div className="bg-linear-to-bl col-span-2 lg:col-span-1 to-[#233047] from-[#92B4D4] rounded-xl p-8 flex flex-col gap-4">
          <h2 className="font-bold text-xl lg:text-3xl text-white">Torna-te colaborador</h2>
          <p className="max-w-88 text-sm lg:text-base">Faz parte de um ou mais departamentos e contribui para o funcionamento do teu núcleo.</p>
          {/* TODO(roberto):  fill redirect link */}
          <a className="p-2 self-start bg-[#FFFFFF40] text-sm lg:text-base text-foreground2 rounded-lg shrink">Saber mais</a>
        </div>
      </section>
    </div>
  );
}
