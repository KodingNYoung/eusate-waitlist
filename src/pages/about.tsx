import { cls } from "@/utils/helpers";
import { MissionIcon, TelescopeIcon } from "@/assets/icons";
import GridLayout from "@/components/routes/about/HeroGrid";
import { MeetTeam } from "@/components/routes/about/MeetTeam";
import Typography from "@/components/shared/atoms/Typography";
import { VisionCard } from "@/components/routes/about/VisionCard";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import {
  PageTemplate,
  SectionTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { BackgroundWatermark } from "@/components/shared/organisms/DecorativeGraphic";
import { useMediaQuery } from "@/utils/hooks";
import { GridImageMobile } from "@/components/routes/about/GridImageMobile";

const AboutPage = () => {
  const isMobile = useMediaQuery();
  return (
    <PageTemplate
      gradientVariant="yellow"
      classNames={{ wrapper: "md:pt-[100px] w-full" }}
    >
      <PageHeader
        title="Our Story"
        chipLabel="About us"
        description="Last updated: 12/12/2026"
        position={isMobile ? "left" : "center"}
        classNames={{
          container: "md:h-auto !py-0 mt-24 mb-20",
          root: "flex-col space-y-4",
          description: "md:hidden text-medium-sm text-gray-600",
        }}
      />

      <SectionTemplate
        classNames={{
          container: cls(
            "md:container w-full flex flex-col items-center gap-y-4 md:gap-y-20 md:mb-40",
          ),
        }}
      >
        <GridLayout />

        <div className="container w-full md:w-[80%] space-y-8">
          <Typography className="text-medium-base md:text-regular-xl md:text-center text-gray-700 leading-[180%]">
            {" "}
            Engineers, support veterans, AI researchers, we&apos;ve been in your
            shoes. We&apos;re not a faceless enterprise vendor. We&apos;re
            founders serving founders.Every startup hits the same wall: grow
            support or grow product. Pick one. We refused to choose. So we built
            Eusate, a platform that lets teams do both.{" "}
          </Typography>{" "}
          <Typography className="text-medium-base md:text-regular-xl md:text-center text-gray-700 leading-[180%]">
            {" "}
            We&apos;re based in Akure, Nigeria, building for the global startup
            community. Our team has scaled support operations, shipped AI
            products, and felt the pain of 2am customer emergencies. We know
            this problem intimately because we lived it.
          </Typography>
        </div>

        {/* FOR MOBILE ONLY */}
        <GridImageMobile />
      </SectionTemplate>

      <SectionTemplate className="relative overflow-hidden mb-24">
        <BackgroundWatermark imgSrc="/images/about-mission-swatch.webp" />
        <div className="flex flex-wrap container relative md:justify-center lg:justify-between gap-4 mt-8">
          <VisionCard
            icon={TelescopeIcon}
            title="Our Vision"
            content="Engineers, support veterans, AI researchers, we've been in your shoes. We're not a faceless enterprise vendor. We're founders serving founders.Every startup hits the same wall: grow support or grow product. Pick one.
We refused to choose. So we built Eusate, a platform that lets teams do both."
          />
          <VisionCard
            icon={MissionIcon}
            title="Our Mission"
            content="Engineers, support veterans, AI researchers, we've been in your shoes. We're not a faceless enterprise vendor. We're founders serving founders.Every startup hits the same wall: grow support or grow product. Pick one.
We refused to choose. So we built Eusate, a platform that lets teams do both."
          />
        </div>
      </SectionTemplate>

      <SectionTemplate
        classNames={{
          base: "bg-black py-8 md:p-20 rounded-x24 md:rounded-[40px]",
        }}
      >
        <MeetTeam />
      </SectionTemplate>
    </PageTemplate>
  );
};

export default AboutPage;
