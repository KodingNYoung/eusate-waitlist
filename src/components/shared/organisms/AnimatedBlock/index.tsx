import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Transition, Variants } from "framer-motion";
import { fadeUpVariants } from "./variants";
import { cls } from "@/utils/helpers";

export const defaultTransition: Transition = {
  ease: [0.22, 1, 0.36, 1],
  delay: 0,
  duration: 1.4,
};

export const AnimatedBlock = ({
  animate = true,
  children,
  delay = 0,
  duration = 1.4,
  variants = fadeUpVariants,
  ease = [0.22, 1, 0.36, 1],
  className,
  once = true,
  amount = 0.1,
}: {
  animate?: boolean;
  children: React.ReactNode;
  variants?: Variants;
  ease?: [number, number, number, number];
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-80px 0px", // trigger slightly before entering view
    once,
    amount,
  });

  return (
    <motion.div
      ref={ref}
      variants={animate ? variants : undefined}
      initial={animate ? "hidden" : false}
      animate={animate ? (isInView ? "visible" : "hidden") : undefined}
      transition={{ ...defaultTransition, duration, ease, delay }}
      className={cls("w-full", className)}
    >
      {children}
    </motion.div>
  );
};
