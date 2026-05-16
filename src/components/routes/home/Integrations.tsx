import Image from "next/image";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { blurVariants } from "@/components/shared/organisms/AnimatedBlock/variants";

export const HomeIntegrations = () => {
  return (
    <section className="md:container max-w-screen overflow-hidden py-[250px]">
      <div className="flex relative mx-auto justify-center items-center py-88 w-full md:w-[50%] space-y-4">
        <AnimatedBlock
          variants={blurVariants}
          duration={1}
          className="absolute inset-0"
        >
          <div className="absolute left-0 top-0 -translate-x-[2rem] -translate-y-[9rem] md:-translate-x-[12rem] md:-translate-y-[2rem]">
            <Image
              width={200}
              height={200}
              className="left-0"
              src="/images/livechat-integration.webp"
              alt=""
            />
          </div>
          <div className="absolute right-0 top-0 translate-x-[2rem] -translate-y-[9rem] md:translate-x-[12rem] md:-translate-y-[2rem]">
            <Image
              width={200}
              height={200}
              className="left-0"
              src="/images/discord-integration.webp"
              alt=""
            />
          </div>
          <div className="absolute left-0 bottom-0 translate-y-[9rem] -translate-x-[2rem] md:-translate-x-[12rem] md:translate-y-[2rem]">
            <Image
              width={200}
              height={200}
              className="left-0"
              src="/images/whatsapp-integration.webp"
              alt=""
            />
          </div>
          <div className="absolute right-0 bottom-0 translate-x-[2rem] translate-y-[9rem] md:translate-x-[12rem] md:translate-y-[2rem]">
            <Image
              width={200}
              height={200}
              className="left-0"
              src="/images/mail-integration.webp"
              alt=""
            />
          </div>
        </AnimatedBlock>
        <div className="relative z-2 flex flex-col items-center justify-center gap-y-6 w-[70%] md:w-full">
          <Typography
            className="text-center text-bold-3xl md:text-bold-5xl leading-[120%]"
            as="h1"
          >
            Because Great Support Starts with{" "}
            <span className="text-gradient">Great Tool</span>
          </Typography>
          <Typography
            className="text-gray-400 text-medium-base text-medium-lg leading-[150%] text-center"
            as="p"
          >
            Eusate connects to the tools and platforms your customers already
            use. No channel chaos. No context switching. Just seamless support
            everywhere.
          </Typography>
          <Link href={ROUTES.INTEGRATIONS}>
            <Button className="py-4 px-10">View our integrations</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
