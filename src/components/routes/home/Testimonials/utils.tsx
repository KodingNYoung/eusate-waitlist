export const DURATION = 5000;
export const TICK = 50;

import type { Variants } from "framer-motion";

export type Direction = -1 | 1;

export const variants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 260, damping: 28 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  }),
};

export const imageVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 30 : -30,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 26 },
      opacity: { duration: 0.5 },
      scale: { duration: 0.4 },
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -20 : 20,
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};
