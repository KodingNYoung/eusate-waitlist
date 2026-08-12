import { motion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import { fadeUpVariants } from "./variants";
import { cls } from "@/utils/helpers";

/**
 * Item to render inside a container animated with `staggerContainer`
 * (e.g. an `AnimatedBlock` with `variants={staggerContainer}`).
 *
 * Deliberately has no `initial`/`animate`/`delay` props: setting those
 * on a child makes Framer Motion treat it as controlling its own
 * variants, which excludes it from the parent's `staggerChildren`
 * orchestration entirely. This component only ever sets `variants`, so
 * it inherits its animate state - and stagger delay - from the nearest
 * ancestor that does control them.
 */
export const StaggerItem = ({
  children,
  variants = fadeUpVariants,
  duration = 1.4,
  ease = [0.22, 1, 0.36, 1],
  className,
}: {
  children: React.ReactNode;
  variants?: Variants;
  duration?: Transition["duration"];
  ease?: [number, number, number, number];
  className?: string;
}) => {
  return (
    <motion.div
      variants={variants}
      transition={{ duration, ease }}
      className={cls(className)}
    >
      {children}
    </motion.div>
  );
};
