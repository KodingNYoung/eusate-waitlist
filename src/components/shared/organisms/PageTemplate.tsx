import GradientBackground, {
  GradientVariants,
} from "@/components/shared/atoms/GradientBackground";
import Navbar from "@/components/shared/organisms/navbar";
import { cls } from "@/utils/helpers";
import { TWClassNames } from "@/utils/types";
import { ReactElement, ReactNode } from "react";
import Footer from "./footer";

type Slots = "base" | "container" | "wrapper";

type Props = {
  gradientVariant?: GradientVariants;
  hideGradient?: boolean;
  children: ReactNode;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const PageTemplate = ({
  gradientVariant,
  children,
  classNames,
  hideGradient = false,
}: Props) => {
  return (
    <div>
      <Navbar />
      <main
        className={cls(
          "relative min-h-screen w-full px-2 md:px-4",
          classNames?.base,
        )}
      >
        {!hideGradient && <GradientBackground variant={gradientVariant} />}
        <div className={cls(classNames?.container)}>
          <div className={cls(classNames?.wrapper)}>{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

type SectionTemplateProps = {
  header?: ReactElement;
  children: ReactNode;
  className?: TWClassNames;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const SectionTemplate = ({
  header,
  children,
  className,
  classNames,
}: SectionTemplateProps) => {
  return (
    <section className={cls(className, classNames?.base)}>
      <div className={cls("md:container space-y-8", classNames?.container)}>
        {header}
        {children}
      </div>
    </section>
  );
};

export const PageSection = ({
  header,
  children,
  className,
  classNames,
}: SectionTemplateProps) => {
  return (
    <section
      className={cls("rouded-x24 md:rounded-x40", className, classNames?.base)}
    >
      <div className={cls("md:container space-y-8", classNames?.container)}>
        {header && header}
        {children}
      </div>
    </section>
  );
};
