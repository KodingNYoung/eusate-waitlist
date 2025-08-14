import { FC, LogoVariants } from "@/utils/types";
import React from "react";
import Image from "next/image";

type Props = {
  type: LogoVariants;
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

const Logo: FC<Props> = ({ type, className }) => {
  return (
    <Image
      src={typeProps[type]}
      alt={`logo-${type}`}
      className={className}
      priority
      height={32}
      width={135}
    />
  );
};

export default Logo;
