"use client";
import { cls } from "@/utils/helpers";
import { TWClassNames } from "@/utils/types";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

type Slots = "container" | "text" | "paragraph";

type Props = {
  text: string | string[];
  children?: ReactNode;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const ScrollReveal = ({ text, classNames }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 40%"],
  });

  // Normalize to array
  const paragraphs = Array.isArray(text) ? text : [text];

  // Pre-split all paragraphs so we know the total letter count
  const splitParagraphs = paragraphs.map((p) => p.split(""));
  const totalLetters = splitParagraphs.reduce((sum, p) => sum + p.length, 0);

  return (
    <div className="relative">
      <div
        ref={ref}
        className={cls("sticky space-y-16", classNames?.container)}
      >
        {splitParagraphs.map((letters, pIndex) => {
          // Calculate the offset of this paragraph's first letter in the global sequence
          const offset = splitParagraphs
            .slice(0, pIndex)
            .reduce((sum, p) => sum + p.length, 0);

          return (
            <p
              key={pIndex}
              className={cls("flex flex-wrap", classNames?.paragraph)}
            >
              {letters.map((char, i) => (
                <Letter
                  key={i}
                  char={char}
                  index={offset + i}
                  total={totalLetters}
                  progress={scrollYProgress}
                  classNames={{ text: classNames?.text }}
                />
              ))}
            </p>
          );
        })}
      </div>
    </div>
  );
};

type LetterProps = {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  classNames?: { [slot in Slots]?: TWClassNames };
};

const Letter = ({ char, index, total, progress, classNames }: LetterProps) => {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.3, 1]);

  return (
    <motion.span style={{ opacity }} className={cls("", classNames?.text)}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};
