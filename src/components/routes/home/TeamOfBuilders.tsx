import Image from "next/image";
import { ArrowRightIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { SectionTemplate } from "@/components/shared/organisms/navbar/SectionTemplate";
import { ScrollReveal } from "@/components/shared/organisms/animata/text/scroll-reveal";

export const TeamOfBuilders = () => {
  return (
    <SectionTemplate classNames={{ wrapper: "relative space-y-22" }}>
      <SubHeader
        chipLabel="Team of builders"
        orientation="horizontal"
        title="Built by founders who lived the problem."
        classNames={{
          titleContainer: "w-[45%]",
          root: "w-full items-end justify-between",
        }}
        cta={
          <Button
            size="sm"
            className="px-6 py-4"
            endContent={<span className="stroke-white">{ArrowRightIcon}</span>}
          >
            Read about us
          </Button>
        }
      />

      <div className="flex justify-between">
        <div className="sticky top-[110px] w-[440px] h-[294px]">
          <Image
            src="/home/images/business-men.webp"
            fill
            className="object-cover rounded-x40"
            alt="business-men"
          />
        </div>
        <div className="w-[40%]">
          <ScrollReveal
            classNames={{ text: "text-semibold-3xl leading-[145%]" }}
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
