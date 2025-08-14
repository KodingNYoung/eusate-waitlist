import { cls } from "@/utils/helpers";
import { FC, TWClassNames } from "@/utils/types";
import React from "react";

type Slots = "root" | "container";
type Props = {
  classNames?: { [slot in Slots]?: TWClassNames };
  borderWidth?: number;
  bgColor?: TWClassNames;
  borderColor?: TWClassNames;
};

const GradientBorder: FC<Props> = ({
  children,
  classNames,
  bgColor = "bg-white",
  borderColor = "bg-brand-gradient",
  borderWidth = 1,
}) => {
  return (
    <div
      className={cls(borderColor, classNames?.root)}
      style={{ padding: `${borderWidth}px` }}
    >
      <div className={cls("rounded-[inherit] h-full w-full", bgColor, classNames?.container)}>
        {children}
      </div>
    </div>
  );
};

export default GradientBorder;
