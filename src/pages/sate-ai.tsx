import Image from "next/image";
import {
  SATE_FEATURES_B,
  SateFeature,
} from "@/components/routes/sate-ai/utils";
import { SateAction } from "@/components/routes/sate-ai/SateAction/SataActionDefault";
import { SateFeatureCard } from "@/components/routes/sate-ai/SateFeatureCard";
import { ScrollCards } from "@/components/shared/organisms/animata/cards/card-reveal";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import {
  PageSection,
  PageTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { CARDS } from "@/components/routes/sate-ai/SateAction/const";
import { ScrollReveal } from "@/components/shared/organisms/animata/text/scroll-reveal";
import { PageHero } from "@/components/shared/organisms/PageHero";
import { useMediaQuery } from "@/utils/hooks";

const SateAiPage = () => {
  const isMobile = useMediaQuery();
  return (
    <PageTemplate classNames={{ wrapper: "grid gap-[50px]" }}>
      <PageHero
        classNames={{
          base: "bg-[url(/images/sate-ai-bg.webp)] bg-contain md:bg-cover bg-right h-[72vh] md:h-[700px] flex items-start pb-12 md:pb-20 justify-center mx-0",
          container: "h-full flex items-end",
          wrapper: "px-5",
        }}
      >
        <PageHeader
          chipLabel="Sate Ai"
          orientation="horizontal"
          startTitleContainer={
            <div className="relative">
              <Image
                alt="glowing-ball-img"
                src="/sate-ai/images/glowing-ball.webp"
                width={70}
                height={70}
              />
            </div>
          }
          classNames={{
            root: "flex justify-between gap-10",
            titleContainer: "md:w-[60%]",
            title: "text-white text-bold-3xl md:text-bold-5xl",
            descriptionContainer: "md:w-[40%]",
            description: "text-white/70 leading-[150%]",
          }}
          title="AI that understands context. Recognizes emotion. Takes action."
          description="More than a chatbot, SATE understands complex questions and resolves issues effectively. It handles 80% of support queries with emotional intelligence, making conversations feel natural."
        />
      </PageHero>

      <section className="relative h-full md:h-[60vh] w-full px-5 md:pt-20 space-y-10 md:space-y-0">
        {/* TEXT */}
        <div className="flex items-center w-full justify-center z-2">
          <ScrollReveal
            shouldFade={!isMobile}
            text="Build different from every chatbot you've tried"
            classNames={{
              container: "w-full md:w-[40%]",
              base: "w-full flex items-center justify-center",
              paragraph:
                "text-bold-3xl md:text-bold-6xl md:justify-center md:text-center leading-[180%]",
            }}
          />
        </div>

        {/* CARDS */}
        <div className="hidden md:flex absolute inset-0 overflow-hidden z-3">
          <ScrollCards<SateFeature> items={SATE_FEATURES_B}>
            {(items) =>
              items.map(({ key, ...item }) => (
                <SateFeatureCard
                  key={key}
                  {...item}
                  classNames={{
                    title: "!text-black/100",
                    description: "!text-black/50",
                    base: "border-2 border-gray-50",
                  }}
                />
              ))
            }
          </ScrollCards>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden flex justify-center flex-col gap-4 px-[8.5px]">
          {SATE_FEATURES_B.map(({ key, ...item }) => (
            <SateFeatureCard
              key={key}
              {...item}
              classNames={{
                title: "!text-black/100",
                description: "!text-black/50",
                base: "border-2 border-gray-50",
              }}
            />
          ))}
        </div>
      </section>

      <PageSection className="bg-gold-50 px-5 py-12 md:px-40 md:py-20 flex justify-center">
        <SateAction
          chipLabel="Sate in Action"
          title="Sate in actively engaged in various activities."
          items={CARDS}
        />
      </PageSection>
    </PageTemplate>
  );
};

export default SateAiPage;
