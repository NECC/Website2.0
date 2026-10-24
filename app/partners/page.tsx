/* importa os dados da equipa 
    adicona ao data/partners.ts as informações de cada parceria
    e exibe-as aqui
*/
export default function PartnersPage() {
  return (
    <main className="bg-[#161E2E]">
      <div className="w-full py-16 px-6 sm:px-10 lg:px-16 mx-auto max-w-400"> {/* esta linha define o espaçamento e o tamanho máximo da página */}
        <header className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-6 w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
                PARCERIAS
              </h1>
              <div className="hidden sm:block h-px bg-slate-600 flex-1 mx-2"></div>
             
            </div>

            <div className="sm:hidden h-px bg-slate-600 w-16 my-2"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-4 sm:mt-2">
            <div className="text-xs sm:text-sm lg:text-base text-slate-400 max-w-2xl leading-relaxed">
              <p>Aqui podes conhecer as parcerias do NECC.</p>
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
      </div>
    </main>
  );
}
