import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { ResolutionRate } from "./cards/ResolutionRate";
import { CSATScore } from "./cards/CSATScore";
import { ROIFounders } from "./cards/ROIFounders";

export const WeDeliver = () => {
  return (
    <section className="container space-y-20 py-20">
      <SubHeader
        position="center"
        chipLabel="We deliver"
        title="Your team and your customers both deserve the top-quality"
        classNames={{ titleContainer: "w-[50%]" }}
      />
      <div className="flex justify-between gap-4">
        <ResolutionRate />
        <CSATScore />
        <ROIFounders />
      </div>
    </section>
  );
};
