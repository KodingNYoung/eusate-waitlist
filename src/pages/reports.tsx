import Image from "next/image";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { REPORTS_FEATURES } from "@/utils/constants";
import { ReportCard } from "@/components/routes/reports/ReportCard";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PageHero } from "@/components/shared/organisms/PageHero";

const Reports = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -620]);

  return (
    <PageTemplate classNames={{ wrapper: "md:space-y-24" }}>
      <PageHero
        ref={headerRef}
        classNames={{
          base: "overflow-hidden bg-[url(/images/reports-bg.webp)] flex justify-center items-end h-[70vh] md:h-[800px] !px-5 !py-12",
        }}
      >
        <PageHeader
          chipLabel="Reports"
          orientation="horizontal"
          title="Know what, Understand why."
          classNames={{
            wrapper: "relative",
            root: "z-3 md:container w-[90%] justify-between !space-y-10",
            container: "",
            title: "text-white",
            description: "text-white",
            titleContainer: "w-full md:w-[60%]",
            descriptionContainer: "w-full md:w-[50%]",
          }}
          startContent={
            <div className="absolute left-0 top-[0%] -translate-x-[30%] md:-translate-x-[0%] -translate-y-[260px] md:-translate-y-[320px] z-1">
              <div className="absolute z-3 bg-[linear-gradient(180deg,_transparent_0%,_#000000_40%,_#000000_100%)] h-[700px] md:h-[1200px] w-[1400px]" />
              <motion.div
                style={{ y: imageY }}
                className="container relative w-[1400px] h-[1200px]"
              >
                <Image alt="" fill src="/images/reports-hero.webp" />
              </motion.div>
            </div>
          }
          description="From real-time executive dashboards to comprehensive operational reports—understand what's working, identify what isn't, and prove ROI with precision. Every conversation generates insights. We make them actionable."
        />
      </PageHero>
      <section
        ref={containerRef}
        className="md:container space-y-8 pt-12 md:pt-16 px-5"
      >
        {REPORTS_FEATURES.map((feature) => (
          <ReportCard
            key={feature.id}
            {...feature}
            containerRef={containerRef}
          />
        ))}
      </section>
    </PageTemplate>
  );
};

export default Reports;
