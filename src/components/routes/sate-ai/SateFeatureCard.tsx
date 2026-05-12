import Typography from "@/components/shared/atoms/Typography";
import { cls } from "@/utils/helpers";
import { FC, TWClassNames } from "@/utils/types";
import { ReactElement } from "react";

type Slots = "base" | "title" | "description";

type Props = {
  icon: ReactElement;
  title: string;
  description: string;
  className?: TWClassNames;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const SateFeatureCard: FC<Props> = ({
  icon,
  title,
  className,
  classNames,
  description,
}) => {
  return (
    <div
      className={cls(
        "bg-white p-8 grid flex-0 gap-4 rounded-[7px] w-full lg:w-[328px] min-h-[185px]",
        className,
        classNames?.base,
      )}
    >
      <div className="">{icon}</div>
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
