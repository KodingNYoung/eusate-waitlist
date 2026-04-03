import { MissionIcon, TelescopeIcon } from "@/assets/icons";
import GridLayout from "@/components/routes/about/HeroGrid";
import { MeetTeam } from "@/components/routes/about/MeetTeam";
import Typography from "@/components/shared/atoms/Typography";
import { VisionCard } from "@/components/routes/about/VisionCard";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { BackgroundWatermark } from "@/components/shared/organisms/DecorativeGraphic";

const AboutPage = () => {
  return (
    <PageTemplate gradientVariant="yellow">
      <div className="w-full space-y-12 py-12">
        <section className="container space-y-12">
          <PageHeader
            position="center"
            chipLabel="About us"
            title="Our Story"
          />
          <GridLayout />
        </section>

        <section className="container w-full flex flex-col items-center">
          <div className="w-[80%] space-y-8">
            <Typography
              variant="regular-xl"
              className="text-center text-gray-700"
            >
              {" "}
              Engineers, support veterans, AI researchers, we&apos;ve been in
              your shoes. We&apos;re not a faceless enterprise vendor.
              We&apos;re founders serving founders.Every startup hits the same
              wall: grow support or grow product. Pick one. We refused to
              choose. So we built Eusate, a platform that lets teams do
              both.{" "}
            </Typography>{" "}
            <Typography
              variant="regular-xl"
              className="text-center text-gray-700"
            >
              {" "}
              We&apos;re based in Akure, Nigeria, building for the global
              startup community. Our team has scaled support operations,
              shipped AI products, and felt the pain of 2am customer
              emergencies. We know this problem intimately because we lived
              it.
            </Typography>
          </div>
        </section>


        <BackgroundWatermark imgSrc="/images/about-mission-swatch.webp" />
        <section className="flex container relative justify-between gap-4 mt-8">
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
          {/* SWATCH */}
        </section>

        <MeetTeam />

      </div>
    </PageTemplate>
  );
};

export default AboutPage;
