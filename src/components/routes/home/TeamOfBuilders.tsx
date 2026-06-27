import Image from "next/image";
import { ArrowRightIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { SectionTemplate } from "@/components/shared/organisms/navbar/SectionTemplate";
import { ScrollReveal } from "@/components/shared/organisms/animata/text/scroll-reveal";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";

export const TeamOfBuilders = () => {
  return (
    <SectionTemplate
      classNames={{ wrapper: "relative space-y-10 md:space-y-22" }}
    >
      <SubHeader
        chipLabel="Team of builders"
        orientation="horizontal"
        title="Built by founders who lived the problem."
        classNames={{
          titleContainer: "w-full space-y-4 md:w-[45%]",
          root: "w-full flex flex-col md:flex-row space-y-6 md:space-y-0 items-start md:items-end md:justify-between",
        }}
        cta={
          <Link href={ROUTES.ABOUT}>
            <Button
              size="sm"
              className="py-2.5 px-4.5 md:px-6 md:py-4"
              endContent={
                <span className="stroke-white">{ArrowRightIcon}</span>
              }
            >
              Read about us
            </Button>
          </Link>
        }
      />

      <div className="flex flex-wrap justify-between gap-10 w-full">
        <AnimatedBlock
          variants={fadeVariants}
          className="relative md:sticky md:top-[110px] w-full md:w-[440px] h-[294px]"
        >
          <Image
            src="/about/images/about-img-2.webp"
            fill
            className="object-cover rounded-x40"
            alt="business-men"
          />
        </AnimatedBlock>
        <div className="w-full md:max-w-[519px]">
          <ScrollReveal
            offset={{ start: "70%" }}
            classNames={{
              text: "text-semibold-xl md:text-semibold-3xl md:leading-[155%]",
            }}
            text={[
              "Engineers, support veterans, AI researchers, we've been in your shoes. We're not a faceless enterprise vendor. We're founders serving founders.Every startup hits the same wall: grow support or grow product. Pick one. We refused to choose. So we built Eusate, a platform that lets teams do both.",
              "We're; based in Akure, Nigeria, building for the global startup community. Our team has scaled support operations, shipped AI products, and felt the pain of 2am customer emergencies. We know this problem intimately because we lived it.",
            ]}
          />
        </div>
      </div>
    </SectionTemplate>
  );
};
