"use client";
import { useCallback, useState } from "react";
import { ActionCard } from "./CardItem";
import Image from "next/image";
import { Card } from "./types";
import { FC } from "@/utils/types";
import { SubHeader } from "@/components/shared/organisms/PageHeader";

type Props = {
  title: string;
  chipLabel: string;
  items: Card[];
};

export const SateAction: FC<Props> = ({ title, chipLabel, items }) => {
  const [current, setCurrent] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % items.length);
    setTimerKey((k) => k + 1);
  }, [items]);

  const jumpTo = useCallback((i: number) => {
    setCurrent(i);
    setTimerKey((k) => k + 1);
  }, []);

  return (
    <div className="relative overflow-hidden grid grid-rows-[auto_1fr_auto] grid-cols-1 xl:grid-rows-[auto_auto_1fr] xl:grid-cols-2 grid-flow-row xl:grid-flow-col gap-[52px] ">
      <SubHeader
        classNames={{
          container: "md:w-[80%] self-start order-1",
          title: "text-[32px] leading-[120%]",
        }}
        chipLabel={chipLabel}
        title={title}
      />

      {/* CARDS  */}
      <div className="order-3 md:order-2">
        <div className="flex flex-col  h-full max-h-[540px] md:h-[420px] overflow-hidden gap-4">
          {items.map((card, i) => (
            <ActionCard
              key={i}
              card={card}
              index={i}
              isActive={i === current}
              timerKey={timerKey}
              onClick={() => jumpTo(i)}
              onComplete={advance}
            />
          ))}
        </div>
      </div>

      <div className="order-2 row-span-2 w-full h-[323px] md:h-full flex justify-center items-center md:order-3 bg-gold-100 rounded-x24 p-8 md:p-2">
        {/* <PhoneFrame messages={CARDS[current].chat} /> */}
        {/* <div className="relative w-[500px] md:min-w-[326px] h-[430px] md:h-[540px]"> */}
        <div className="relative w-full md:scale-75 h-full">
          <Image
            alt={chipLabel}
            src={items[current].imgSrc!}
            fill
            className="object-contain object-top"
          />
        </div>
      </div>
    </div>
  );
};
