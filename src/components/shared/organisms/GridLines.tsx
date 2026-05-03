import { FC } from "@/utils/types";
import { ReactElement } from "react";

type Props = {
  lineNumber?: number;
  plot: ReactElement;
};

export const GridLines: FC<Props> = ({ lineNumber = 6, plot }) => {
  return (
    <div className="w-full">
      <div className="relative z-1">{plot}</div>
      <div className="absolute z-2 bottom-0 w-full space-y-6">
        {new Array(lineNumber).fill(0).map((_, i) => (
          <div
            key={i}
            className="border-t-2 border-dashed border-white/10 w-full"
          />
        ))}
      </div>
    </div>
  );
};
