
import GradientBackground, { GradientVariants } from "@/components/shared/atoms/GradientBackground";
import Navbar from "@/components/shared/organisms/navbar";
import { cls } from "@/utils/helpers";
import { TWClassNames } from "@/utils/types";
import { ReactNode } from "react";
import Footer from "./footer";

type Slots = "body"

type Props = {
  gradientVariant?: GradientVariants;
  hideGradient?: boolean;
  children: ReactNode;
  classNames?: { [slot in Slots]?: TWClassNames };
}

export const PageTemplate = ({ gradientVariant, children, classNames, hideGradient = false }: Props) => {
  return (
    <div>
      <Navbar />
      {!hideGradient && <GradientBackground variant={gradientVariant} />}
      <main className={cls("container pt-[88px]", classNames?.body)}>
        {
          children
        }
      </main>
      <Footer />
    </div>
  )
}

