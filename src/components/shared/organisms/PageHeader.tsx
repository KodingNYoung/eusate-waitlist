import { FC, TWClassNames } from "@/utils/types";
import Typography, { TypographyProps } from "../atoms/Typography";
import Chip from "../molecules/Chip";
import { cls } from "@/utils/helpers";
import { forwardRef, ReactElement } from "react";

type Slots =
  | "container"
  | "wrapper"
  | "root"
  | "chip"
  | "title"
  | "description"
  | "titleContainer"
  | "descriptionContainer";
type Orientation = "horizontal" | "vertical";
type Position = "center" | "left";
type Variant = "header" | "sub";
export type GradientVariants = "yellow" | "peach" | "gray";

const variantProps: { [variant in GradientVariants]: TWClassNames } = {
  yellow: "bg-[linear-gradient(180deg,_#F3E5B2_0%,_#FFFFFF_100%)]",
  peach: "bg-[linear-gradient(180deg,_#f8cfca_0%,_#FFFFFF_100%)]",
  gray: "bg-[linear-gradient(180deg,_#F0F1F3_0%,_#FFFFFF_100%)]",
};

const positionVariantSubHeader: {
  [p in Position]?: { [slot in Slots]?: TWClassNames };
} = {
  center: {
    root: "flex-col justify-center",
    titleContainer: "self-center",
    title: "text-center",
  },
};

type Props = {
  chipLabel: string | ReactElement;
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
  gradient?: GradientVariants;
  startContent?: ReactElement;
  startTitleContainer?: ReactElement;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const PageHeader = forwardRef<HTMLDivElement, Props>(
  (
    {
      chipLabel,
      title,
      cta,
      description,
      className,
      classNames,
      position = "left",
      gradient,
      orientation = "vertical",
      endContent,
      startContent,
      variant = "header",
      titleProps,
      startTitleContainer,
      descriptionProps,
    },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className={cls(
          gradient && variantProps[gradient],
          classNames?.container,
        )}
      >
        <div
          className={cls(
            "flex flex-col md:flex-row md:container md:items-center",
            position === "center" && "flex-col justify-center",
            variant === "sub" && "p-0",
            classNames?.wrapper,
          )}
        >
          {startContent}
          <div
            className={cls(
              "flex",
              orientation === "horizontal" &&
                "justify-between flex-col md:flex-row items-end",
              position === "center" && "justify-center",
              position === "center" && orientation === "vertical" && "flex-col",
              variant === "sub" && "flex-col",
              classNames?.root,
              className,
            )}
          >
            {/* TITLE */}
            <div className={cls("grid gap-y-8", classNames?.titleContainer)}>
              {startTitleContainer}
              <Chip
                className={cls(
                  classNames?.chip,
                  position === "center" && "mx-auto",
                )}
              >
                {chipLabel}
              </Chip>
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
            {(description || cta) && (
              <div
                className={cls("space-y-2", classNames?.descriptionContainer)}
              >
                {description && (
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
                )}
                {cta && (
                  <div
                    className={cls(
                      position === "center" && "flex justify-center",
                    )}
                  >
                    {cta}
                  </div>
                )}
              </div>
            )}
          </div>

          {endContent}
        </div>
      </header>
    );
  },
);

PageHeader.displayName = "PageHeader";

type SubHeaderProps = {
  chipLabel?: string;
  title: string | ReactElement;
  position?: Position;
  description?: string;
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
  position = "left",
}) => {
  return (
    <div
      className={cls(
        "flex flex-col w-full",
        orientation === "horizontal" && "md:flex-row justify-between items-end",
        classNames?.container,
      )}
    >
      <div
        className={cls(
          "flex space-y-2",
          positionVariantSubHeader[position]?.root,
          classNames?.root,
        )}
      >
        <div
          className={cls(
            "grid gap-y-4 md:gap-y-4",
            positionVariantSubHeader[position]?.titleContainer,
            classNames?.titleContainer,
          )}
        >
          {chipLabel && (
            <Chip className={cls(position === "center" && "mx-auto")}>
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
        </div>
        <div className={cls(classNames?.descriptionContainer)}>
          {description && (
            <Typography as="p" className={cls(classNames?.description)}>
              {description}
            </Typography>
          )}
        </div>

        {cta && cta}
      </div>
    </div>
  );
};
