import { FC } from "@/utils/types";
import { cls } from "@/utils/helpers";
import { HTMLProps } from "react";
import { IconNames } from "@/utils/iconNames";

type Props = HTMLProps<HTMLSpanElement> & {
  name: IconNames;
  size?: number | string;
};

const Icon: FC<Props> = ({ className, name, size, ...props }) => {
  return (
    <span
      style={{
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
      }}
      className={cls(
        "text-inherit text-regular-sm !leading-none",
        name,
        className
      )}
      {...props}
    />
  );
};

export default Icon;
