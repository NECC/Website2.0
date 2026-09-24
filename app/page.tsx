import { RiArrowDownWideFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      {/* Banner principal */}
      <div className="h-screen bg-[url('/banner.png')] bg-cover bg-center relative">
        
        <div className="absolute bottom-60 left-0 w-full px-6 sm:px-10 lg:px-16">
          {/* Alterado de max-w-7xl para max-w-[1400px] */}
          <div className="mx-auto w-full max-w-[1400px] flex items-center gap-6">
            <h1 className="font-orbitron font-extrabold text-9xl text-white tracking-wide ">
              NECC
            </h1>

            <div className="h-16 md:h-20 w-0.5 bg-white opacity-35"></div>
            <h2 className="font-orbitron text-2xl text-white opacity-75 tracking-wide leading-relaxed">
              Núcleo de Estudantes de
              <br />
              Ciências da Computação
            </h2>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-sm text-white opacity-50 leading-relaxed uppercase">
            Desliza para ver mais
          </span>
          <RiArrowDownWideFill className="text-white opacity-50 text-3xl animate-bounce" />
        </div>
      </div>

      {/* Secção de baixo usa o mesmo max-w-[1400px] para manter o alinhamento */}
      <section className="w-full py-16 px-6 sm:px-10 lg:px-16 bg-red-600">
        <div className="mx-auto w-full max-w-[1400px] bg-emerald-500">
          <h1 className="font-orbitron text-4xl font-bold text-white tracking-wide mb-6">
            Hola
          </h1>

          {/* O resto do teu conteúdo entra aqui */}
        </div>
      </section>
    </div>
  );
}