"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props<T> = {
  items: T[];
  children: (items: T[]) => ReactNode;
};

export const ScrollCards = <T,>({ items, children }: Props<T>) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <section ref={ref} className="hidden md:block h-[200vh] w-full">
      {/* This locks vertical position */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex gap-6">
          {children(items)}
        </motion.div>
      </div>
    </section>
  );
};
