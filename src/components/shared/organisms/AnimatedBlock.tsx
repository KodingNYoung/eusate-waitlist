import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import type { Variants } from "framer-motion";

// const easing = [0.22, 1, 0.36, 1] as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    // transition: { duration: 0.65, ease: easing },
  },
};
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const AnimatedBlock = ({
  children,
  delay = 0,
  duration = 0.65,
  variants = fadeUpVariants,
  ease = [0.22, 1, 0.36, 1],
  className = "",
}: {
  children: React.ReactNode;
  variants?: Variants;
  ease?: [number, number, number, number];
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-90px 0px", once: true });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
