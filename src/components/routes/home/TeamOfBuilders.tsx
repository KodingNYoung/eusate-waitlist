import Image from "next/image";
import { ArrowRightIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { SectionTemplate } from "@/components/shared/organisms/navbar/SectionTemplate";

const progress = 20;

export const TeamOfBuilders = () => {
  return (
    <SectionTemplate classNames={{ wrapper: "space-y-12" }}>
      <SubHeader
        chipLabel="Team of builders"
        orientation="horizontal"
        title="Built by founders who lived the problem."
        classNames={{ titleContainer: "w-[35%]" }}
        cta={
          <Button
            className="px-6 py-4"
            endContent={<span className="stroke-white">{ArrowRightIcon}</span>}
          >
            Read about us
          </Button>
        }
      />

      <div className="flex justify-between">
        <div className="relative w-[440px] h-[294px]">
          <Image src="/home/images/business-men.webp" fill className="object-cover rounded-x40" alt="business-men" />
        </div>
        <div className="w-[40%]">
          <Typography
            variant="semibold-3xl"
            className="bg-clip-text text-transparent leading-[145%] text-gray-200"
            style={{
              backgroundImage: `linear-gradient(to right, black ${progress * 100}%, #ccc ${progress * 100}%)`,
            }}
          >
            <span>
              Engineers, support veterans, AI researchers, we&apos;ve been in
              your shoes. We&apos;re not a faceless enterprise vendor.
              We&apos;re founders serving founders.Every startup hits the same
              wall: grow support or grow product. Pick one. We refused to
              choose. So we built Eusate, a platform that lets teams do both.
            </span>
            <span></span>
            We&apos;re; based in Akure, Nigeria, building for the global startup
            community. Our team has scaled support operations, shipped AI
            products, and felt the pain of 2am customer emergencies. We know
            this problem intimately because we lived it.
          </Typography>
        </div>
      </div>
    </SectionTemplate>
  );
};
