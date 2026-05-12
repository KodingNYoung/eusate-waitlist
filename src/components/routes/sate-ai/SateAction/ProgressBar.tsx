import { useEffect, useRef, useState } from "react";

const DURATION = 4000;

type ProgressBarProps = {
  active: boolean;
  onComplete: () => void;
};

export const ProgressBar = ({ active, onComplete }: ProgressBarProps) => {
  const [width, setWidth] = useState(0);

  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const completeRef = useRef(onComplete);

  completeRef.current = onComplete;

  useEffect(() => {
    if (!active) {
      setWidth(0);
      startRef.current = null;
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;

      const pct = Math.min(((ts - startRef.current) / DURATION) * 100, 100);

      setWidth(pct);

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        completeRef.current();
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

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
