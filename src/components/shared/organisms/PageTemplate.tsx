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
        className={cls("relative min-h-screen w-full px-4", classNames?.base)}
      >
        {!hideGradient && <GradientBackground variant={gradientVariant} />}
        <div className={cls(classNames?.container)}>
          <div className={cls(classNames?.wrapper)}>{children}</div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

type SectionTemplateProps = {
  header?: ReactElement;
  children: ReactNode;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const SectionTemplate = ({
  header,
  children,
  classNames,
}: SectionTemplateProps) => {
  return (
    <section className={cls("container space-y-8", classNames?.base)}>
      {header}
      {children}
    </section>
  );
};
