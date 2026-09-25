import Image from "next/image";
import { RiArrowDownWideFill } from "react-icons/ri";

export default function Home() {
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
          <div className="mx-auto w-full max-w-350 flex items-center gap-6">
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

        <div className="absolute z-10 bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-sm text-white opacity-50 leading-relaxed uppercase">
            Desliza para ver mais
          </span>
          <RiArrowDownWideFill className="text-white opacity-50 text-3xl animate-bounce" />
        </div>
      </div>

      <section className="w-full py-16 px-6 sm:px-10 lg:px-16 mx-auto max-w-400 bg-red-500">
        <h1 className="text-white ">
          Texto de exemplo para a página inicial
        </h1>
      </section>
    </div>
  );
}
