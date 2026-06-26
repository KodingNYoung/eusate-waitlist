import { cls } from "@/utils/helpers";
import { FC, TWClassNames } from "@/utils/types";
import { Chip as ChipBase, ChipProps } from "@heroui/chip";

type Slots = "container" | keyof NonNullable<ChipProps["classNames"]>;

type Props = Omit<ChipProps, "classNames"> & {
  classNames?: { [slot in Slots]?: TWClassNames };
};
const Chip: FC<Props> = ({ children, ...props }) => {
  return (
    <div className={cls(props.classNames?.container)}>
      <ChipBase {...props}>{children}</ChipBase>
    </div>
  );
};

export default Chip;
