import { FC, TWClassNames } from "@/utils/types";
import Typography, { TypographyProps } from "../atoms/Typography";
import Chip from "../molecules/Chip";
import { cls } from "@/utils/helpers";

type Slots = "container" | "root" | "chip" | "title" | "description" | "titleContainer";
type Orientation = "horizontal" | "vertical";
type Position = "center" | "left";

type Props = {
  chipLabel: string;
  title: string;
  description?: string;
  titleProps?: TypographyProps;
  className?: TWClassNames;
  position?: Position;
  orientation?: Orientation;
  descriptionProps?: TypographyProps;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const PageHeader: FC<Props> = ({
  chipLabel,
  title,
  description,
  className,
  classNames,
  position = "left",
  orientation = "vertical",
  titleProps,
  descriptionProps,
}) => {
  return (
    <header className={cls("pt-[88px] bg-cover h-[750px] p-16 rounded-3xl", classNames?.container)}>
      <div
        className={cls(
          "space-y-2",
          orientation === "horizontal" && "flex justify-between items-end",
          position === "center" && "flex justify-center",
          classNames?.root,
          className
        )}
      >
        <div className={cls("space-y-8", classNames?.titleContainer)}>
          <Chip className={cls("bg-gold-100 rounded-full", position === "center" && "flex justify-center", classNames?.chip)}>
            {chipLabel}
          </Chip>
          <Typography
            as="h1"
            variant="bold-6xl"
            className={cls(position === "center" && "text-center", classNames?.title)}
            {...titleProps}
          >
            {title}
          </Typography>
        </div>
        <Typography
          as="p"
          variant="regular-xl"
          className={cls("text-gray-700", position === "center" && "text-center", classNames?.description)}
          {...descriptionProps}
        >
          {description}
        </Typography>
      </div>
    </header>

  );
};
