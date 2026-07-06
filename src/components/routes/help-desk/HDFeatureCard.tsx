import Image from "next/image";
import { cls } from "@/utils/helpers";
import { FC, InternalPath } from "@/utils/types";
import Typography from "@/components/shared/atoms/Typography";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainer,
} from "@/components/shared/organisms/AnimatedBlock/variants";
import { AnimatedBlock } from "../../shared/organisms/AnimatedBlock";

type Props = {
  id: number;
  highlightTitle: string;
  title: string;
  description: string;
  imgSrc: InternalPath;
};

const secondGroup = [2, 3];

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
        "flex flex-wrap justify-center lg:justify-between gap-y-10 items-center",
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
          "relative overflow-hidden border-4 rounded-3xl border-gray-50 w-full md:w-[504px] h-[508px]",
          secondGroup.includes(id)
            ? "pb-8 pr-8"
            : id === 1
              ? "pt-8 pl-8"
              : "pl-8 pb-8",
        )}
      >
        <AnimatedBlock>
          {id === 4 ? (
            <div className="w-full h-full overflow-hidden border-8 border-[#F3F4F5] -translate-y-[calc(600px_-_550px_+_92px)]">
              <div className="relative w-[800px] h-[600px] -translate-x-[6rem]">
                <Image
                  src={imgSrc}
                  alt={highlightTitle}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          ) : (
            <div
              className={cls(
                "relative w-[800px] h-[600px] md:w-[1200px] md:h-[900px] object-cover object-bottom",
                cls(
                  secondGroup.includes(id) &&
                    "object-[right_bottom] pb-8 -translate-x-[calc(100%_-_550px_+_212px)] md:-translate-x-[calc(100%_-_550px_+_92px)] -translate-y-[calc(600px_-_550px_+_92px)] md:-translate-y-[calc(900px_-_550px_+_92px)]",
                ),
              )}
            >
              <Image
                src={imgSrc}
                alt={highlightTitle}
                fill
                className="object-contain"
              />
            </div>
          )}
        </AnimatedBlock>
      </motion.div>
    </motion.div>
  );
};
