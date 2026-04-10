
import Image from "next/image";
import { ArrowRightIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import { PageHeader } from "@/components/shared/organisms/PageHeader";

export const Hero = () => {
  return (
    <PageHeader
      position="center"
      chipLabel="10 Customers 10X CX team"
      extraContent={
        <div className="flex-none w-[1400px] h-[1000px] relative z-2">
          <Image
            fill
            alt="home-hero-img"
            src="/images/helpdesk-hero.webp"
          />
        </div>
      }
      startContent={
        <div>
          <div className="absolute z-1 inset-0 bg-black/80" />
          <div className="absolute w-[1400px] h-[83px] top-0"><Image src="/images/home-bg-decor.webp" fill alt="home-hero-decor" /></div>
        </div>
      }
      actionBtn={
        <Button
          className="bg-brand-gradient px-12 py-4"
          endContent={
            <span className="stroke-white">{ArrowRightIcon}</span>
          }
        >
          Sign up
        </Button>
      }
      title={
        <div>
          <Typography
            variant="bold-4xl"
            className="line-through text-center text-white/40"
          >
            Stop Responding
          </Typography>
          <Typography variant="bold-6xl" className="text-white text-center">
            Start Resolving
          </Typography>
        </div>
      }
      description="Eusate is the AI customer service partner, merging AI with over 80% resolution on routine queries and advanced helpdesk tools to enhance user experience."
      classNames={{
        wrapper: "pt-20 space-y-8",
        root: "z-2 flex-none w-[40%]",
        container: "bg-[url(/images/home-bg.webp)] relative h-screen flex items-start overflow-hidden",
        description: "text-white/60 leading-[150%]",
      }}
    />
  )
}

