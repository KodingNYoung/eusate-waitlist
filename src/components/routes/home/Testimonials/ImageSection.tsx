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
        <div className="relative w-[395px] object-cover h-[540px]">
          <Image
            src={t.imgSrc}
            fill
            alt={t.company}
            className="object-cover rounded-[24px]"
          />
        </div>
        {/* Company overlay */}
        <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-white font-bold text-sm tracking-wider">
            {t.company}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
