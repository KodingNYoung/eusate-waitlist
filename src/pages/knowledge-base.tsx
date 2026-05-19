import Image from "next/image";
import { ArrowRightIcon } from "@/assets/icons";
import { KBFeatures } from "@/components/routes/knowledge-base/KBFeatures";
import { KBFunctionalities } from "@/components/routes/knowledge-base/KBFunctionalities";
import Button from "@/components/shared/molecules/Button";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { BorderGradient } from "@/components/shared/organisms/BorderGradient";
import { PageHero } from "@/components/shared/organisms/PageHero";
import { ROUTES } from "@/utils/constants";
import Link from "next/link";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import { GradientIcon } from "@/components/shared/atoms/Icon";

const KnowledgeBasePage = () => {
  return (
    <PageTemplate
      hideGradient
      classNames={{ wrapper: "space-y-12 md:space-y-24" }}
    >
      <PageHero
        classNames={{
          base: "bg-[url(/images/knowledge-base-bg.webp)] bg-center h-full md:h-[800px] flex items-start justify-center md:pb-20 pt-20 px-5",
          container: "flex items-end h-full",
        }}
      >
        <AnimatedBlock variants={fadeVariants} duration={3}>
          <PageHeader
            classNames={{
              title: "text-white",
              titleContainer: "gap-y-10",
              description: "text-white leading-[180%]",
              descriptionContainer: "space-y-[46px]",
              root: "flex-col gap-y-6 md:gap-y-[46px] py-10 md:py-0",
              wrapper: "gap-x-12 !flex-col md:!flex-row",
            }}
            chipLabel="Knowledge base"
            title="The brain behind every conversation."
            description="Upload once. Answer everywhere. Your knowledge base trains SATE to deliver precise, on-brand responses while keeping your team aligned on every detail."
            cta={
              <BorderGradient>
                <Link
                  href={
                    process.env.NEXT_PUBLIC_BASE_URL + ROUTES.KNOWLEDGE_BASE
                  }
                >
                  <Button
                    size="sm"
                    variant="outlined"
                    className="px-12 py-4 group"
                    endContent={<GradientIcon>{ArrowRightIcon}</GradientIcon>}
                  >
                    Get started
                  </Button>
                </Link>
              </BorderGradient>
            }
            endContent={
              <div className="relative w-full h-full">
                <div className="hidden lg:flex relative w-[520px] h-[560px]">
                  <Image
                    fill
                    priority
                    src="/images/kb-hero.webp"
                    className="object-contain object-center"
                    alt="kb-hero-img "
                  />
                </div>
                <div className="md:hidden relative w-full h-[calc(660px_+_100vw_-_337px)]">
                  <Image
                    fill
                    priority
                    src="/kb/images/kb-mobile-bg.webp"
                    className="object-contain object-top"
                    alt="kb-hero-img"
                  />
                </div>
              </div>
            }
          />
        </AnimatedBlock>
      </PageHero>
      <KBFunctionalities />
      <KBFeatures />
    </PageTemplate>
  );
};

export default KnowledgeBasePage;
