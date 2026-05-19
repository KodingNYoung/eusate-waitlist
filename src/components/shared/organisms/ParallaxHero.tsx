import { FC, InternalPath, TWClassNames } from "@/utils/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactElement, useRef } from "react";
import Typography from "../atoms/Typography";
import { cls } from "@/utils/helpers";
import Chip from "../molecules/Chip";
import Image from "next/image";
import { useMediaQuery } from "@/utils/hooks";

type Slots =
  | "base"
  | "container"
  | "wrapper"
  | "root"
  | "chip"
  | "title"
  | "img"
  | "description"
  | "titleContainer"
  | "descriptionContainer"
  | "chipContainer";

type Props = {
  title: string | ReactElement;
  chipLabel: string | ReactElement;
  description: string;
  startContent?: ReactElement;
  cta: ReactElement;
  imgSrc: InternalPath;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const ParallaxHero: FC<Props> = ({
  title,
  description,
  cta,
  chipLabel,
  startContent,
  imgSrc,
  classNames,
}) => {
  const headerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery();
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const textScale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1] : [1, 0.82],
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1] : [1, 0],
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 0.45],
    isMobile ? [0, 0] : [0, -40],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, -620],
  );

  return (
    <header ref={headerRef} className={cls("sticky", classNames?.base)}>
      <div
        className={cls(
          "md:pt-[88px] px-[17px] md:px-0 rounded-[16px] md:rounded-none bg-cover h-[80vh] md:h-[90vh] space-y-10 md:space-y-20",
          classNames?.container,
        )}
      >
        <div
          className={cls(
            "md:container flex flex-col items-center pt-20 md:pt-24",
            classNames?.wrapper,
          )}
        >
          {startContent && startContent}

          <motion.div
            style={{
              scale: textScale,
              opacity: textOpacity,
              y: textY,
            }}
            className={cls(
              "relative z-2 flex flex-col gap-y-6  w-full md:w-[50%]",
              classNames?.root,
            )}
          >
            <div
              className={cls(
                "flex justify-start md:justify-center",
                classNames?.chipContainer,
              )}
            >
              <Chip
                classNames={{
                  container:
                    "w-fit px-3 py-1 md:px-3 md:py text-medium-sm md:text-medium-base",
                }}
                className={cls(
                  "bg-gold-100 rounded-full flex items-start",
                  classNames?.chip,
                )}
              >
                {chipLabel}
              </Chip>
            </div>
            <div className={cls("space-y-4", classNames?.titleContainer)}>
              {typeof title === "string" ? (
                <Typography
                  as="h1"
                  className={cls(
                    "text-bold-4xl md:text-bold-6xl text-center text-white leading-[120%]",
                    classNames?.title,
                  )}
                >
                  {title}
                </Typography>
              ) : (
                title
              )}
              <div
                className={cls(
                  "flex flex-col items-start md:items-center gap-y-6",
                  classNames?.descriptionContainer,
                )}
              >
                <Typography
                  as="p"
                  className={cls(
                    "text-medium-base md:text-regular-xl text-left md:text-center text-gray-700 leading-[180%] text-white",
                    classNames?.description,
                  )}
                >
                  {description}
                </Typography>
                {cta}
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            className="relative z-3 w-full aspect-[4/3] "
          >
            <Image
              priority
              src={imgSrc}
              fill
              alt="parallax-img"
              className={cls("object-fill object-top", classNames?.img)}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};
