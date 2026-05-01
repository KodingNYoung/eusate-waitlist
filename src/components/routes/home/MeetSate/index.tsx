import Image from "next/image";
import Button from "@/components/shared/molecules/Button";
import Typography from "@/components/shared/atoms/Typography";
import { ChatArea } from "./ChatArea";
import { SATE_FEATURES } from "../../sate-ai/utils";
import { SateFeatureCard } from "../../sate-ai/SateFeatureCard";

export const MeetSate = () => {
  return (
    <section className="hidden md:block bg-[url(/home/images/meet-sate-bg.webp)] bg-contain pt-16 pb-20 rounded-x40">
      <div className="container flex flex-col items-center gap-8">
        <header className="flex flex-col items-center space-y-6 w-[50%]">
          <div className="flex flex-col gap-4 items-center relative">
            <div>
              <Image
                width={120}
                height={120}
                src="/logos/glow-logo.webp"
                alt=""
                className="object-contain animate-spin-slow"
              />
            </div>
            <Typography variant="bold-5xl" className="text-white text-center">
              Meet Sate. The AI agent that customers love
            </Typography>
          </div>
          <Button size="sm" variant="outlined" className="py-4 px-12">
            Meet Sate
          </Button>
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
