import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { ResolutionRate } from "./cards/ResolutionRate";
import { CSATScore } from "./cards/CSATScore";
import { ROIFounders } from "./cards/ROIFounders";
import { SectionTemplate } from "@/components/shared/organisms/PageTemplate";

export const WeDeliver = () => {
  return (
    <SectionTemplate className="space-y-20 py-12 md:py-20">
      <SubHeader
        position="center"
        chipLabel="We deliver"
        title="Your team and your customers both deserve the top-quality"
        classNames={{ titleContainer: "w-full md:w-[50%]" }}
      />
      <div className="flex flex-wrap justify-center md:justify-between gap-4 border">
        <ResolutionRate />
        {/* <CSATScore /> */}
        {/* <ROIFounders /> */}
      </div>
    </SectionTemplate>
  );
};
