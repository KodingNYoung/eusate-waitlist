import { TESTIMONIALS } from "@/utils/constants";
import { Direction } from "./utils";
import { FC, TWClassNames } from "@/utils/types";
import { motion } from "motion/react";
import Button from "@/components/shared/molecules/Button";
import { cls } from "@/utils/helpers";

type Props = {
  current: number;
  progress: number;
  goTo: (idx: number, dir: Direction) => void;
  className?: TWClassNames;
};

export const ProgressDots: FC<Props> = ({
  goTo,
  current,
  progress,
  className,
}) => {
  return (
    <div
      className={cls(
        "grid grid-flow-col auto-cols-fr gap-4 w-full border",
        className,
      )}
    >
      {TESTIMONIALS.map((_, i) => (
        <div
          key={i}
          onClick={() => goTo(i, i > current ? 1 : -1)}
          // className="relative h-[8px] flex-1 w-[48px] bg-black/20 rounded-full overflow-hidden transition-all duration-300 focus:outline-none "
          className="relative h-[8px] w-[58px]"
          aria-label={`Go to testimonial ${i + 1}`}
        >
          {i === current && (
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "black",
              }}
            />
          )}
          {i < current && (
            <div className="absolute inset-0 rounded-full bg-black" />
          )}
        </div>
      ))}
    </div>
  );
};
