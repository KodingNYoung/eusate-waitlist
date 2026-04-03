
import GradientBackground, { GradientVariants } from "@/components/shared/atoms/GradientBackground";
import Navbar from "@/components/shared/organisms/navbar";
import { cls } from "@/utils/helpers";
import { TWClassNames } from "@/utils/types";
import { ReactElement } from "react";
import Footer from "./footer";

type Slots = "body"

type Props = {
  backgroundVariant?: GradientVariants;
  children: ReactElement;
  classNames?: { [slot in Slots]?: TWClassNames };
}

export const PageTemplate = ({ backgroundVariant, children, classNames }: Props) => {
  return (
    <div>
      <Navbar />
      <GradientBackground variant={backgroundVariant} />
      <main className={cls("pt-[88px] px-4", classNames?.body)}>
        {
          children
        }
      </main>
      <Footer />
    </div>
  )
}

