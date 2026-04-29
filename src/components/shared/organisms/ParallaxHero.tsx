import { FC, InternalPath, TWClassNames } from "@/utils/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactElement, useRef } from "react";
import Typography from "../atoms/Typography";
import { cls } from "@/utils/helpers";
import Chip from "../molecules/Chip";
import Image from "next/image";

type Slots =
  | "base"
  | "container"
  | "wrapper"
  | "root"
  | "chip"
  | "title"
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
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.45], [0, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -620]);

  return (
    <header ref={headerRef} className={cls("sticky", classNames?.base)}>
      <div className={cls("pt-24  bg-cover", classNames?.container)}>
        <div
          className={cls(
            "md:container flex flex-col items-center ",
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
              "relative z-2 flex flex-col gap-y-6 py-16 w-[50%]",
              classNames?.root,
            )}
          >
            <div
              className={cls("flex justify-center", classNames?.chipContainer)}
            >
              <Chip
                classNames={{
                  container:
                    "w-fit p-1.5 md:p-2 text-medium-sm md:text-medium-base",
                }}
                className={cls(
                  "bg-gold-100 rounded-full p flex items-start justify-center",
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
                  "flex flex-col items-center gap-y-6",
                  classNames?.descriptionContainer,
                )}
              >
                <Typography
                  as="p"
                  className={cls(
                    "md:text-regular-xl text-gray-700 text-center leading-[180%] text-white",
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
            className="relative z-3 w-full mx-auto w-full h-[900px]"
          >
            <Image
              src={imgSrc}
              fill
              alt="parallax-img"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};
