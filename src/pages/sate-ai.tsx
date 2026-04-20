import { SateAction } from "@/components/routes/sate-ai/SateAction/index_";
import { SateFeatureCard } from "@/components/routes/sate-ai/SateFeatureCard";
import { SATE_FEATURES, SateFeature } from "@/components/routes/sate-ai/utils";
import { ScrollCards } from "@/components/shared/organisms/animata/cards/card-reveal";
import { ScrollReveal } from "@/components/shared/organisms/animata/text/scroll-reveal";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import {
  PageTemplate,
  SectionTemplate,
} from "@/components/shared/organisms/PageTemplate";

const SateAiPage = () => {
  return (
    <PageTemplate hideGradient>
      <PageHeader
        chipLabel="Sate Ai"
        orientation="horizontal"
        classNames={{
          container:
            "bg-[url(/images/sate-ai-bg.webp)] flex items-end justify-center mx-0",
          root: "flex justify-between gap-8",
          titleContainer: "w-[60%]",
          title: "text-white text-bold-5xl ",
          descriptionContainer: "w-[40%]",
          description: "text-white/70",
        }}
        title="AI that understans context. Recognizes emotion. Takes action."
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

      <section className="relative h-[100vh]">
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
        <div className="sticky top-0 h-[100vh] flex items-center overflow-hidden z-0">
          <ScrollCards<SateFeature> items={SATE_FEATURES}>
            {(items) =>
              items.map(({ id, ...item }) => (
                <SateFeatureCard key={id} {...item} />
              ))
            }
          </ScrollCards>
        </div>
      </section>

      <SectionTemplate className="bg-gold-50 px-40 py-20 flex justify-center">
        <SateAction />
      </SectionTemplate>
    </PageTemplate>
  );
};

export default SateAiPage;
