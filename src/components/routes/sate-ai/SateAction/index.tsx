"use client";
import { useState } from "react";
import { CARDS } from "./const";
import { ActionCard } from "./CardItem";
import Image from "next/image";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { Card } from "./types";
import { FC } from "@/utils/types";

type Props = {
  title: string;
  chipLabel: string;
  items: Card[];
};

export const SateAction: FC<Props> = ({ title, chipLabel, items }) => {
  const [current, setCurrent] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const advance = () => {
    setCurrent((c) => (c + 1) % CARDS.length);
    setTimerKey((k) => k + 1);
  };

  const jumpTo = (i: number) => {
    setCurrent(i);
    setTimerKey((k) => k + 1);
  };

  return (
    <div className="relative overflow-hidden grid grid-cols-1 gap-4 md:grid-cols-2 items-start">
      <div className="order-1 flex flex-col gap-4">
        <SubHeader
          classNames={{
            container: "md:w-[60%]",
            title: "text-[32px]",
            titleContainer: "space-y-1",
          }}
          chipLabel={chipLabel}
          title={title}
        />
        <div className="flex flex-col h-full max-h-[440px] md:h-[420px] overflow-hidden gap-4">
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

      <div className="order-3 h-full md:order-2 bg-gold-100 rounded-[14.37px] pl-8 pt-8 md:p-8">
        {/* <PhoneFrame messages={CARDS[current].chat} /> */}
        <div className="relative w-[500px] md:w-full h-[430px] md:h-full">
          <Image
            alt={chipLabel}
            src={CARDS[current].imgSrc!}
            fill
            className="object-cover object-top md:object-contain"
          />
        </div>
      </div>
    </div>
  );
};
