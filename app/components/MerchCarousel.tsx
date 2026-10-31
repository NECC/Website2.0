"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function MerchCarousel({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [active, setActive] = useState(0);

  const total = images.length;
  const single = total <= 1;
  const slides = single ? images : [images[total - 1], ...images, images[0]];

  useLayoutEffect(() => {
    if (ref.current && !single) {
      ref.current.scrollLeft = ref.current.clientWidth;
    }
  }, [single]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const goTo = (pos: number) => {
    const el = ref.current;
    if (el) el.scrollTo({ left: pos * el.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = ref.current;
    if (!el || single) return;

    const pos = Math.round(el.scrollLeft / el.clientWidth);
    setActive((pos - 1 + total) % total);

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (pos === 0) {
        el.scrollLeft = total * el.clientWidth;
      } else if (pos === total + 1) {
        el.scrollLeft = el.clientWidth;
      }
    }, 120);
  };

  return (
    <div className="w-full md:hidden">
      <div className="relative">
        <div
          ref={ref}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((src, idx) => (
            <div
              key={idx}
              className="relative h-56 w-full shrink-0 snap-center sm:h-64"
            >
              <Image
                src={`/images/merch/${src}`}
                alt={`${name} ${idx}`}
                fill
                sizes="90vw"
                className={`object-contain p-2 pointer-events-none ${
                  src === "merch10.png" ? "py-10" : ""
                }`}
              />
            </div>
          ))}
        </div>

        {!single && (
          <>
            <button
              type="button"
              onClick={() =>
                goTo(
                  Math.round(
                    ref.current!.scrollLeft / ref.current!.clientWidth,
                  ) - 1,
                )
              }
              aria-label="Imagem anterior"
              className="absolute left-0 top-1/2 flex min-h-10 min-w-10 -translate-y-1/2 items-center justify-center text-2xl text-white drop-shadow-md cursor-pointer"
            >
              <SlArrowLeft />
            </button>

            <button
              type="button"
              onClick={() =>
                goTo(
                  Math.round(
                    ref.current!.scrollLeft / ref.current!.clientWidth,
                  ) + 1,
                )
              }
              aria-label="Imagem seguinte"
              className="absolute right-0 top-1/2 flex min-h-10 min-w-10 -translate-y-1/2 items-center justify-center text-2xl text-white drop-shadow-md cursor-pointer"
            >
              <SlArrowRight />
            </button>
          </>
        )}
      </div>

      {!single && (
        <div className="mt-2 flex justify-center gap-2">
          {images.map((_, dot) => (
            <button
              key={dot}
              type="button"
              onClick={() => goTo(dot + 1)}
              aria-label={`Imagem ${dot + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                dot === active ? "bg-[#3B9EFF]" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
