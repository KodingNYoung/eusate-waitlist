import { SectionTemplate } from "@/components/shared/organisms/PageTemplate";
import { SateAction } from "../sate-ai/SateAction";
import { BackgroundWatermark } from "@/components/shared/organisms/DecorativeGraphic";
import { CARDS } from "../sate-ai/SateAction/const";

export const HowItWorks = () => {
  return (
    <SectionTemplate className="relative overflow-hidden bg-gold-50 px-2 py-8 md:px-40 md:py-20 flex justify-center rounded-x40">
      <BackgroundWatermark imgSrc="/images/about-mission-swatch.webp" />
      <SateAction
        chipLabel="How it works"
        title="Support that starts working today."
        items={CARDS}
      />
    </SectionTemplate>
  );
};
