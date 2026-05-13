import { Card } from "./types";
import { useRef, useState } from "react";
import { FC } from "@/utils/types";
import { cls } from "@/utils/helpers";
import { ActionCard } from "./CardItem";
import { ArrowRightIcon } from "@/assets/icons";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@/components/shared/molecules/Button";

const DURATION = 4000;

import "swiper/css";
import { Swiper as SwiperTypes } from "swiper/types";
import { ProgressBar } from "./ProgressBarMb";

type Props = {
  items: Card[];
};

export const CardDispMobile: FC<Props> = ({ items }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const onAutoplayTimeLeft = (s: SwiperTypes, progress: number) => {
    setCurrent(s.activeIndex);
    setProgress(progress);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex h-[159px] w-full">
        <Swiper
          centeredSlides
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
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
          autoplay={{
            delay: DURATION,
            disableOnInteraction: false,
          }}
          mousewheel
          spaceBetween={0}
          modules={[Autoplay, Navigation]}
        >
          {items.map((card, i) => (
            <SwiperSlide key={card.num}>
              <div className="w-full">
                <ActionCard
                  key={i}
                  card={card}
                  isActive={i === current}
                  progressBar={
                    <ProgressBar active={i === current} progress={progress} duration={DURATION}/>
                  }
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex w-full h-full justify-between items-center">
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
          className={cls("px-4 py-2 !bg-black stroke-white")}
        >
          {ArrowRightIcon}
        </Button>
      </div>
    </div>
  );
};
