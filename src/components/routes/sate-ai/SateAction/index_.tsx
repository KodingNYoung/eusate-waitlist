"use client";
import { useState } from "react";
import { CARDS } from "./const";
import { PhoneFrame } from "./PhoneFrame";
import { CardItem } from "./CardItem";
import { SubHeader } from "@/components/shared/organisms/PageHeader";

export const SateAction = () => {
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-start">
      {/* Left column: header + cards */}
      <div className="order-1 flex flex-col gap-4">
        <SubHeader
          classNames={{
            container: "md:w-[60%]",
            title: "text-[32px]",
            titleContainer: "space-y-1",
          }}
          chipLabel="Sate in Action"
          title="Sate is actively engaged in various activities"
        />
        <div className="flex flex-col gap-4">
          {CARDS.map((card, i) => (
            <CardItem
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

      {/* Phone: last on mobile, right column on desktop */}
      <div className="order-3 md:order-2 bg-gold-100 rounded-[14.37px] p-8">
        <PhoneFrame messages={CARDS[current].chat} />
      </div>
    </div>
  );
};
