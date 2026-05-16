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
    offset: ["start end", "end center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-10%"]);

  return (
    <section
      ref={ref}
      className="hidden h-[380px] md:flex justify-center items-center w-full"
    >
      <div className="w-full overflow-hidden flex items-center justify-center h-full">
        <motion.div style={{ x }} className="flex gap-6">
          {children(items)}
        </motion.div>
      </div>
    </section>
  );
};
