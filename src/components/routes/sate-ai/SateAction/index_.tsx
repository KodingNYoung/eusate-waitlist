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
    <div className="flex flex-wrap min-h-[460px] items-center justify-between gap-10 p-8 ">
      {/* Left: heading + cards */}
      <div className="flex flex-col gap-1">
        <SubHeader
          classNames={{
            container: "w-[60%]",
            title: "text-[32px]",
            titleContainer: "space-y-1",
          }}
          chipLabel="Sate in Action"
          title="Sate is actively engaged in various activities"
        />

        {/* Cards */}
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

      {/* Right: phone mockup */}
      <PhoneFrame messages={CARDS[current].chat} />
    </div>
  );
};
