// URL gerado com um SVG de avatar neutro (fundo cinza, silhueta branca tipo Instagram)
const DEFAULT_AVATAR =
  "data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='512' cy='512' r='512' fill='%23cbd5e1'/%3E%3Cpath d='M512 506c-85 0-154-69-154-154s69-154 154-154 154 69 154 154-69 154-154 154zm0-243c-49 0-89 40-89 89s40 89 89 89 89-40 89-89-40-89-89-89zm240 551c-9 0-16-6-18-15-18-112-106-193-222-193s-204 81-222 193c-1 9-10 16-19 14-9-1-16-10-14-19 21-127 122-221 255-221s234 94 255 221c2 9-5 18-14 19h-1z' fill='%23ffffff'/%3E%3C/svg%3E";

type TeamMember = {
  role: string;
  name: string;
  imgUrl: string;
};

type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};

// Estrutura estrita de membros passada no pedido
// O campo imgUrl está vazio; quando quiseres adicionar a foto, basta colocares o link/caminho aqui.
const teamData = {
  direcao: [
    { role: "Presidente", name: "João Neiva", imgUrl: "" },
    { role: "Vice-presidente", name: "Esteban", imgUrl: "" },
    { role: "Tesoureiro", name: "Dinis", imgUrl: "" },
    { role: "Secretário", name: "Fernanda", imgUrl: "" },
    { role: "Vogais", name: "Luís Silva", imgUrl: "" },
  ],
  assembleia: [
    { role: "Presidente", name: "Gonçalo Soares", imgUrl: "" },
    { role: "Vice-Presidente", name: "Davide", imgUrl: "" },
    { role: "Secretário", name: "Miguel Arieiro", imgUrl: "" },
  ],
  conselho: [
    { role: "Presidente", name: "Bruno Jardim", imgUrl: "" },
    { role: "Vice-Presidente", name: "Renato", imgUrl: "" },
    { role: "Secretário", name: "", imgUrl: "" },
  ],
  departamentos: {
    pedagogico: [
      { role: "Diretor", name: "Pedro Rosa", imgUrl: "" },
      { role: "Co-diretor", name: "Pedro Gomes", imgUrl: "" },
      { role: "Integrante", name: "Bonifácio", imgUrl: "" },
      { role: "Integrante", name: "Gonçalo Sousa", imgUrl: "" },
    ],
    comunicacao: [
      { role: "Diretor", name: "Rafaela", imgUrl: "" },
      { role: "Co-diretor", name: "Artur", imgUrl: "" },
      { role: "Integrante", name: "Gabriela Barros", imgUrl: "" },
      { role: "Integrante", name: "Inês Rebelo", imgUrl: "" },
      { role: "Integrante", name: "David Lobo", imgUrl: "" },
    ],
    desenvolvimento: [
      { role: "Diretor", name: "Carlos", imgUrl: "" },
      { role: "Co-diretor", name: "Nizzo", imgUrl: "" },
      { role: "Integrante", name: "Pedro Silva", imgUrl: "" },
      { role: "Integrante", name: "Taveira", imgUrl: "" },
      { role: "Integrante", name: "Mossi", imgUrl: "" },
    ],
    recreativo: [
      { role: "Diretor", name: "Ze Novais", imgUrl: "" },
      { role: "Co-diretor", name: "Martim", imgUrl: "" },
      { role: "Integrante", name: "Nuno", imgUrl: "" },
    ],
  },
};

// Componente do Cartão do Membro
const MemberCard = ({ role, name, imgUrl }: TeamMember) => {
  // Usa o DEFAULT_AVATAR se o imgUrl estiver vazio
  const imageSource = imgUrl || DEFAULT_AVATAR;

  return (
    <div className="bg-[#2c3e56] rounded-xl flex flex-col items-center justify-center p-5 transition-transform hover:-translate-y-1 w-40 h-52 sm:w-44 sm:h-56">
      <div className="relative rounded-full overflow-hidden mb-4 w-20 h-20 sm:w-24 sm:h-24">
        <img
          src={imageSource}
          alt={name}
          // CLASSES IMPORTANTES MANTIDAS:
          // O grayscale está cá para quando trocares pelo link de uma foto real a cores
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
        />
      </div>
      <h4 className="text-[10px] sm:text-xs text-slate-400 font-bold tracking-wide uppercase text-center mb-1.5 leading-tight">
        {role}
      </h4>
      <h3 className="text-sm sm:text-base text-white font-semibold text-center leading-tight">
        {name}
      </h3>
    </div>
  );
};

