import Image from "next/image";
import { ArrowRightIcon, NotEqualIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import { ParallaxHero } from "@/components/shared/organisms/ParallaxHero";

export const Hero = () => {
  return (
    <ParallaxHero
      chipLabel={
        <Typography className="flex gap-4 items-center text-medium-sm md:text-medium-lg leading-[150%] text-white/80">
          10 Customers <span>{NotEqualIcon}</span> 10X CX team
        </Typography>
      }
      classNames={{
        container:
          "bg-[url(/images/home-bg.webp)] relative md:h-[90vh] flex items-start overflow-hidden",
        description: "text-white/60 leading-[150%] text-left md:text-center",
        descriptionContainer: "items-start md:items-center",
        wrapper: "md:pt-6 pt-0",
        title: "text-left md:text-center",
        chip: "bg-transparent bg-[linear-gradient(90deg,_rgba(215,171,7,0.3)_0%,_rgba(232,101,85,0.3)_100%)] backdrop-blur-3xl text-white ",
      }}
      imgSrc="/images/helpdesk-hero.webp"
      startContent={
        <div className="">
          <div className="absolute z-1 inset-0 bg-black/60" />
          <div className="absolute w-full h-[40px] z-2 left-0 bottom-0">
            <Image
              src="/images/home-bg-decor.webp"
              fill
              alt="home-hero-decor"
            />
          </div>
        </div>
      }
      cta={
        <Button
          size="sm"
          className="bg-brand-gradient px-12 py-2.5 md:py-4 w-full md:w-auto"
          endContent={<span className="stroke-white">{ArrowRightIcon}</span>}
        >
          Sign up
        </Button>
      }
      title={
        <div className="space-y-2">
          <Typography
            variant="bold-4xl"
            className="line-through text-bold-2xl md:text-bold-4xl text-left md:text-center text-white/40"
          >
            Stop Responding
          </Typography>
          <Typography
            variant="bold-6xl"
            className="text-bold-6xl text-white text-left md:text-center"
          >
            Start Resolving
          </Typography>
        </div>
      }
      description="Eusate is the AI customer service partner, merging AI with over 80% resolution on routine queries and advanced helpdesk tools to enhance user experience."
    />
  );
};
