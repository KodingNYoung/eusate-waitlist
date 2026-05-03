import Image from "next/image";
import { cls } from "@/utils/helpers";
import { FC, ReportFeature } from "@/utils/types";
import Typography from "@/components/shared/atoms/Typography";
import { motion, useScroll, useTransform } from "motion/react";
import { REPORTS_FEATURES } from "@/utils/constants";
import { useMemo } from "react";
import { useMediaQuery } from "@/utils/hooks";

type Props = ReportFeature & {
  containerRef: React.RefObject<HTMLElement>;
};

const totalCards = REPORTS_FEATURES.length;

export const ReportCard: FC<Props> = ({
  id,
  color,
  title,
  description,
  imgSrc,
  containerRef,
}) => {
  const isMobile = useMediaQuery();

  const CARD_TOP_OFFSET = useMemo(() => (isMobile ? 10 : 140), [isMobile]);
  const CARD_STACK_MULTIPLIER = useMemo(() => (isMobile ? 86 : 16), [isMobile]);

  const idx = useMemo(() => id - 1, [id]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleEnd = 1 - (totalCards - 1 - idx) * 0.025;
  const segmentEnd = id / totalCards;

  const scale = useTransform(
    scrollYProgress,
    [idx / totalCards, segmentEnd],
    [1, scaleEnd],
  );
  return (
    <div
      style={{
        position: "sticky",
        top: `${idx * CARD_STACK_MULTIPLIER + CARD_TOP_OFFSET}px`,
        zIndex: idx + 1,
      }}
    >
      <motion.div style={{ scale, transformOrigin: "top center" }}>
        <div
          style={{ backgroundColor: color }}
          className={cls(
            "py-8 relative container overflow-hidden px-6 md:px-16 flex sm:flex-wrap md:flex-nowrap gap-8 items-center rounded-[16px] md:rounded-x40 h-full md:h-[500px]",
          )}
        >
          <div className="w-full md:w-[500px] flex-none space-y-6 md:space-y-12">
            <Typography
              as="h3"
              variant="bold-3xl"
              className="text-bold-2xl md:text-bold-3xl leading-[125%]"
            >
              {title}
            </Typography>
            <Typography
              as="p"
              variant="regular-lg"
              className="text-regular-base md:text-regular-lg text-gray-700"
            >
              {description}
            </Typography>
          </div>
          <div className="relative flex-none w-[1200px] h-[400px]">
            <div className="relative w-[700px] h-[700px] object-bottom">
              <Image src={imgSrc} fill alt={title} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
