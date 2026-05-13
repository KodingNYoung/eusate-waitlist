"use client";
import { cls } from "@/utils/helpers";
import { TWClassNames } from "@/utils/types";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

type OffsetUnit = `${number}%`;
type ScrollOffset = `start ${OffsetUnit}` | `end ${OffsetUnit}`;
type Offset = { start?: OffsetUnit; end?: OffsetUnit };
type Slots = "base" | "container" | "text" | "paragraph";

type Props = {
  offset?: Offset;
  text: string | string[];
  shouldFade?: boolean;
  speed?: number;
  children?: ReactNode;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const ScrollReveal = ({
  text,
  classNames,
  speed,
  shouldFade,
  offset,
}: Props) => {
  const start: ScrollOffset = `start ${offset?.start ?? "100%"}`;
  const end: ScrollOffset = `end ${offset?.end ?? "40%"}`;

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [start, end],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [1, 1, 0, 0]);

  // Normalize to array
  const paragraphs = Array.isArray(text) ? text : [text];

  // Split into words -> letters
  const splitParagraphs = paragraphs.map((p) =>
    p.split(" ").map((word) => word.split("")),
  );

  // Count total letters
  const totalLetters = splitParagraphs.reduce(
    (sum, words) =>
      sum + words.reduce((wSum, letters) => wSum + letters.length, 0),
    0,
  );

  return (
    <div className={cls("relative", classNames?.base)}>
      <div
        ref={ref}
        className={cls("sticky space-y-16", classNames?.container)}
      >
        {splitParagraphs.map((words, pIndex) => {
          let runningIndex = 0;

          for (let i = 0; i < pIndex; i++) {
            runningIndex += splitParagraphs[i].reduce(
              (sum, letters) => sum + letters.length,
              0,
            );
          }

          return (
            <motion.p
              key={pIndex}
              style={{ opacity: shouldFade ? opacity : 1 }}
              className={cls("flex-wrap", classNames?.paragraph)}
            >
              {words.map((letters, wIndex) => {
                return (
                  <span key={wIndex} className="inline-block whitespace-nowrap">
                    {letters.map((char, i) => {
                      const index = runningIndex++;

                      return (
                        <Letter
                          key={i}
                          char={char}
                          index={index}
                          total={totalLetters}
                          progress={scrollYProgress}
                          speed={speed ?? 1}
                          classNames={{ text: classNames?.text }}
                        />
                      );
                    })}
                    {/* space between words */}
                    <span>&nbsp;&nbsp;&nbsp;</span>
                  </span>
                );
              })}
            </motion.p>
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
  speed: number;
  classNames?: { [slot in Slots]?: TWClassNames };
};

const Letter = ({
  char,
  index,
  total,
  progress,
  speed,
  classNames,
}: LetterProps) => {
  const start = index / total;
  const duration = 1 / total / speed;
  const end = start + duration;

  const opacity = useTransform(progress, [start, end], [0.3, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={cls("inline-block", classNames?.text)}
    >
      {char}
    </motion.span>
  );
};
