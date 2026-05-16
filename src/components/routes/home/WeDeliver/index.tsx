import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { ResolutionRate } from "./cards/ResolutionRate";
import { CSATScore } from "./cards/CSATScore";
import { ROIFounders } from "./cards/ROIFounders";
import { PageSection } from "@/components/shared/organisms/PageTemplate";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { staggerContainer } from "@/components/shared/organisms/AnimatedBlock/variants";

export const WeDeliver = () => {
  return (
    <PageSection
      classNames={{
        base: "px-5 py-12 md:py-20",
        container: "gap-y-10 md:!gap-y-20 ",
      }}
    >
      <AnimatedBlock>
        <SubHeader
          position="center"
          chipLabel="We deliver"
          title="Your team and your customers both deserve the top-quality"
          classNames={{ titleContainer: "w-full md:w-[50%]" }}
        />
      </AnimatedBlock>
      <AnimatedBlock
        variants={staggerContainer}
        className="flex flex-wrap justify-center xl:justify-between gap-4"
      >
        <ResolutionRate />
        <CSATScore />
        <ROIFounders />
      </AnimatedBlock>
    </PageSection>
  );
};
