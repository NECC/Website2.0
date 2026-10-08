import { teamData } from "@/data/team";
import type { TeamMember } from "@/types";

type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};

const MemberCard = ({ role, name, imgUrl }: TeamMember) => {
  return (
    <div className="bg-[#2c405a] rounded-xl flex flex-col items-center justify-center p-4 lg:p-6 transition-transform hover:-translate-y-1 w-full sm:w-44 lg:w-52 aspect-[3/4]">
      <div className="relative rounded-full p-1 border-[1.5px] border-dashed border-slate-300/60 mb-3 lg:mb-5 w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center shrink-0">
        <div className="w-full h-full rounded-full overflow-hidden bg-[#1a2639]">
          {imgUrl && (
            <img
              src={imgUrl}
              alt={`Foto de ${name}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            />
          )}
        </div>
      </div>

      <h4 className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm text-slate-300 font-medium tracking-wide text-center mb-1.5 lg:mb-2 leading-tight">
        {role}
      </h4>

      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-bold text-center leading-tight">
        {name || "Por definir"}
      </h3>
    </div>
  );
};

const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <div className="flex flex-row gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
      <div className="flex shrink-0 items-end w-8 sm:w-12 lg:w-16 justify-center">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold uppercase tracking-widest text-[#4a658a] [writing-mode:vertical-rl] rotate-180">
          {title}
        </h2>
      </div>

      <div className="grow w-full overflow-hidden">{children}</div>
    </div>
  );
};

const Department = ({
  title,
  members,
}: {
  title: string;
  members: TeamMember[];
}) => {
  return (
    <div className="flex flex-row gap-4 sm:gap-6 lg:gap-8">
      <div className="flex shrink-0 items-center w-8 sm:w-12 lg:w-16 justify-center">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-widest text-[#4a658a] [writing-mode:vertical-rl] rotate-180">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-start grow w-full">
        {members.map((member) => (
          <MemberCard key={`${member.role}-${member.name}`} {...member} />
        ))}
      </div>
    </div>
  );
};

export default function TeamPage() {
  return (
    <main className="bg-background">
      <div className="w-full py-16 px-6 sm:px-10 lg:px-16 mx-auto max-w-400">
        {/* Header */}
        <header className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-6 w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
                EQUIPA
              </h1>
              <div className="hidden sm:block h-px bg-slate-600 flex-1 mx-2"></div>
              <h2 className="hidden sm:block text-2xl sm:text-3xl font-bold text-[#4a658a] whitespace-nowrap">
                2026/27
              </h2>
            </div>

            <div className="sm:hidden h-px bg-slate-600 w-16 my-2"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-4 sm:mt-2">
            <div className="text-xs sm:text-sm lg:text-base text-slate-400 max-w-2xl leading-relaxed">
              <p>Aqui podes conhecer a equipa do NECC.</p>
              <p>
                Que trabalha arduamente para que tenhas o melhor percurso
                académico e tire o maior proveito do teu curso.
              </p>
            </div>
            <h2 className="sm:hidden text-xl font-bold text-[#4a658a] self-end mt-4">
              2026/27
            </h2>
          </div>
        </header>

        {/* Direção */}
        <SectionWrapper title="Direção">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 justify-start sm:w-fit">
            {teamData.direcao.map((member) => (
              <MemberCard key={`${member.role}-${member.name}`} {...member} />
            ))}
          </div>
        </SectionWrapper>
        {/* Assembleia Geral / Conselho Fiscal */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-12 xl:gap-8 lg:gap-16 mb-20 md:mb-24">
          <SectionWrapper title="Assembleia Geral">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-start">
              {teamData.assembleia.map((member) => (
                <MemberCard key={`${member.role}-${member.name}`} {...member} />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper title="Conselho Fiscal">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-start">
              {teamData.conselho.map((member) => (
                <MemberCard key={`${member.role}-${member.name}`} {...member} />
              ))}
            </div>
          </SectionWrapper>
        </div>

        {/* Departamentos */}
        <div className="mt-12 sm:mt-20">
          {/* Título Mobile */}
          <div className="md:hidden flex justify-center mb-12">
            <h1 className="text-2xl font-bold text-white uppercase tracking-widest">
              Departamentos
            </h1>
          </div>

          {/* Grid de Departamentos */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-12 md:gap-y-16 md:gap-x-8 lg:gap-x-16 items-start">
            <div className="hidden md:flex justify-start">
              <h1 className="text-5xl lg:text-9xl font-black text-white leading-none tracking-tighter">
                DE
                <br />
                PARTA
                <br />
                MEN
                <br />
                TOS
              </h1>
            </div>

            {/* Desenvolvimento */}
            <div>
              <Department
                title="Desenvolvimento"
                members={teamData.departamentos.desenvolvimento}
              />
            </div>

            {/* Pedagógico */}
            <div>
              <Department
                title="Pedagógico"
                members={teamData.departamentos.pedagogico}
              />
            </div>

            {/* Recreativo */}
            <div>
              <Department
                title="Recreativo"
                members={teamData.departamentos.recreativo}
              />
            </div>

            {/* Comunicação */}
            <div>
              <Department
                title="Comunicação"
                members={teamData.departamentos.comunicacao}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
