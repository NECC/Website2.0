import { teamData } from "@/data/team";
import type { TeamMember } from "@/types";
import Image from "next/image";
import { Reveal, MotionProvider } from "../components/motion";

type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};

const isLight = (index: number, cols: number) =>
  (Math.floor(index / cols) + (index % cols)) % 2 === 0;

const MemberCard = ({
  role,
  name,
  imgUrl,
  index,
}: TeamMember & { index: number }) => {
  const color = isLight(index, 2) ? "bg-[#38547A]" : "bg-[#233047]";

  return (
    <Reveal y={30} className="w-full sm:w-48 xl:w-54">
      <div
        className={`group flex aspect-square w-full flex-col items-center justify-center rounded-2xl p-4 sm:p-5 lg:p-6 ${color}`}
      >
        {/* Fotografia */}
        <div className="mb-3 h-24 w-24 shrink-0 overflow-hidden rounded-full border border-white p-1 sm:mb-4 sm:h-28 sm:w-28 lg:h-32 lg:w-32">
          {imgUrl ? (
            <Image
              src={imgUrl}
              width={128}
              height={128}
              alt={`Foto de ${name}`}
              className="h-full w-full rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-active:grayscale-0"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1e3047] text-2xl font-bold text-slate-400">
              {name.charAt(0)}
            </div>
          )}
        </div>

        <h4 className="mb-1.5 text-center text-[11px] font-medium uppercase tracking-wider text-slate-300 sm:text-xs lg:text-sm text-nowrap">
          {role}
        </h4>

        <h3 className="text-center text-sm font-bold leading-tight text-white sm:text-base lg:text-lg text-nowrap">
          {name}
        </h3>
      </div>
    </Reveal>
  );
};

const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <div className="mb-12 flex flex-row gap-4 sm:mb-16 sm:gap-6 lg:gap-8">
      {/* Título lateral */}
      <div className="flex w-8 shrink-0 items-center justify-start sm:w-12 lg:w-16">
        <h2 className="rotate-180 font-bold uppercase tracking-widest text-[#38547A] [writing-mode:vertical-rl] md:text-4xl text-3xl ">
          {title}
        </h2>
      </div>

      {/* Conteúdo */}
      <div className="w-full grow overflow-hidden sm:flex sm:items-center">
        {children}
      </div>
    </div>
  );
};

