import { cls } from "@/utils/helpers";
import { TWClassNames } from "@/utils/types";
import React, { ReactNode } from "react";

export type GradientVariants = "yellow" | "peach" | "gray";

const variantProps: { [variant in GradientVariants]: TWClassNames } = {
  yellow: "bg-[linear-gradient(180deg,_#F3E5B2_0%,_#FFFFFF_100%)]",
  peach: "bg-[linear-gradient(180deg,_#f8cfca_0%,_#FFFFFF_100%)]",
  gray: "bg-[linear-gradient(180deg,_#F0F1F3_0%,_#FFFFFF_100%)]",
};

type GradientBackgroundProps = {
  variant?: GradientVariants;
  from?: string;
  to?: string;
  className?: string;
  children?: ReactNode;
};

const GradientBackground = ({
  from,
  to,
  variant = "yellow",
  className,
  children,
}: GradientBackgroundProps) => {
  const gradient = `bg-[linear-gradient(180deg,_${from}_0%,_${to}_100%)]`;
  return (
    <div className="relative flex justify-center">
      <div
        className={cls(
          "w-full absolute inset-0 rounded-3xl -z-1 min-h-[394px]",
          variantProps[variant],
          gradient,
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;
