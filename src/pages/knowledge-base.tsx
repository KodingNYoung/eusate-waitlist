import Image from "next/image";
import { ArrowRightIcon } from "@/assets/icons";
import { KBFeatures } from "@/components/routes/knowledge-base/KBFeatures";
import { KBFunctionalities } from "@/components/routes/knowledge-base/KBFunctionalities";
import Button from "@/components/shared/molecules/Button";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { useMediaQuery } from "@/utils/hooks";
import { KBFeaturesMobile } from "@/components/routes/knowledge-base/KBFeaturesMobile";

const KnowledgeBasePage = () => {
  const isMobile = useMediaQuery();
  return (
    <PageTemplate hideGradient classNames={{ wrapper: "space-y-24" }}>
      <PageHeader
        classNames={{
          title: "text-white",
          description: "text-white leading-[180%]",
          descriptionContainer: "space-y-8",
          root: "flex-col",
          wrapper: "gap-20",
          container:
            "bg-[url(/images/knowledge-base-bg.webp)] md:h-[900px] flex items-center justify-center",
        }}
        chipLabel="Knowledge base"
        title="The brain behind every conversation."
        description="Upload once. Answer everywhere. Your knowledge base trains SATE to deliver precise, on-brand responses while keeping your team aligned on every detail."
        cta={
          <Button
            size="sm"
            variant="outlined"
            className="px-12 py-4"
            endContent={<span className="stroke-black">{ArrowRightIcon}</span>}
          >
            Get started
          </Button>
        }
        endContent={
          <span className="relative w-full md:w-[600px] h-[500px] md:h-[400px]">
            <Image src="/images/kb-hero.webp" alt="kb-hero-img" fill />
          </span>
        }
      />

      <KBFunctionalities />

      {isMobile ? <KBFeaturesMobile /> : <KBFeatures />}
    </PageTemplate>
  );
};

export default KnowledgeBasePage;
