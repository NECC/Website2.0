import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Reveal, MotionProvider } from "../components/motion";

export default function MerchPage() {
  return (
    <MotionProvider>
      <div className="overflow-x-clip bg-[#161E2E]">
        {/* Hero */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Banner Desktop */}
          <Image
            src="/bannerMerch.webp"
            alt="Banner Merch"
            fill
            priority
            className="hidden object-cover object-center md:block"
          />

          <Image
            src="/bannerMerchMobile.webp"
            alt="Banner Merch"
            fill
            priority
            className="block object-cover object-center md:hidden"
          />

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
      </div>
    </MotionProvider>
  );
}
