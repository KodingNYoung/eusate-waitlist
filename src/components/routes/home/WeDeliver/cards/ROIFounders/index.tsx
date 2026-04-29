import { GridLines } from "@/components/shared/organisms/GridLines";
import { WeDeliverCardTemplate } from "..";
import Counter from "@/components/shared/organisms/animata/text/counter";
import { ROIGraphSVG } from "./ROIGraphSVG";

export const ROIFounders = () => {
  return (
    <WeDeliverCardTemplate
      description="ROI for Founders"
      score={<Counter className="text-bold-6xl" targetValue={7} />}
      unit="x"
      graph={<GridLines plot={<ROIGraphSVG />} />}
      classNames={{
        root: "bg-[url(/images/guy-smilling-with-phone.webp)] bg-no-repeat bg-contain",
        description: "text-white",
        score: "text-white",
      }}
    />
  );
};
