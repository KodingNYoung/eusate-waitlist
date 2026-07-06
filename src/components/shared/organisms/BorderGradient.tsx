import { FC } from "@/utils/types";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const BorderGradient: FC<Props> = ({ children }) => {
  return (
    <div className="bg-brand-gradient w-fit p-[2px] rounded-[90px]">
      {children}
    </div>
  );
};
