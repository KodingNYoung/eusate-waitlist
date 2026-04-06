import { FC, TWClassNames } from "@/utils/types";
import Typography, { TypographyProps } from "../atoms/Typography";
import Chip from "../molecules/Chip";
import { cls } from "@/utils/helpers";
import { ReactElement } from "react";

type Slots =
  | "container"
  | "wrapper"
  | "root"
  | "chip"
  | "title"
  | "description"
  | "titleContainer";
type Orientation = "horizontal" | "vertical";
type Position = "center" | "left";
type Variant = "header" | "sub";

type Props = {
  chipLabel: string;
  title: string;
  description?: string;
  titleProps?: TypographyProps;
  className?: TWClassNames;
  position?: Position;
  orientation?: Orientation;
  descriptionProps?: TypographyProps;
  variant?: Variant;
  actionBtn?: ReactElement;
  extraContent?: ReactElement;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const PageHeader: FC<Props> = ({
  chipLabel,
  title,
  actionBtn,
  description,
  className,
  classNames,
  position = "left",
  orientation = "vertical",
  extraContent,
  variant = "header",
  titleProps,
  descriptionProps,
}) => {
  return (
    <header
      className={cls(
        "bg-cover rounded-3xl mx-4",
        variant === "header" && "pt-[88px] p-16 h-[720px] ",
        classNames?.container,
      )}
    >
      <div
        className={cls(
          "flex container items-center max-w-[1400px]",
          position === "center" && "flex-col justify-center",
          classNames?.wrapper,
        )}
      >
        <div
          className={cls(
            "flex space-y-2",
            orientation === "horizontal" && "justify-between items-end",
            position === "center" && "justify-center",
            position === "center" && orientation === "vertical" && "flex-col",
            classNames?.root,
            className,
          )}
        >
          <div className={cls("space-y-8", classNames?.titleContainer)}>
            <Chip
              className={cls(
                "bg-gold-100 rounded-full",
                position === "center" && "flex items-start justify-center",
                classNames?.chip,
              )}
            >
              {chipLabel}
            </Chip>
            <Typography
              as="h1"
              variant="bold-6xl"
              className={cls(
                position === "center" && "text-center",
                classNames?.title,
              )}
              {...titleProps}
            >
              {title}
            </Typography>
          </div>
          <div className="space-y-2">
            <Typography
              as="p"
              variant="regular-xl"
              className={cls(
                "text-gray-700",
                position === "center" && "text-center",
                classNames?.description,
              )}
              {...descriptionProps}
            >
              {description}
            </Typography>
            <div
              className={cls(position === "center" && "flex justify-center")}
            >
              {actionBtn}
            </div>
          </div>
        </div>

        {extraContent}
      </div>
    </header>
  );
};
