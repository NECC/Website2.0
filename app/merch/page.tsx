import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Reveal, MotionProvider } from "../components/motion";
import { Metadata } from "next";
import { products } from "@/data/merch";

export const metadata: Metadata = {
  title: "Merchandising",
  description:
    "Descobre o merchandising oficial do NECC, o Núcleo de Estudantes de Ciências da Computação da Universidade do Minho.",
};

const gallery = [
  "/images/merch/merch13.png",
  "/images/merch/merch15.png",
  "/images/merch/merch12.png",
  "/images/merch/merch14.png",
];

export default function MerchPage() {
  return (
    <MotionProvider>
      <div className="bg-[#161E2E]">
        <section className="relative h-screen w-full overflow-hidden">
          <Image
            src="/bannerMerch.webp"
            alt="Banner Merch"
            fill
            priority
            className="object-cover object-left sm:object-center"
          />

          <div className="absolute inset-x-0 top-0 bottom-28 z-10 flex items-center justify-center px-5 sm:bottom-32 sm:px-10 lg:px-16">
            <div className="mx-auto flex w-full max-w-350 flex-col items-center gap-4 text-center sm:gap-6 lg:gap-8">
              <Reveal onLoad y={40}>
                <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-7xl lg:text-8xl">
                  MERCHANDISING
                </h1>
              </Reveal>

              <Reveal onLoad y={40} delay={0.25}>
                <h2 className="max-w-4xl text-sm leading-relaxed text-[#92B4D4] sm:text-base lg:text-lg">
                  Aqui podes encontrar a merch do NECC.
                  <br className="hidden sm:block" /> Se estiveres interessado em
                  comprar alguma peça, basta dirigires-te à sala do
                  departamento.
                </h2>
              </Reveal>

              <Reveal onLoad y={40} delay={0.4}>
                <a
                  href="#colecao"
                  className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-lg border border-[#92B4D4]/30 bg-[#38547A] px-4 py-2.5 text-sm text-white transition-all duration-200 hover:border-[#92B4D4]/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#92B4D4] sm:px-5"
                >
                  Explorar Coleção
                </a>
              </Reveal>
            </div>
          </div>

          <div className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2">
            <Reveal
              onLoad
              y={0}
              delay={1}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-sm uppercase leading-relaxed text-white opacity-50">
                Desliza para ver mais
              </span>

              <MdOutlineKeyboardArrowDown className="animate-bounce text-3xl text-white opacity-50" />
            </Reveal>
          </div>
        </section>

        <section
          id="colecao"
          className="mx-auto w-full max-w-400 scroll-mt-20 px-6 py-16 sm:px-10 lg:px-16"
        >
          {/* Produtos */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.name} y={40} delay={(i % 2) * 0.15}>
                <article className="flex h-full min-h-56 items-center justify-between gap-2 overflow-hidden rounded-2xl border border-[#92B4D4]/10 bg-linear-to-b from-[#38547A] to-[#2B4263] p-6 shadow-[0_0_40px_rgba(56,84,122,0.25)] sm:min-h-60 sm:p-8">
                  <div className="flex shrink-0 flex-col gap-4">
                    <h3 className="text-xl font-semibold uppercase leading-tight text-white sm:text-2xl">
                      {p.name.split(" ").slice(0, -1).join(" ")}
                      <br />
                      {p.name.split(" ").slice(-1)}
                      {p.unit && (
                        <span className="ml-1 text-[10px] font-normal text-[#92B4D4]">
                          (UNI.)
                        </span>
                      )}
                    </h3>

                    <div className="flex flex-col gap-3 text-sm">
                      <div>
                        <p className="text-[#92B4D4]">Sócios</p>
                        <p className="font-semibold text-white">{p.members}</p>
                      </div>
                      <div>
                        <p className="text-[#92B4D4]">Não Sócios</p>
                        <p className="font-semibold text-white">
                          {p.nonMembers}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Imagens: ocupam todo o espaço restante e sangram até à altura do card */}
                  <div className="relative -my-6 -mr-2 flex min-w-0 flex-1 self-stretch sm:-my-8">
                    {/* Um único brilho branco subtil por bloco */}
                    <div className="pointer-events-none absolute inset-x-[5%] inset-y-[12%] rounded-full bg-white/15 blur-3xl" />

                    {p.images.map((src, idx) => (
                      <div key={idx} className="relative min-w-0 flex-1">
                        <Image
                          src={`/images/merch/${src}`}
                          alt={`${p.name} ${idx + 1}`}
                          fill
                          sizes="(min-width: 768px) 20vw, 40vw"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Galeria */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal y={40}>
              <div className="relative h-80 w-full overflow-hidden bg-[#38547A] sm:h-112 lg:h-full lg:min-h-130  rounded-2xl">
                <Image
                  src="/images/merch/merch11.png"
                  alt="Peças de merch do NECC"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-6">
              {gallery.map((src, i) => (
                <Reveal key={i} y={40} delay={i * 0.1}>
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl ">
                    <Image
                      src={src}
                      alt={`Merch NECC ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Novidades */}
          <Reveal y={40}>
            <div className="relative mx-auto mt-24 overflow-hidden rounded-2xl border border-[#92B4D4]/10 bg-[#38547A] sm:mt-32 lg:max-w-6xl">
              <div className="relative z-10 flex flex-col gap-6 p-8 sm:p-12 lg:w-3/5 lg:py-16">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Novidades Brevemente
                </h2>
                <p className="text-base leading-relaxed text-white sm:text-lg">
                  Nova merch para festejar os 40 anos de LCC.
                  <br />
                  Acompanha as nossas redes sociais para saber mais.
                </p>
              </div>

              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-2/5 lg:block">
                <Image
                  src={"/images/merch/merch2.png"}
                  alt=""
                  aria-hidden
                  fill
                  sizes="40vw"
                  className="object-cover opacity-60 blur-sm"
                />
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </MotionProvider>
  );
}
