"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// TODO(roberto): make this less sloppy. The initial implementatiion involving
// tracking each item and receiving the function component to render it and 
// have it managed by the list doesn't seem to play nice with next's server
// component feature.

/**
 * Infinite horizontal marquee.
 *
 * `children` are laid out in a flex track and translated with
 * requestAnimationFrame, wrapping by a whole cycle so the strip never jumps.
 * Children (not an `itemFn` prop) because a render function cannot cross the
 * server -> client boundary, and inline styles (not template-built Tailwind
 * classes) because the JIT only sees classes that exist verbatim in source.
 */
export default function Carousel({
  itemSize,
  gap = 0,
  speed = 60,
  className = "",
  children,
}: {
  /** Width and height of a single item slot, in px. */
  itemSize: number;
  /** Space between item slots, in px. */
  gap?: number;
  /** Scroll speed in px per second. */
  speed?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const [copies, setCopies] = useState(1);

  const items = React.Children.toArray(children);
  const stride = itemSize + gap;
  const cycle = items.length * stride;

  // The track must stay wider than viewport + one cycle, so that shifting it
  // by any offset below one cycle still covers the visible area.
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || cycle <= 0) return;

    const measure = () => {
      const { width } = container.getBoundingClientRect();
      const needed = Math.max(1, Math.ceil((width + cycle) / cycle));
      setCopies((current) => (current === needed ? current : needed));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [cycle]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || cycle <= 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    offsetRef.current %= cycle;

    let frame = 0;
    let last = performance.now();
    const step = (now: number) => {
      const delta = now - last;
      last = now;

      let offset = offsetRef.current + (speed * delta) / 1000;
      if (offset >= cycle) offset %= cycle;
      offsetRef.current = offset;

      // Written straight to the DOM: a state update per frame would re-render
      // every copy of every item 60 times a second for no reason.
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [cycle, speed]);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden ${className}`}
      style={{ height: itemSize }}
    >
      <div ref={trackRef} className="flex will-change-transform" style={{ columnGap: gap }}>
        {Array.from({ length: copies }, (_, copy) =>
          items.map((item, index) => (
            <div
              key={`${copy}-${index}`}
              aria-hidden={copy > 0}
              className="shrink-0"
              style={{ width: itemSize, height: itemSize }}
            >
              {item}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
