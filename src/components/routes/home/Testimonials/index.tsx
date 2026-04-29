import { TESTIMONIALS } from "@/utils/constants";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Direction, DURATION, TICK } from "./utils";
import { ProgressDots } from "./ProgressDots";
import { TestimonialSection } from "./Quote";
import { Stats } from "./Stats";
import { ImageAnimated } from "./ImageSection";

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [paused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const testimonialLength = useMemo(() => TESTIMONIALS.length, []);

  const goTo = useCallback((idx: number, dir: Direction = 1) => {
    setDirection(dir);
    setCurrent(idx);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % TESTIMONIALS.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonialLength) % testimonialLength, -1);
  }, [current, goTo, testimonialLength]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + (TICK / DURATION) * 100;
      });
    }, TICK);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next, current]);

  const t = useMemo(() => TESTIMONIALS[current], [current]);

  return (
    <section className="bg-red-100 rounded-x40">
      <div
        className="container p-8"
        // onMouseEnter={() => setPaused(true)}
        // onMouseLeave={() => setPaused(false)}
      >
        <div className="flex justify-center">
          <ImageAnimated direction={direction} t={t} />

          <div className="flex-1 flex flex-col justify-between p-6 md:p-8">
            <ProgressDots current={current} progress={progress} goTo={goTo} />
            <TestimonialSection
              current={current}
              t={t}
              direction={direction}
              prev={prev}
              next={next}
            />
            <Stats t={t} direction={direction} />
          </div>
        </div>
      </div>
    </section>
  );
};
