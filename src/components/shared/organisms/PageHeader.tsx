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
  title: string | ReactElement;
  description?: string;
  titleProps?: TypographyProps;
  className?: TWClassNames;
  position?: Position;
  orientation?: Orientation;
  descriptionProps?: TypographyProps;
  variant?: Variant;
  actionBtn?: ReactElement;
  extraContent?: ReactElement;
  startContent?: ReactElement;
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
  startContent,
  variant = "header",
  titleProps,
  descriptionProps,
}) => {
  return (
    <header
      className={cls(
        "bg-cover rounded-3xl mx-4",
        variant === "header" && "p-16 h-[720px] ",
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
        {startContent}
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
          {/* TITLE */}
          <div className={cls("space-y-8", classNames?.titleContainer)}>
            <Chip
              classNames={{ container: "flex-none" }}
              className={cls(
                "bg-gold-100 rounded-full",
                position === "center" && "flex flex-none items-start justify-center",
                classNames?.chip,
              )}
            >
              {chipLabel}
            </Chip>
            {
              typeof title === "string" ?
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
                </Typography> : title
            }
          </div>

          {/* DESCRIPTION AND CTA */}
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



type SubHeaderProps = {
  chipLabel: string;
  title: string;
  position?: Position;
  orientation?: Orientation;
  titleProps?: TypographyProps;
  cta?: ReactElement;
  classNames?: { [slot in Slots]?: TWClassNames };
}

export const SubHeader: FC<SubHeaderProps> = ({ chipLabel, title, cta, titleProps, orientation = "vertical", classNames, position }) => {
  return (
    <div className={cls("flex", orientation === "horizontal" ? "flex-row justify-between items-end" : "flex-col", classNames?.container)}>
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
        {
          typeof title === "string" ?
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
            </Typography> : title
        }
      </div>

      {cta}

    </div>
  );
}
