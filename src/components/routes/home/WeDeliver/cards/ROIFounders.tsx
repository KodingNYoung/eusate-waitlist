import { GridLines } from "@/components/shared/organisms/GridLines";
import { WeDeliverCardTemplate } from ".";

export const ROIFounders = () => {
  return (
    <WeDeliverCardTemplate
      description="ROI for Founders"
      score={7}
      unit="x"
      graph={<GridLines plot={<div></div>} />}
      classNames={{
        root: "bg-[url(/images/guy-smilling-with-phone.webp)] bg-contain",
        description: "text-white",
        score: "text-white"
      }}
    />
  );
};
