import { cls } from "@/utils/helpers";
import { TWClassNames } from "@/utils/types";
import { ComponentPropsWithoutRef, ReactNode } from "react"

type Slots = "base" | "wrapper"

type Props = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  classNames?: { [slot in Slots]?: TWClassNames }
};

export const SectionTemplate = ({ children, className, classNames, ...props }: Props) => {
  return (
    <section className={cls("py-16", className, classNames?.base)} {...props} >
      <div className={cls("container", classNames?.wrapper)}>
        {children}
      </div>
    </section>
  )
}

