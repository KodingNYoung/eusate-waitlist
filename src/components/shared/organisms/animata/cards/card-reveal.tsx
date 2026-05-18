"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef, useEffect, useState, RefObject } from "react";

type Props<T> = {
  items: T[];
  children: (items: T[]) => ReactNode;
  scrollTargetRef?: RefObject<HTMLDivElement>;
};

export const ScrollCards = <T,>({
  items,
  children,
  scrollTargetRef,
}: Props<T>) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState("100%");
  const [endX, setEndX] = useState("-10%");

  const target = scrollTargetRef ?? wrapperRef;

  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const calculate = () => {
      const containerWidth = wrapperRef.current?.offsetWidth ?? 0;
      const innerWidth = innerRef.current?.scrollWidth ?? 0;
      const offset = containerWidth - innerWidth;
      setStartX(`${containerWidth}px`);
      setEndX(`${offset}px`);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [items]);

  const x = useTransform(scrollYProgress, [0, 0.65], [startX, endX]);

  return (
    <div
      ref={wrapperRef}
      className="hidden md:flex w-full overflow-hidden items-center h-full"
    >
      <motion.div ref={innerRef} style={{ x }} className="flex gap-6">
        {children(items)}
      </motion.div>
    </div>
  );
};
