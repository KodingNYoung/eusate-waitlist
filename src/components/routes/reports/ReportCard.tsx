import Image from "next/image";
import { cls } from "@/utils/helpers";
import { FC, ReportFeature } from "@/utils/types";
import Typography from "@/components/shared/atoms/Typography";
import { motion, useScroll, useTransform } from "motion/react";
import { REPORTS_FEATURES } from "@/utils/constants";
import { useMemo } from "react";

const CARD_TOP_OFFSET = 140;
const CARD_STACK_MULTIPLIER = 16;

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
            "py-8 relative container overflow-hidden px-16 flex gap-8 items-center rounded-x40 h-[500px]",
          )}
        >
          <div className="w-[500px] flex-none space-y-12">
            <Typography as="h3" variant="bold-3xl" className="leading-[125%]">
              {title}
            </Typography>
            <Typography as="p" variant="regular-lg" className="text-gray-700">
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
