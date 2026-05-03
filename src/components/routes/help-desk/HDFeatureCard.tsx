import Image from "next/image";
import { cls } from "@/utils/helpers";
import { FC, InternalPath } from "@/utils/types";
import Typography from "@/components/shared/atoms/Typography";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AnimatedBlock,
  fadeUpVariants,
  staggerContainer,
} from "@/components/shared/organisms/AnimatedBlock";

type Props = {
  id: number;
  highlightTitle: string;
  title: string;
  description: string;
  imgSrc: InternalPath;
};

export const HDFeatureCard: FC<Props> = ({
  id,
  title,
  highlightTitle,
  description,
  imgSrc,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cls(
        "flex flex-wrap justify-center md:justify-between gap-y-10 items-center",
        id % 2 ? "flex-row" : "md:flex-row-reverse",
      )}
    >
      <motion.div variants={fadeUpVariants} className="">
        <div className="space-y-12 max-w-[500px]">
          <AnimatedBlock className="space-y-[6px]">
            <Typography
              as="h2"
              variant="bold-3xl"
              className="bg-[url(/images/kb-text-bg.webp)] bg-cover bg-center bg-clip-text text-transparent text-bold-2xl md:text-bold-3xl"
            >
              {highlightTitle}
            </Typography>
            <Typography
              as="h2"
              variant="bold-3xl"
              className="text-bold-2xl md:text-bold-3xl"
            >
              {title}
            </Typography>
          </AnimatedBlock>
          <AnimatedBlock delay={0.1}>
            <Typography
              as="p"
              variant="regular-sm"
              className="text-gray-500 leading-[160%]"
            >
              {description}
            </Typography>
          </AnimatedBlock>
        </div>
      </motion.div>

      <motion.div
        className={cls(
          "relative overflow-hidden border-4 rounded-3xl border-gray-50 w-[550px] h-[500px]",
          id % 2 ? "pt-8 pl-8" : "pb-8 pr-8",
        )}
      >
        <AnimatedBlock>
          <div
            className={cls(
              "relative w-[1200px] h-[900px] object-cover object-bottom",
              cls(
                id % 2 === 0 &&
                  "object-[right_bottom] pb-8 -translate-x-[calc(100%_-_550px_+_32px)] -translate-y-[calc(900px_-_550px_+_92px)]",
              ),
            )}
          >
            <Image src={imgSrc} alt={highlightTitle} fill />
          </div>
        </AnimatedBlock>
      </motion.div>
    </motion.div>
  );
};
