import { AnimatePresence, motion } from "motion/react";
import { Direction, variants } from "./utils";
import { FC, Testimonial } from "@/utils/types";
import { Navigation } from "./Navigation";

type Props = {
  direction: Direction;
  testimonial: Testimonial;
  prev: () => void;
  next: () => void;
  current: number;
};

export const TestimonialSection: FC<Props> = ({
  direction,
  testimonial,
  prev,
  next,
  current,
}) => {
  return (
    <div className="space-y-8">
      <Quote direction={direction} testimonial={testimonial} />
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={testimonial.id + "-content"}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex-1"
          >
            <div className="">
              <p className="text-semibold-sm md:text-semibold-lg text-sm">
                {testimonial.name}
              </p>
              <p className="text-regular-sm md:text-regular-base text-black/60 text-xs mt-0.5">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <Navigation prev={prev} next={next} current={current} />
      </div>
    </div>
  );
};

type QuoteProps = {
  direction: Direction;
  testimonial: Testimonial;
};
export const Quote: FC<QuoteProps> = ({ direction, testimonial }) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={testimonial.id + "-content"}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex-1"
      >
        <blockquote className="text-bold-xl md:text-bold-2xl leading-[150%]">
          &ldquo;{testimonial.testimony}&rdquo;
        </blockquote>
      </motion.div>
    </AnimatePresence>
  );
};
