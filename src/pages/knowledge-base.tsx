import Image from "next/image";
import { ArrowRightIcon } from "@/assets/icons";
import { KBFeatures } from "@/components/routes/knowledge-base/KBFeatures";
import { KBFunctionalities } from "@/components/routes/knowledge-base/KBFunctionalities";
import Button from "@/components/shared/molecules/Button";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { useMediaQuery } from "@/utils/hooks";
import { KBFeaturesMobile } from "@/components/routes/knowledge-base/KBFeaturesMobile";
import { BorderGradient } from "@/components/shared/organisms/BorderGradient";

const KnowledgeBasePage = () => {
  const isMobile = useMediaQuery();
  return (
    <PageTemplate
      hideGradient
      classNames={{ wrapper: "space-y-12 md:space-y-24" }}
    >
      <PageHeader
        classNames={{
          title: "text-white",
          titleContainer: "!space-y-10",
          description: "text-white leading-[180%]",
          descriptionContainer: "space-y-[46px]",
          root: "flex-col gap-y-6 md:gap-y-[46px]",
          wrapper: "gap-20",
          container:
            "bg-[url(/images/knowledge-base-bg.webp)] md:h-[90vh] flex items-end justify-center",
        }}
        chipLabel="Knowledge base"
        title="The brain behind every conversation."
        description="Upload once. Answer everywhere. Your knowledge base trains SATE to deliver precise, on-brand responses while keeping your team aligned on every detail."
        cta={
          <BorderGradient>
            <Button
              size="sm"
              variant="outlined"
              className="px-12 py-4 "
              endContent={
                <span className="stroke-black">{ArrowRightIcon}</span>
              }
            >
              Get started
            </Button>
          </BorderGradient>
        }
        endContent={
          <span className="relative w-full object-cover object-right md:w-full h-[660px] md:h-[60vh]">
            <Image
              src="/images/kb-hero.webp"
              className="hidden md:block"
              alt="kb-hero-img "
              fill
            />
            <Image
              src="/kb/images/kb-mobile-bg.webp"
              className="md:hidden"
              alt="kb-hero-img "
              fill
            />
          </span>
        }
      />

      <KBFunctionalities />

      {isMobile ? <KBFeaturesMobile /> : <KBFeatures />}
    </PageTemplate>
  );
};

export default KnowledgeBasePage;
