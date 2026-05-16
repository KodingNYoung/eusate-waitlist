import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import type { Transition, Variants } from "framer-motion";
import { fadeUpVariants } from "./variants";

export const defaultTransition: Transition = {
  ease: [0.22, 1, 0.36, 1],
  delay: 0,
  duration: 1.4,
};

export const AnimatedBlock = ({
  children,
  delay = 0,
  duration,
  variants = fadeUpVariants,
  ease = [0.22, 1, 0.36, 1],
  className,
}: {
  children: React.ReactNode;
  variants?: Variants;
  ease?: [number, number, number, number];
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px", once: false });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ ...defaultTransition, duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
