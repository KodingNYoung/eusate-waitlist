import Image from "next/image";
import Typography from "@/components/shared/atoms/Typography";
import { cls } from "@/utils/helpers";
import { FC, InternalPath, TWClassNames } from "@/utils/types";
import { ReactElement } from "react";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";

type Slots = "base" | "title" | "description";

type Props = {
  id?: number;
  icon?: ReactElement;
  src?: InternalPath;
  title: string;
  animate?: boolean;
  description: string;
  className?: TWClassNames;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const SateFeatureCard: FC<Props> = ({
  id,
  src,
  icon,
  title,
  animate = true,
  className,
  classNames,
  description,
}) => {
  return (
    <AnimatedBlock
      animate={animate}
      delay={id ? id / 10 : 0}
      className={cls(
        "bg-white p-8 grid content-start flex-0 gap-4 rounded-[7px] w-full md:w-[328px] h-auto",
        className,
        classNames?.base,
      )}
    >
      <div className="flex items-center">
        {icon && icon}
        {src && (
          <div className="relative w-[40px] h-[40px]">
            <Image src={src} fill alt={title} />
          </div>
        )}
      </div>
      <div className="space-y-2">
        <Typography
          variant="semibold-lg"
          className={cls("text-white", classNames?.title)}
        >
          {title}
        </Typography>
        <Typography
          variant="regular-sm"
          className={cls("text-white/70", classNames?.description)}
        >
          {description}
        </Typography>
      </div>
    </AnimatedBlock>
  );
};
