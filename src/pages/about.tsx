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

const AboutPage = () => {
  return (
    <PageTemplate
      gradientVariant="yellow"
      classNames={{ wrapper: "md:pt-[100px] w-full space-y-8" }}
    >
      <PageHeader
        position="center"
        chipLabel="About us"
        title="Our Story"
        classNames={{ container: "md:h-auto" }}
      />

      <SectionTemplate
        classNames={{
          container: cls(
            "md:container w-full flex flex-col items-center gap-y-4 md:gap-y-16 md:mb-48",
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
      </SectionTemplate>

      <SectionTemplate className="relative overflow-hidden mb-24">
        <BackgroundWatermark imgSrc="/images/about-mission-swatch.webp" />
        <div className="flex flex-wrap container relative justify-between gap-4 mt-8">
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
        {/* SWATCH */}
      </SectionTemplate>

      <SectionTemplate
        classNames={{ base: "bg-black p-20 rounded-x24 md:rounded-[40px]" }}
      >
        <MeetTeam />
      </SectionTemplate>
    </PageTemplate>
  );
};

export default AboutPage;
