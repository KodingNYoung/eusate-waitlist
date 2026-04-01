import { FC, TWClassNames } from "@/utils/types";
import Typography, { TypographyProps } from "../atoms/Typography";
import Chip from "../molecules/Chip";
import { cls } from "@/utils/helpers";

type Slots = "root" | "chip" | "title" | "description" | "titleContainer";
type Orientation = "horizontal" | "vertical";

type Props = {
  chipLabel: string;
  title: string;
  description?: string;
  titleProps?: TypographyProps;
  className?: TWClassNames;
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
  orientation = "vertical",
  titleProps,
  descriptionProps,
}) => {
  return (
    <header
      className={cls(
        "space-y-2",
        orientation === "horizontal" && "flex justify-between items-end",
        classNames?.root,
        className
      )}
    >
      <div className={cls("space-y-8", classNames?.titleContainer)}>
        <Chip className={cls("bg-gold-100", classNames?.chip)}>
          {chipLabel}
        </Chip>
        <Typography
          as="h1"
          variant="bold-6xl"
          className={classNames?.title}
          {...titleProps}
        >
          {title}
        </Typography>
      </div>
      <Typography
        as="p"
        variant="regular-xl"
        className={cls("text-gray-700", classNames?.description)}
        {...descriptionProps}
      >
        {description}
      </Typography>
    </header>
  );
};
