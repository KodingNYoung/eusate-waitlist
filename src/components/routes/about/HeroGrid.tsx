import { MutedIcon, SpeakerIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import { defaultTransition } from "@/components/shared/organisms/AnimatedBlock";
import { fadeUpVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function GridLayout() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMuted = () => setMuted((curr) => !curr);

  return (
    <motion.div
      variants={fadeUpVariants}
      transition={defaultTransition}
      className="md:container w-full grid grid-cols-1 md:grid-cols-5 gap-4 px-4 md:h-[456px]"
    >
      {/* Left column */}
      <div className="hidden md:flex flex-row md:flex-col gap-4 h-48 md:h-auto">
        <div className="bg-black text-white rounded-3xl flex items-end p-5 relative h-full w-full">
          <div className="z-10 grid gap-3">
            <Typography as="h2" variant="bold-3xl">
              95%
            </Typography>
            <Typography as="p" variant="medium-lg" className="text-white/70">
              Tickets resolved faster
            </Typography>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            priority
            src="/about/images/about-img-1.webp"
            alt="team"
            fill
            className="rounded-3xl object-cover object-left"
          />
        </div>
      </div>

      {/* Middle large video */}
      <div className="md:col-span-2 relative group rounded-3xl overflow-hidden w-full">
        <button
          onClick={toggleMuted}
          className="bg-black/70 text-white w-7 h-7 p-1.5 flex items-center justify-center rounded-full absolute right-2.5 top-2.5 z-1"
        >
          {muted ? MutedIcon : SpeakerIcon}
        </button>
        <div
          className="w-full h-[240px] md:h-full"
          style={{ position: "relative" }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted={muted}
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/about/video/introduction.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Right column */}
      <div className="flex flex-row md:flex-col md:col-span-2 gap-4 h-48 md:h-auto">
        <div className="hidden md:block relative h-full w-full">
          <Image
            priority
            fill
            alt="startup"
            src="/about/images/about-img-2.webp"
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="flex gap-4 h-full w-full">
          <div className="bg-black text-white rounded-3xl flex items-end p-5 relative h-full w-full">
            <div className="z-10 w-[80%] grid gap-3">
              <Typography as="h2" variant="bold-3xl">
                24/7
              </Typography>
              <Typography
                as="p"
                variant="medium-lg"
                className="text-white/70 leading-[150%]"
              >
                AI customer support
              </Typography>
            </div>
          </div>
          <div className="md:hidden bg-black text-white rounded-3xl flex items-end p-8 relative h-full w-full">
            <div className="z-10">
              <Typography as="h2" variant="bold-3xl">
                10+
              </Typography>
              <Typography as="p" variant="medium-lg" className="text-white/70">
                Businesses
              </Typography>
            </div>
          </div>
          <div className="hidden md:block relative h-full w-full overflow-hidden rounded-3xl">
            <Image
              priority
              fill
              src="/about/images/about-img-3.webp"
              alt="success"
              className="rounded-3xl object-cover object-[right_bottom] scale-135"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
