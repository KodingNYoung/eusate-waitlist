import { GridLines } from "@/components/shared/organisms/GridLines";
import { WeDeliverCardTemplate } from ".";

export const CSATScore = () => {
  return (
    <WeDeliverCardTemplate
      description="CSAT Score"
      score={97}
      unit="%"
      graph={<GridLines plot={<div></div>} />}
      classNames={{
        root: "border-[2px] border-gray/50",
        score: "text-gradient",
      }}
    />
  );
};
