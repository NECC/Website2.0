"use client";

import { motion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  onLoad?: boolean; 
};

function config({ delay = 0, x = 0, y = 32, onLoad }: RevealProps) {
  const base = {
    initial: { opacity: 0, x, y },
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
  const target = { opacity: 1, x: 0, y: 0 };

  return onLoad
    ? { ...base, animate: target }
    : {
        ...base,
        whileInView: target,
        viewport: { once: true, margin: "-200px" },
      };
}

export function Reveal(props: RevealProps) {
  return (
    <motion.div {...config(props)} className={props.className}>
      {props.children}
    </motion.div>
  );
}

export function MotionLi(props: RevealProps) {
  return (
    <motion.li {...config(props)} className={props.className}>
      {props.children}
    </motion.li>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}