import { FC, Testimonial } from "@/utils/types";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { imageVariants } from "./utils";

type Props = {
  direction: -1 | 1;
  t: Testimonial;
};
export const ImageAnimated: FC<Props> = ({ direction, t }) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={t.id + "-img"}
        custom={direction}
        variants={imageVariants}
        initial="enter"
        animate="center"
        exit="exit"
      >
        <div className="relative w-[90vw] md:w-[395px] h-[540px]">
          <Image
            fill
            src={t.imgSrc}
            alt={t.company}
            className="object-cover z-3 rounded-x24"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
