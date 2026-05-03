import Typography from "@/components/shared/atoms/Typography";
import { KB_FEATURES } from "@/utils/constants";
import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

export const KBFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIndex(i);
          });
        },
        { threshold: 1, rootMargin: "-10% 0px -40% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return (
    <section className="bg-black rounded-[40px]">
      <div className="flex container justify-between items-start">
        <div className="flex-1 min-w-0 pb-24">
          {KB_FEATURES.map(({ id, ...feature }) => (
            <Feature
              ref={(el) => {
                sectionRefs.current[id] = el;
              }}
              key={id}
              {...feature}
            />
          ))}
        </div>

        <div className="w-[50%] shrink-0 pt-8 sticky top-[100px] ">
          <div className="bg-neutral-900 rounded-2xl min-h-[580px] relative overflow-hidden">
            {KB_FEATURES.map(({ id, panelSrc }) => (
              <div
                key={id}
                ref={(el) => {
                  panelRefs.current[id] = el;
                }}
                className={`absolute inset-7 flex items-center justify-center transition-all duration-500 ${
                  activeIndex === id
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <span className="relative w-[700px] h-[500px]">
                  <Image alt="kb-feature-1" src={panelSrc} fill />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type FeatureProps = {
  title: string;
  description: string;
};

export const Feature = forwardRef<HTMLDivElement, FeatureProps>(
  ({ title, description }, ref) => {
    return (
      <div
        ref={ref}
        className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-gray-800"
      >
        <div className="space-y-[240px] -translate-x-[8px] pt-36">
          <div className="flex items-start gap-4 max-w-[500px]">
            <span className="w-24 h-4 bg-brand-gradient"></span>
            <div className="space-y-8">
              <Typography
                variant="semibold-base"
                className="text-white leading-none"
              >
                {title}
              </Typography>
              <Typography variant="regular-sm" className="text-white/50">
                {description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

Feature.displayName = "Feature";
