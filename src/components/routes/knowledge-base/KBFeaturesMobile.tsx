import { Swiper, SwiperSlide } from "swiper/react";
import Typography from "@/components/shared/atoms/Typography";
import { Mousewheel, Navigation } from "swiper/modules";
import { forwardRef, useRef } from "react";
import { KB_FEATURES } from "@/utils/constants";
import Image from "next/image";
import Button from "@/components/shared/molecules/Button";
import { ArrowRightIcon } from "@/assets/icons";
import { cls } from "@/utils/helpers";

import "swiper/css";

export const KBFeaturesMobile = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <section className="bg-black rounded-[20px] py-16 pl-8 space-y-10">
      <Swiper
        onBeforeInit={(swiper) => {
          // @ts-expect-error: Clearing type error
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-expect-error: Clearing type error
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="mySwiper"
        mousewheel
        slidesPerView={"auto"}
        spaceBetween={0}
        modules={[Mousewheel, Navigation]}
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

      {/* NAVIGATON */}
      <div className="flex justify-between md:justify-start items-center gap-4 pr-8">
        <Button
          ref={prevRef}
          variant="text"
          className={cls(
            "px-4 py-2 transform !bg-white/20 stroke-gray-300 rotate-180",
          )}
        >
          {ArrowRightIcon}
        </Button>
        <Button
          ref={nextRef}
          variant="text"
          className={cls("px-4 py-2 bg-white/5 stroke-white")}
        >
          {ArrowRightIcon}
        </Button>
      </div>
    </section>
  );
};

// const Control = ({prevRef, nextRef}: {prevRef: RefObject<HTMLButtonElement | null>, nextRef: HTMLButtonElement | null}) => {
//   return (
//   );
// };

// Control.displayName = "Control";

type FeatureProps = {
  title: string;
  description: string;
};

const Feature = forwardRef<HTMLDivElement, FeatureProps>(
  ({ title, description }, ref) => {
    return (
      <div
        ref={ref}
        className="relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-full before:h-[2px] before:bg-gray-800"
      >
        <div className="-translate-y-[1px]">
          <div className="flex flex-col items-start gap-y-8 max-w-[500px]">
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
