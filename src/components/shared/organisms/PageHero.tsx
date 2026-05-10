import { cls } from "@/utils/helpers";
import { FC, TWClassNames } from "@/utils/types";
import { ReactNode } from "react";

type Slots = "base" | "container" | "wrapper";
type Props = {
  children: ReactNode;
  classNames?: { [slot in Slots]?: TWClassNames };
};
export const PageHero: FC<Props> = ({ children, classNames }) => {
  return (
    <div
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
};
