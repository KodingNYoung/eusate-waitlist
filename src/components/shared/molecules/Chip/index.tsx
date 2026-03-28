import { FC } from "@/utils/types";
import { Chip as ChipBase, ChipProps } from "@heroui/chip";

type Props = ChipProps;
const Chip: FC<Props> = ({ children, ...props }) => {
  return (
    <ChipBase {...props}>{children}</ChipBase>
  )
}

export default Chip
