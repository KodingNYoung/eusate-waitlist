import { TESTIMONIALS } from "@/utils/constants";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Direction, DURATION, TICK } from "./utils";
import { ProgressDots } from "./ProgressDots";
import { TestimonialSection } from "./Quote";
import { Stats } from "./Stats";
import { ImageAnimated } from "./ImageSection";
import { SectionTemplate } from "@/components/shared/organisms/PageTemplate";

export const Testimonials = () => {
  const [paused] = useState(false);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
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
    <SectionTemplate className="bg-red-100 max-w-screen overflow-hidden rounded-x20 md:rounded-x40 py-20">
      <div className="flex flex-wrap gap-x-20 justify-center items-center md:justify-between">
        <div className="space-y-6">
          <ProgressDots
            className="md:hidden justify-center"
            current={current}
            progress={progress}
            goTo={goTo}
          />
          <ImageAnimated direction={direction} t={t} />
        </div>

        <div className="flex-1 flex flex-col gap-y-[55px] justify-between p-6 md:p-8">
          <div className="md:space-y-8">
            <ProgressDots
              className="hidden md:flex"
              current={current}
              progress={progress}
              goTo={goTo}
            />
            <TestimonialSection
              current={current}
              t={t}
              direction={direction}
              prev={prev}
              next={next}
            />
          </div>
          <Stats t={t} direction={direction} />
        </div>
      </div>
    </SectionTemplate>
  );
};
