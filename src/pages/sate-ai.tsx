import Image from "next/image";
import {
  SATE_FEATURES_B,
  SateFeature,
} from "@/components/routes/sate-ai/utils";
import { SateAction } from "@/components/routes/sate-ai/SateAction";
import { SateFeatureCard } from "@/components/routes/sate-ai/SateFeatureCard";
import { ScrollCards } from "@/components/shared/organisms/animata/cards/card-reveal";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import {
  PageTemplate,
  SectionTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { CARDS } from "@/components/routes/sate-ai/SateAction/const";

const SateAiPage = () => {
  return (
    <PageTemplate
      hideGradient
      classNames={{
        wrapper: "space-y-20",
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
          container:
            "bg-[url(/images/sate-ai-bg.webp)] flex items-end justify-center mx-0 pt-[100px]",
          root: "flex justify-between gap-8",
          titleContainer: "md:w-[60%]",
          title: "text-white text-bold-3xl md:text-bold-5xl ",
          descriptionContainer: "md:w-[40%]",
          description: "text-white/70",
        }}
        title="AI that understands context. Recognizes emotion. Takes action."
        description="More than a chatbot, SATE understands complex questions and resolves issues effectively. It handles 80% of support queries with emotional intelligence, making conversations feel natural."
      />

      {/* <SectionTemplate */}
      {/*   classNames={{ */}
      {/*     base: "h-[590px] relative flex justify-center items-center", */}
      {/*   }} */}
      {/* > */}
      {/*   <ScrollReveal */}
      {/*     text="Build different from every chatbot you've tried" */}
      {/*     classNames={{ */}
      {/*       container: "flex justify-center w-[45%]", */}
      {/*       text: "text-bold-6xl text-center", */}
      {/*     }} */}
      {/*   /> */}
      {/* </SectionTemplate> */}

      <section className="relative md:h-[100vh]">
        {/* TEXT */}
        {/* <div className="h-screen flex items-center justify-center z-10"> */}
        {/*   <ScrollReveal */}
        {/*     text="Build different from every chatbot you've tried" */}
        {/*     classNames={{ */}
        {/*       container: "flex justify-center w-[45%]", */}
        {/*       text: "text-bold-6xl text-center", */}
        {/*     }} */}
        {/*   /> */}
        {/* </div> */}

        {/* CARDS */}
        <div className="md:sticky md:top-0 md:h-[100vh] flex items-center overflow-hidden z-0">
          <ScrollCards<SateFeature> items={SATE_FEATURES_B}>
            {(items) =>
              items.map(({ key, ...item }) => (
                <SateFeatureCard
                  key={key}
                  {...item}
                  color=""
                  classNames={{
                    title: "text-black/100",
                    description: "text-black/50",
                    base: "border-2 border-gray-50",
                  }}
                />
              ))
            }
          </ScrollCards>
        </div>
        <div className="md:hidden flex justify-center flex-col gap-4">
          {SATE_FEATURES_B.map(({ key, ...item }) => (
            <SateFeatureCard
              key={key}
              {...item}
              color=""
              classNames={{
                title: "text-black/100",
                description: "text-black/50",
                base: "border-2 border-gray-50",
              }}
            />
          ))}
        </div>
      </section>

      <SectionTemplate className="bg-gold-50 px-2 py-8 md:px-40 md:py-20 flex justify-center">
        <SateAction
          chipLabel="Sate in Action"
          title="Sate in actively engaged in various activities."
          items={CARDS}
        />
      </SectionTemplate>
    </PageTemplate>
  );
};

export default SateAiPage;
