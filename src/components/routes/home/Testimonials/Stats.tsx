import { AnimatePresence, motion } from "motion/react";
import { Direction, variants } from "./utils";
import { FC, Testimonial } from "@/utils/types";

type Props = {
  direction: Direction;
  t: Testimonial;
};

export const Stats: FC<Props> = ({ direction, t }) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={t.id + "-stats"}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex gap-5"
      >
        {t.stats.map((s) => (
          <div
            key={s.label}
            className="border-l-4 border-black/5 backdrop-blur px-6 py-3 min-w-[100px]"
          >
            <p className="text-bold-5xl text-gray-900 leading-none">
              {s.value}
            </p>
            <p className="text-medium-xl text-black/30 mt-1 leading-tight">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
