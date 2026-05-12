import Image from "next/image";
import Button from "@/components/shared/molecules/Button";
import Typography from "@/components/shared/atoms/Typography";
import { ChatArea } from "./ChatArea";
import { SATE_FEATURES } from "../../sate-ai/utils";
import { SateFeatureCard } from "../../sate-ai/SateFeatureCard";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";

export const MeetSate = () => {
  return (
    <section className="hidden md:block bg-[url(/home/images/meet-sate-bg.webp)] bg-no-repeat bg-cover pt-16 pb-20 rounded-x40">
      <div className="container flex flex-col items-center gap-[56px]">
        <header className="flex flex-col items-center space-y-6 w-[90%] lg:w-[50%]">
          <div className="flex flex-col items-center relative">
            <div className="relative">
              <Image
                width={53}
                height={41}
                src="/logos/icon-white.svg"
                alt=""
                className="absolute z-2 object-contain inset-0 translate-x-[calc(65px-26.5px)] translate-y-[calc(65px-20.5px)]"
              />
              <div className="object-cover z-1 w-[130px] h-[130px] relative top-0 left-0 animate-spin-slow">
                <Image
                  src="/home/images/glow-ball.webp"
                  fill
                  alt=""
                  className=""
                />
              </div>
            </div>
            <Typography
              variant="bold-5xl"
              className="text-white text-center text-bold-4xl lg:text-bold-5xl"
            >
              Meet Sate. The AI agent that customers love
            </Typography>
          </div>
          <Link href={ROUTES.SATE_AI}>
            <Button size="sm" variant="outlined" className="py-4 px-12">
              Meet Sate
            </Button>
          </Link>
        </header>
        <div className="md:container bg-white/20 rounded-x24 py-6 px-2 space-y-4">
          <div className="flex gap-6 flex-wrap justify-center">
            {SATE_FEATURES.map(({ key, ...feature }) => (
              <SateFeatureCard className="bg-white/20" key={key} {...feature} />
            ))}
          </div>
          <ChatArea />
        </div>
      </div>
    </section>
  );
};
