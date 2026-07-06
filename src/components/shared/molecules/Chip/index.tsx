import { cls } from "@/utils/helpers";
import { FC } from "@/utils/types";
import Typography, { TypographyProps } from "../../atoms/Typography";

type Color = "gold";

type ChipProps = TypographyProps & {
  color?: Color;
};

const chipColor = {
  gold: "bg-gold-100 text-black",
};

const Chip: FC<ChipProps> = ({
  children,
  className,
  color = "gold",
  ...props
}) => {
  return (
    <Typography
      {...props}
      className={cls(
        className,
        "text-medium-sm md:text-medium-base px-4 py-2 rounded-full w-fit",
        chipColor[color],
      )}
    >
      {children}
    </Typography>
  );
};

export default Chip;
