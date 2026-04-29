import { TESTIMONIALS } from "@/utils/constants";
import { Direction } from "./utils";
import { FC } from "@/utils/types";
import { motion } from "motion/react";
import Button from "@/components/shared/molecules/Button";

type Props = {
  current: number;
  progress: number;
  goTo: (idx: number, dir: Direction) => void;
};

export const ProgressDots: FC<Props> = ({ goTo, current, progress }) => {
  return (
    <div className="flex gap-2">
      {TESTIMONIALS.map((_, i) => (
        <Button
          key={i}
          variant="tetiaryText"
          onClick={() => goTo(i, i > current ? 1 : -1)}
          className="relative h-[8px] w-[57px] bg-black/20 rounded-full overflow-hidden transition-all duration-300 focus:outline-none "
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
        </Button>
      ))}
    </div>
  );
};
