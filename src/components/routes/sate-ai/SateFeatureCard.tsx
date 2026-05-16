import Image from "next/image";
import Typography from "@/components/shared/atoms/Typography";
import { cls } from "@/utils/helpers";
import { FC, InternalPath, TWClassNames } from "@/utils/types";
import { ReactElement } from "react";

type Slots = "base" | "title" | "description";

type Props = {
  icon?: ReactElement;
  src?: InternalPath;
  title: string;
  description: string;
  className?: TWClassNames;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const SateFeatureCard: FC<Props> = ({
  src,
  icon,
  title,
  className,
  classNames,
  description,
}) => {
  return (
    <div
      className={cls(
        "bg-white p-8 grid flex-0 gap-4 rounded-[7px] w-full md:w-[328px] min-h-[185px]",
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
    </div>
  );
};
