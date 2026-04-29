import { GridLines } from "@/components/shared/organisms/GridLines";
import { WeDeliverCardTemplate } from "..";
import { AnimateGraph } from "./AnimateGraph";
import Counter from "@/components/shared/organisms/animata/text/counter";

export const CSATScore = () => {
  return (
    <WeDeliverCardTemplate
      description="CSAT Score"
      score={<Counter className="text-bold-6xl" targetValue={97} />}
      unit="%"
      classNames={{
        root: "border-[2px] border-gray/50",
        score: "text-gradient",
      }}
      graph={<GridLines plot={<AnimateGraph />} />}
    />
  );
};