export default function TeamPage() {
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
                    EQUIPA
                  </h1>

                  <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#38547A]" />
                </div>
              </Reveal>
            </div>

            {/* Título Desktop */}
            <div className="hidden items-center gap-6 sm:flex">
              <Reveal y={30}>
                <h1 className="shrink-0 text-4xl font-extrabold uppercase tracking-tight text-white lg:text-5xl">
                  EQUIPA
                </h1>
              </Reveal>

              <div className="h-0.5 flex-1 bg-linear-to-r from-[#38547A] to-transparent" />

              <Reveal y={30} delay={0.2}>
                <h2 className="font-bold text-[#38547A] md:text-4xl text-3xl">2026/27</h2>
              </Reveal>
            </div>

            {/* Descrição */}
            <Reveal y={20} delay={0.2}>
              <div className="mt-4 max-w-2xl text-center text-xs leading-relaxed text-[#92B4D4] sm:text-start sm:text-sm lg:text-base">
                <p>Aqui podes conhecer a equipa do NECC.</p>
                <p>
                  Que trabalha arduamente para que tenhas o melhor percurso
                  académico e tires o maior proveito do teu curso.
                </p>
              </div>
            </Reveal>

            {/* Ano Mobile */}
            <Reveal y={20} delay={0.3}>
              <p className="mt-4 block text-end md:text-4xl text-3xl font-bold text-[#38547A] sm:hidden">
                2026/27
              </p>
            </Reveal>
          </header>

          {/* Direção */}
          <SectionWrapper title="Direção">
            <div className="grid grid-cols-2 justify-start gap-3 sm:w-fit sm:gap-4 md:grid-cols-3 lg:gap-6">
              {teamData.direcao.map((member, index) => (
                <MemberCard
                  key={`${member.role}-${member.name}`}
                  {...member}
                  index={index}
                />
              ))}
            </div>
          </SectionWrapper>

          {/* Assembleia Geral / Conselho Fiscal */}
          <div className="mb-20 grid grid-cols-1 gap-y-12 md:mb-24 lg:gap-16 xl:grid-cols-2 xl:gap-8">
            {/* Assembleia Geral */}
            <SectionWrapper title="Assembleia Geral">
              <div className="grid grid-cols-2 items-center justify-start gap-3 sm:flex sm:flex-wrap sm:gap-4 lg:gap-6">
                {teamData.assembleia.map((member, index) => (
                  <MemberCard
                    key={`${member.role}-${member.name}`}
                    {...member}
                    index={index}
                  />
                ))}
              </div>
            </SectionWrapper>

            {/* Conselho Fiscal */}
            <SectionWrapper title="Conselho Fiscal">
              <div className="grid grid-cols-2 justify-start gap-3 sm:flex sm:flex-wrap sm:gap-4 lg:gap-6">
                {teamData.conselho.map((member, index) => (
                  <MemberCard
                    key={`${member.role}-${member.name}`}
                    {...member}
                    index={index}
                  />
                ))}
              </div>
            </SectionWrapper>
          </div>

          {/* Departamentos */}
          <div className="mt-12 sm:mt-20">
            {/* Título Mobile */}
            <Reveal y={30}>
              <div className="mb-12 flex justify-center xl:hidden">
                <h1 className="text-center text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                  Departamentos
                </h1>
              </div>
            </Reveal>

            {/* Grid de Departamentos */}
            <div className="grid grid-cols-1 items-start gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16 xl:grid-cols-2">
              {/* Título Desktop */}
              <Reveal y={30} className="hidden justify-start xl:flex">
                <h1 className="text-5xl font-black leading-none tracking-tighter text-white lg:text-8xl xl:text-9xl">
                  DE
                  <br />
                  PARTA
                  <br />
                  MEN
                  <br />
                  TOS
                </h1>
              </Reveal>

              {/* Desenvolvimento */}
              <SectionWrapper title="Desenvolvimento">
                <div className="grid grid-cols-2 justify-start gap-3 sm:flex sm:flex-wrap sm:gap-4 lg:gap-6">
                  {teamData.departamentos.desenvolvimento.map(
                    (member, index) => (
                      <MemberCard
                        key={`${member.role}-${member.name}`}
                        {...member}
                        index={index}
                      />
                    ),
                  )}
                </div>
              </SectionWrapper>

              {/* Pedagógico */}
              <SectionWrapper title="Pedagógico">
                <div className="grid grid-cols-2 justify-start gap-3 sm:flex sm:flex-wrap sm:gap-4 lg:gap-6">
                  {teamData.departamentos.pedagogico.map((member, index) => (
                    <MemberCard
                      key={`${member.role}-${member.name}`}
                      {...member}
                      index={index}
                    />
                  ))}
                </div>
              </SectionWrapper>

              {/* Recreativo */}
              <SectionWrapper title="Recreativo">
                <div className="grid grid-cols-2 justify-start gap-3 sm:flex sm:flex-wrap sm:gap-4 lg:gap-6">
                  {teamData.departamentos.recreativo.map((member, index) => (
                    <MemberCard
                      key={`${member.role}-${member.name}`}
                      {...member}
                      index={index}
                    />
                  ))}
                </div>
              </SectionWrapper>

              {/* Comunicação */}
              <SectionWrapper title="Comunicação">
                <div className="grid grid-cols-2 justify-start gap-3 sm:flex sm:flex-wrap sm:gap-4 lg:gap-6">
                  {teamData.departamentos.comunicacao.map((member, index) => (
                    <MemberCard
                      key={`${member.role}-${member.name}`}
                      {...member}
                      index={index}
                    />
                  ))}
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </main>
    </MotionProvider>
  );
}
