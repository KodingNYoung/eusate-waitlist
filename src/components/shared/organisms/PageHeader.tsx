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
  | "titleContainer"
  | "chipContainer";
type Orientation = "horizontal" | "vertical";
type Position = "center" | "left";
type Variant = "header" | "sub";

type Props = {
  chipLabel: string;
  title: string | ReactElement;
  description?: string;
  titleProps?: TypographyProps;
  className?: TWClassNames;
  position?: Position;
  orientation?: Orientation;
  descriptionProps?: TypographyProps;
  variant?: Variant;
  cta?: ReactElement;
  endContent?: ReactElement;
  startContent?: ReactElement;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const PageHeader: FC<Props> = ({
  chipLabel,
  title,
  cta,
  description,
  className,
  classNames,
  position = "left",
  orientation = "vertical",
  endContent,
  startContent,
  variant = "header",
  titleProps,
  descriptionProps,
}) => {
  return (
    <header
      className={cls(
        "bg-cover rounded-3xl mx-4",
        variant === "header" ? "p-16 h-[720px] " : "mx-0",
        classNames?.container,
      )}
    >
      <div
        className={cls(
          "flex md:container md:items-center max-w-[1400px]",
          position === "center" && "flex-col justify-center",
          variant === "sub" && "p-0",
          classNames?.wrapper,
        )}
      >
        {startContent}
        <div
          className={cls(
            "flex space-y-2",
            orientation === "horizontal" && "justify-between items-end",
            position === "center" && "justify-center",
            position === "center" && orientation === "vertical" && "flex-col",
            variant === "sub" && "flex-col",
            classNames?.root,
            className,
          )}
        >
          {/* TITLE */}
          <div className={cls("space-y-8", classNames?.titleContainer)}>
            <div
              className={cls(
                position === "center" && "flex justify-center",
                classNames?.chipContainer,
              )}
            >
              <Chip
                classNames={{ container: "w-fit p-2 text-medium-base" }}
                className={cls(
                  "bg-gold-100 rounded-full p",
                  position === "center" && "flex items-start justify-center",
                  classNames?.chip,
                )}
              >
                {chipLabel}
              </Chip>
            </div>
            {typeof title === "string" ? (
              <Typography
                as="h1"
                className={cls(
                  "text-bold-4xl md:text-bold-6xl",
                  position === "center" && "text-center",
                  classNames?.title,
                )}
                {...titleProps}
              >
                {title}
              </Typography>
            ) : (
              title
            )}
          </div>

          {/* DESCRIPTION AND CTA */}
          <div className="space-y-2">
            <Typography
              as="p"
              className={cls(
                "md:text-regular-xl text-gray-700",
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
              {cta}
            </div>
          </div>
        </div>

        {endContent}
      </div>
    </header>
  );
};

type SubHeaderProps = {
  chipLabel?: string;
  title: string;
  position?: Position;
  description: string;
  orientation?: Orientation;
  titleProps?: TypographyProps;
  cta?: ReactElement;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const SubHeader: FC<SubHeaderProps> = ({
  chipLabel,
  title,
  cta,
  titleProps,
  description,
  orientation = "vertical",
  classNames,
  position,
}) => {
  return (
    <div
      className={cls(
        "flex",
        orientation === "horizontal"
          ? "flex-row justify-between items-end"
          : "flex-col",
        classNames?.container,
      )}
    >
      <div className={cls(classNames?.root)}>
        <div className={cls("space-y-8", classNames?.titleContainer)}>
          {chipLabel && (
            <Chip
              className={cls(
                "bg-gold-100 rounded-full",
                position === "center" && "flex items-start justify-center",
                classNames?.chip,
              )}
            >
              {chipLabel}
            </Chip>
          )}
          {typeof title === "string" ? (
            <Typography
              as="h1"
              variant="bold-3xl"
              className={cls(
                position === "center" && "text-center",
                classNames?.title,
              )}
              {...titleProps}
            >
              {title}
            </Typography>
          ) : (
            title
          )}
          <Typography as="p" className={cls(classNames?.description)}>
            {description}
          </Typography>
        </div>

        {cta}
      </div>
    </div>
  );
};
