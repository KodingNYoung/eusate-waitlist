import { FC } from "@/utils/types";
import { cls } from "@/utils/helpers";
import React, { HTMLProps, ReactElement } from "react";
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
        className,
      )}
      {...props}
    />
  );
};

export default Icon;

type GradientIconProps = {
  children: ReactElement;
};

export const GradientIcon: FC<GradientIconProps> = ({ children }) => {
  return (
    <span className="[&_svg]:stroke-black group-hover:[&_svg]:[stroke:url(#stroke-gradient)] [&_svg]:transition-all [&_svg]:duration-500">
      {children}
    </span>
  );
};
