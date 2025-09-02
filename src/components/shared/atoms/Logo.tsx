import { FC, LogoVariants } from "@/utils/types";
import React from "react";
import Image from "next/image";
import GradientBorder from "./GradientBorder";
import Typography from "./Typography";
import { cls } from "@/utils/helpers";

type Props = {
  type: LogoVariants;
  betaType?: "light" | "dark";
};

const typeProps: { [key in LogoVariants]: string } = {
  "full-black": "/logos/full-black.svg",
  "full-gray": "/logos/full-gray.svg",
  "full-white": "/logos/full-white.svg",
  "full-gradient-black": "/logos/full-gradient-black.svg",
  "full-gradient-white": "/logos/full-gradient-white.svg",
  "icon-white": "/logos/icon-white.svg",
  "icon-black": "/logos/icon-black.svg",
  "icon-gradient": "/logos/icon-gradient.svg",
};
const betaProps = {
  light: { border: "bg-gray-100", bg: "bg-white", color: "text-gray-700" },
  dark: {
    border:
      "bg-[linear-gradient(140deg,_rgba(194,_194,_194,_0.6)_9.8%,_rgba(194,_194,_194,_0)_39.18%),_linear-gradient(154.19deg,_rgba(204,_204,_204,_0)_70.34%,_rgba(194,_194,_194,_0.6)_94.92%)]",
    bg: "bg-[linear-gradient(180deg,_#151515_0%,_#1C1B1B_100%)]",
    color: "text-white",
  },
};

const Logo: FC<Props> = ({ type, className, betaType = "dark" }) => {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={typeProps[type]}
        alt={`logo-${type}`}
        className={className}
        priority
        height={32}
        width={135}
      />
      <GradientBorder
        classNames={{
          root: "w-fit rounded-[90px] group",
          container: cls("py-0.5 px-2 leading-none flex items-center"),
        }}
        borderWidth={1}
        bgColor={betaProps[betaType].bg}
        borderColor={betaProps[betaType].border}
      >
        <Typography
          as="span"
          className={cls(
            "text-medium-xs inline-block leading-none",
            betaProps[betaType].color
          )}
        >
          beta
        </Typography>
      </GradientBorder>
    </div>
  );
};

export default Logo;
