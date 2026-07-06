import { Card } from "./types";
import { FC } from "@/utils/types";
import { ActionCard } from "./CardItem";
import { ProgressBar } from "./ProgressBar";

type Props = {
  items: Card[];
  current: number;
  jumpTo: (i: number) => void;
  timerKey: number;
  advance: () => void;
};

export const CardDispDesktop: FC<Props> = ({
  items,
  current,
  timerKey,
  jumpTo,
  advance,
}) => {
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
