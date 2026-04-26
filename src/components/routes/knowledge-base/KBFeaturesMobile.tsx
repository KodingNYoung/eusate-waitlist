import { Swiper, SwiperSlide } from "swiper/react";
import Typography from "@/components/shared/atoms/Typography";
import { Mousewheel } from "swiper/modules";
import { forwardRef } from "react";
import { KB_FEATURES } from "@/utils/constants";
import Image from "next/image";

import "swiper/css";

export const KBFeaturesMobile = () => {
  return (
    <section className="bg-black rounded-[20px] py-16 pl-8">
      <Swiper
        mousewheel
        slidesPerView={"auto"}
        spaceBetween={0}
        modules={[Mousewheel]}
      >
        {KB_FEATURES.map(({ id, panelSrc, title, description }) => (
          <SwiperSlide key={id}>
            <div className="flex flex-col gap-4">
              <span className="relative w-full h-[300px]">
                <Image alt={title} src={panelSrc} width={300} height={400} />
              </span>
              <Feature title={title} description={description} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

type FeatureProps = {
  title: string;
  description: string;
};

export const Feature = forwardRef<HTMLDivElement, FeatureProps>(
  ({ title, description }, ref) => {
    return (
      <div
        ref={ref}
        className="relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-full before:h-[2px] before:bg-gray-800"
      >
        <div className="-translate-y-[1px]">
          <div className="flex flex-col items-start gap-4 max-w-[500px]">
            <span className="w-4 h-4 bg-brand-gradient"></span>
            <div className="space-y-8 w-[80%]">
              <Typography
                variant="semibold-base"
                className="text-white leading-none"
              >
                {title}
              </Typography>
              <Typography
                variant="regular-sm"
                className="text-white/50 leading-[160%]"
              >
                {description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

Feature.displayName = "Feature";
