import { FC, TWClassNames } from "@/utils/types"
import Typography, { TypographyProps } from "../atoms/Typography"
import Chip from "../molecules/Chip"
import { cls } from "@/utils/helpers";

type Slots = "root" | "chip" | "title" | "description" | "titleContainer";

type Props = {
  chipLabel: string,
  title: string,
  description: string,
  titleProps?: TypographyProps;
  className?: TWClassNames;
  descriptionProps?: TypographyProps;
  classNames?: { [slot in Slots]?: TWClassNames };
}

export const PageHeader: FC<Props> = ({ chipLabel, title, description, className, classNames, titleProps, descriptionProps }) => {
  return (
    <header className={cls("space-y-8", classNames?.root, className)}>
      <Chip className={cls("bg-gold-100", classNames?.chip)}>{chipLabel}</Chip>
      <div className={cls("space-y-2", classNames?.titleContainer)}>
        <Typography as="h1" variant="bold-6xl" className={classNames?.title} {...titleProps} >
          {title}
        </Typography>
        <Typography
          as="p"
          variant="regular-xl"
          className={cls("text-gray-700", classNames?.description)}
          {...descriptionProps}
        >{description}</Typography>
      </div>
    </header>
  )
}