// Componente para criar os Títulos laterais
const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
      <div className="flex sm:w-16 flex-shrink-0 items-center sm:items-start justify-center sm:justify-end">
        {/* Título Rotacionado em Desktop */}
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-widest text-[#4a658a] sm:[writing-mode:vertical-rl] sm:rotate-180">
          {title}
        </h2>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#151c27] text-white font-sans selection:bg-blue-500 selection:text-white pb-20">
      {/* Container Principal */}
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
        {/* Cabeçalho */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-700/50 pb-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              EQUIPA
            </h1>
          </div>
          <div className="mt-6 sm:mt-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4a658a]">
              2026/27
            </h2>
          </div>
        </header>

        {/* --- Direcção --- */}
        <SectionWrapper title="Direção">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
            {teamData.direcao.map((member, idx) => (
              <MemberCard key={idx} {...member} />
            ))}
          </div>
        </SectionWrapper>

        {/* --- Assembleia Geral & Conselho Fiscal --- */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 mb-16 border-b border-slate-700/50 pb-16">
          <SectionWrapper title="Assembleia Geral">
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {teamData.assembleia.map((member, idx) => (
                <MemberCard key={idx} {...member} />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper title="Conselho Fiscal">
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {teamData.conselho.map((member, idx) => (
                <MemberCard key={idx} {...member} />
              ))}
            </div>
          </SectionWrapper>
        </div>

        {/* --- Bloco DEPARTAMENTOS --- */}
        <div className="mt-20 flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Typografia Gigante à Esquerda */}
          <div className="hidden md:flex flex-col flex-shrink-0 w-64 pt-4">
            <h1 className="text-6xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter break-words">
              DE
              <br />
              PARTA
              <br />
              MEN
              <br />
              TOS
            </h1>
          </div>
          {/* Título normal em mobile */}
          <div className="md:hidden">
            <h1 className="text-4xl font-black text-white uppercase tracking-wider mb-8">
              Departamentos
            </h1>
          </div>

          {/* Listagem dos Departamentos */}
          <div className="flex-grow flex flex-col gap-12">
            {/* Pedagógico */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex sm:w-12 flex-shrink-0 items-center sm:items-start justify-center sm:justify-end">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-[#4a658a] sm:[writing-mode:vertical-rl] sm:rotate-180">
                  Pedagógico
                </h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start flex-grow">
                {teamData.departamentos.pedagogico.map((member, idx) => (
                  <MemberCard key={idx} {...member} />
                ))}
              </div>
            </div>

            {/* Comunicação */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex sm:w-12 flex-shrink-0 items-center sm:items-start justify-center sm:justify-end">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-[#4a658a] sm:[writing-mode:vertical-rl] sm:rotate-180">
                  Comunicação
                </h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start flex-grow">
                {teamData.departamentos.comunicacao.map((member, idx) => (
                  <MemberCard key={idx} {...member} />
                ))}
              </div>
            </div>

            {/* Desenvolvimento */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex sm:w-12 flex-shrink-0 items-center sm:items-start justify-center sm:justify-end">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-[#4a658a] sm:[writing-mode:vertical-rl] sm:rotate-180">
                  Desenvolvimento
                </h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start flex-grow">
                {teamData.departamentos.desenvolvimento.map((member, idx) => (
                  <MemberCard key={idx} {...member} />
                ))}
              </div>
            </div>

            {/* Recreativo */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex sm:w-12 flex-shrink-0 items-center sm:items-start justify-center sm:justify-end">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-[#4a658a] sm:[writing-mode:vertical-rl] sm:rotate-180">
                  Recreativo
                </h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start flex-grow">
                {teamData.departamentos.recreativo.map((member, idx) => (
                  <MemberCard key={idx} {...member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
