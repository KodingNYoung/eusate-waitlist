import { Direction } from "./utils";
import { FC, TWClassNames } from "@/utils/types";
import { motion } from "motion/react";
import Button from "@/components/shared/molecules/Button";
import { cls } from "@/utils/helpers";
import { TESTIMONIALS } from "@/constants/home";

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
    <div className={cls("flex gap-2", className)}>
      {TESTIMONIALS.map((_, idx) => (
        <Button
          key={idx}
          variant="tetiaryText"
          onClick={() => goTo(idx, idx > current ? 1 : -1)}
          className="relative h-[8px] w-[57px] bg-black/20 rounded-full overflow-hidden transition-all duration-300 focus:outline-none "
          aria-label={`Go to testimonial ${idx + 1}`}
        >
          {idx === current && (
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "black",
              }}
            />
          )}
          {idx < current && (
            <div className="absolute inset-0 rounded-full bg-black" />
          )}
        </Button>
      ))}
    </div>
  );
};
