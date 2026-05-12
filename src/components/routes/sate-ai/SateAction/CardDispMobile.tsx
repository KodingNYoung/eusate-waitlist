import { Card } from "./types";
import { useRef } from "react";
import { FC } from "@/utils/types";
import { cls } from "@/utils/helpers";
import { ActionCard } from "./CardItem";
import { ArrowRightIcon } from "@/assets/icons";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@/components/shared/molecules/Button";

import "swiper/css";

type Props = {
  items: Card[];
  current: number;
  timerKey: number;
  setCurrent: (c: number) => void;
  advance: () => void;
  jumpTo: (i: number) => void;
};

export const CardDispMobile: FC<Props> = ({
  items,
  current,
  timerKey,
  setCurrent,
  advance,
}) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

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
          className="mySwiper"
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
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
                  index={i}
                  isActive={i === current}
                  timerKey={timerKey}
                  onComplete={advance}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex w-full h-full justify-between items-center">
        <Button
          onClick={() => setCurrent(current > 0 ? current - 1 : current)}
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
          onClick={() => setCurrent(current < 3 ? current + 1 : current)}
          className={cls("px-4 py-2 !bg-black stroke-white")}
        >
          {ArrowRightIcon}
        </Button>
      </div>
    </div>
  );
};
