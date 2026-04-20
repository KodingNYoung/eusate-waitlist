import Image from "next/image";
import Button from "@/components/shared/molecules/Button";
import Typography from "@/components/shared/atoms/Typography";
import { ChatArea } from "./ChatArea";
import { SATE_FEATURES } from "../../sate-ai/utils";
import { SateFeatureCard } from "../../sate-ai/SateFeatureCard";

export const MeetSate = () => {
  return (
    <section className="bg-[url(/home/images/meet-sate-bg.webp)] py-20 mx-4">
      <div className="container flex flex-col items-center gap-8">
        <header className="flex flex-col items-center space-y-4 w-[50%]">
          <div className="p-4 rounded-full bg-brand-gradient">
            <Image width={50} height={50} src="/logos/icon-white.webp" alt="" />
          </div>
          <Typography variant="bold-5xl" className="text-white text-center">
            Meet Sate. The AI agent that customers love
          </Typography>
          <Button size="sm" variant="outlined" className="py-4 px-12">
            Meet Sate
          </Button>
        </header>
        <div className="bg-white/20 rounded-x24 p-6 space-y-4">
          <div className="flex gap-6 flex-wrap justify-center">
            {SATE_FEATURES.map(({ id, ...feature }) => (
              <SateFeatureCard key={id} {...feature} />
            ))}
          </div>
          <ChatArea />
        </div>
      </div>
    </section>
  );
};
