import { cls } from "@/utils/helpers";
import { TWClassNames } from "@/utils/types";
import { forwardRef, ReactNode } from "react";

type Slots = "base" | "container" | "wrapper";
type Props = {
  children: ReactNode;
  classNames?: { [slot in Slots]?: TWClassNames };
};
export const PageHero = forwardRef<HTMLDivElement, Props>(
  ({ children, classNames }, ref) => {
    return (
      <div
        ref={ref}
        className={cls(
          "md:pt-[88px] bg-cover rounded-x24 md:rounded-x40",
          classNames?.base,
        )}
      >
        <div className={cls(classNames?.container)}>
          <div className={cls(classNames?.wrapper)}>{children}</div>
        </div>
      </div>
    );
  },
);

PageHero.displayName = "PageHero";
