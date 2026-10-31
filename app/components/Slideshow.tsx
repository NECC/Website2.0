"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AutoSlideshow({
  images,
  alt,
  sizes,
  interval = 4000,
}: {
  images: string[];
  alt: string;
  sizes: string;
  interval?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [animate, setAnimate] = useState(true);
  const total = images.length;

  useEffect(() => {
    if (total <= 1) return;

    const timer = setInterval(() => setIdx((i) => i + 1), interval);
    return () => clearInterval(timer);
  }, [total, interval]);

  useEffect(() => {
    if (idx !== total) return;

    const timer = setTimeout(() => {
      setAnimate(false);
      setIdx(0);
    }, 700);

    return () => clearTimeout(timer);
  }, [idx, total]);

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  return (
    <div
      className={`flex h-full w-full ${
        animate ? "transition-transform duration-700 ease-in-out" : ""
      }`}
      style={{ transform: `translateX(-${idx * 100}%)` }}
    >
      {[...images, ...(total > 1 ? [images[0]] : [])].map((src, i) => (
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
