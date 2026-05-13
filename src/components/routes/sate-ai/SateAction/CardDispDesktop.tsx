import { useCallback, useState } from "react";
import { Card } from "./types";
import { FC } from "@/utils/types";
import { ActionCard } from "./CardItem";
import { ProgressBar } from "./ProgressBar";

type Props = {
  items: Card[];
};

export const CardDispDesktop: FC<Props> = ({ items }) => {
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
    <div className="hidden md:flex flex-col h-[400px] max-h-[440px] md:h-[420px] overflow-hidden gap-4">
      {items.map((card, i) => (
        <ActionCard
          key={i}
          card={card}
          isActive={i === current}
          onClick={() => jumpTo(i)}
          progressBar={
            <ProgressBar
              key={`${i}-${timerKey}`}
              active={i === current}
              onComplete={advance}
            />
          }
        />
      ))}
    </div>
  );
};
