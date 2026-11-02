"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Slideshow({
  images,
  alt,
  sizes,
  delay = 0,
}: {
  images: string[];
  alt: string;
  sizes: string;
  delay?: number;
}) {
  const [idx, setIdx] = useState(0);
  const total = images.length;

  useEffect(() => {
    if (total <= 1) return;

    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        setIdx((i) => (i + 1) % total);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [total, 4000, delay]);

  return (
    <div
      className="flex h-full w-full transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${idx * 100}%)` }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full shrink-0">
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            sizes={sizes}
            className="pointer-events-none object-cover"
          />
        </div>
      ))}
    </div>
  );
}
