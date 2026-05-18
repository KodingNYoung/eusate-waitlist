import Image from "next/image";
import { cls } from "@/utils/helpers";
import { FC, InternalPath, TWClassNames } from "@/utils/types";

type Slots = "container" | "img";
type BackgroundWatermarkProps = {
  imgSrc: InternalPath;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const BackgroundWatermark: FC<BackgroundWatermarkProps> = ({
  imgSrc,
  classNames,
}) => {
  return (
    <div
      className={cls(
        "w-full h-full absolute inset-0 opacity-50",
        classNames?.container,
      )}
    >
      <Image priority alt="swatch" src={imgSrc} fill />
    </div>
  );
};
