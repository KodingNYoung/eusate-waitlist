import {
  PageSection,
  PageTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { cls } from "@/utils/helpers";
import { MissionIcon, TelescopeIcon } from "@/assets/icons";
import GridLayout from "@/components/routes/about/HeroGrid";
import { MeetTeam } from "@/components/routes/about/MeetTeam";
import Typography from "@/components/shared/atoms/Typography";
import { VisionCard } from "@/components/routes/about/VisionCard";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { BackgroundWatermark } from "@/components/shared/organisms/DecorativeGraphic";
import { useMediaQuery } from "@/utils/hooks";
import { GridImageMobile } from "@/components/routes/about/GridImageMobile";
import { PageHero } from "@/components/shared/organisms/PageHero";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import MetaProps from "@/components/shared/molecules/MetaProps";

const AboutPage = () => {
  const isMobile = useMediaQuery();
  return (
    <PageTemplate
      gradientVariant="yellow"
      classNames={{ wrapper: "w-full pb-12" }}
    >
      <MetaProps
        title="About Eusate | AI-Powered Customer Support"
        description="Learn how Eusate is redefining customer support with AI, helping businesses deliver faster, smarter, and more human customer experiences."
        path="/about"
        jsonLdData={{ type: "software" }}
      />
      <PageHero classNames={{ wrapper: "px-5" }}>
        <AnimatedBlock variants={fadeVariants}>
          <PageHeader
            title="Our Story"
            chipLabel="About us"
            position={isMobile ? "left" : "center"}
            classNames={{
              container: "md:h-auto !py-0 mt-20 md:mt-24 mb-12 md:mb-20",
              root: "flex-col space-y-4",
              description: "md:hidden text-medium-sm text-gray-600",
            }}
          />
        </AnimatedBlock>
      </PageHero>

      <PageSection
        classNames={{
          container: cls(
            "w-full !flex !flex-col items-center gap-y-4 md:gap-y-20 md:mb-40",
          ),
        }}
      >
        <AnimatedBlock variants={fadeVariants} className="w-full">
          <GridLayout />
        </AnimatedBlock>

        <AnimatedBlock variants={fadeVariants} delay={0.2}>
          <div className="container w-full md:w-[80%] space-y-8">
            <Typography className="text-medium-base md:text-regular-xl md:text-center text-gray-700 leading-[180%]">
              Engineers, support veterans, AI researchers, we&apos;ve been in
              your shoes. We&apos;re not a faceless enterprise vendor.
              We&apos;re founders serving founders. Every startup hits the same
              wall: grow support or grow product. Pick one. We refused to
              choose. So we built Eusate, a platform that lets teams do both.
            </Typography>
            <Typography className="text-medium-base md:text-regular-xl md:text-center text-gray-700 leading-[180%]">
              We&apos;re based in Akure, Nigeria, building for the global
              startup community. Our team has scaled support operations, shipped
              AI products, and felt the pain of 2am customer emergencies. We
              know this problem intimately because we lived it.
            </Typography>
          </div>
        </AnimatedBlock>

        {/* FOR MOBILE ONLY */}
        <GridImageMobile />
      </PageSection>

      <PageSection className="relative overflow-hidden mb-24">
        <BackgroundWatermark imgSrc="/images/about-mission-swatch.webp" />
        <div className="flex flex-wrap container relative md:justify-center lg:justify-between gap-4 mt-8">
          <VisionCard
            icon={TelescopeIcon}
            title="Our Vision"
            content="A world where every customer interaction with AI builds trust instead of frustration. We see a future where technology no longer feels like a barrier between businesses and the people they serve, but a bridge that helps customers feel heard the moment they reach out, and allows businesses to deliver care at any scale without losing the human warmth that earned their customers in the first place."
          />
          <VisionCard
            icon={MissionIcon}
            title="Our Mission"
            animationDelay={2}
            content="To build culturally empathetic AI customer support that speaks every user's language, understands their context, and works alongside businesses like a trusted partner. We make enterprise-grade service accessible to startups and the customers they serve, creating intelligence that goes beyond translation to grasp the nuance, emotion, and cultural meaning behind every conversation."
          />
        </div>
      </PageSection>

      <PageSection
        classNames={{
          base: "bg-black py-8 md:py-20 rounded-x24 md:rounded-[40px]",
        }}
      >
        <MeetTeam />
      </PageSection>
    </PageTemplate>
  );
};

export default AboutPage;
