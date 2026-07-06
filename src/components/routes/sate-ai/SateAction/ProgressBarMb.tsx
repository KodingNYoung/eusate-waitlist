import { useEffect, useState } from "react";

type ProgressBarProps = {
  active: boolean;
  progress: number;
  duration: number;
};

export const ProgressBar = ({ active, progress, duration }: ProgressBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!active) {
      setWidth(0);
      return;
    }
setWidth(Math.min(((duration - progress) / duration) * 100, 100));
  }, [active, progress, duration]);

  if (!active) return null;

  return (
    <div className="h-[3px] overflow-hidden rounded-full bg-[#e8e2d8]">
      <div
        className="h-full rounded-full bg-brand-gradient transition-none"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};
