import { FC } from "@/utils/types";
import { Autoplay, Navigation } from "swiper/modules";
import { Card } from "./types";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { ActionCard } from "./CardItem";
import Button from "@/components/shared/molecules/Button";
import { cls } from "@/utils/helpers";
import { ArrowRightIcon } from "@/assets/icons";

import "swiper/css";

type Props = {
  items: Card[];
  current: number;
  timerKey: number;
  jumpTo: (i: number) => void;
  advance: () => void;
};

export const CardDispMobile: FC<Props> = ({
  items,
  current,
  timerKey,
  jumpTo,
  advance,
}) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="flex flex-col md:hidden">
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
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        mousewheel
        spaceBetween={0}
        modules={[Autoplay, Navigation]}
      >
        {items.map((card, i) => (
          <SwiperSlide key={card.num}>
            <div className="border w-[50%]">
              <ActionCard
                key={i}
                card={card}
                index={i}
                isActive={i === current}
                timerKey={timerKey}
                onClick={() => jumpTo(i)}
                onComplete={advance}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
    </div>
  );
};
