import GradientBackground, {
  GradientVariants,
} from "@/components/shared/atoms/GradientBackground";
import Navbar from "@/components/shared/organisms/navbar";
import { cls } from "@/utils/helpers";
import { HexColor, TWClassNames } from "@/utils/types";
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
    <div className="relative">
      <Navbar />
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient
            id="copilot-grad-0"
            x1="26.666"
            y1="20"
            x2="66.666"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D7AB07" />
            <stop offset="1" stopColor="#E86555" />
          </linearGradient>
          <linearGradient
            id="copilot-grad-1"
            x1="0"
            y1="20"
            x2="40"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D7AB07" />
            <stop offset="1" stopColor="#E86555" />
          </linearGradient>
        </defs>
      </svg>
      <main
        className={cls(
          "relative min-h-screen w-full px-2 md:px-4 mt-[80px] md:mt-[0px]",
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
  id?: string;
  color?: HexColor;
  header?: ReactElement;
  children: ReactNode;
  className?: TWClassNames;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const SectionTemplate = ({
  id,
  color,
  header,
  children,
  className,
  classNames,
}: SectionTemplateProps) => {
  return (
    <section
      style={{ backgroundColor: color }}
      id={id}
      className={cls(
        "transition-colors duration-300",
        className,
        classNames?.base,
      )}
    >
      <div className={cls("md:container space-y-8", classNames?.container)}>
        {header}
        {children}
      </div>
    </section>
  );
};

export const PageSection = ({
  id,
  header,
  color,
  children,
  className,
  classNames,
}: SectionTemplateProps) => {
  return (
    <section
      id={id}
      style={{ backgroundColor: color }}
      className={cls(
        "transition-colors duration-300 rounded-x24 md:rounded-x40",
        className,
        classNames?.base,
      )}
    >
      <div className={cls("md:container grid gap-y-8", classNames?.container)}>
        {header && header}
        {children}
      </div>
    </section>
  );
};
