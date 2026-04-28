import Image from "next/image";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { REPORTS_FEATURES } from "@/utils/constants";
import { ReportCard } from "@/components/routes/reports/ReportCard";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Reports = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -620]);

  return (
    <PageTemplate classNames={{ wrapper: "space-y-24" }}>
      <PageHeader
        ref={headerRef}
        chipLabel="Reports"
        orientation="horizontal"
        title="Know what, Understand why."
        startContent={
          <div className="absolute top-[0%] -translate-y-[280px] z-1">
            <div className="absolute z-3 bg-[linear-gradient(180deg,_transparent_0%,_#000000_40%,_#000000_100%)] h-[900px] w-[1400px]" />
            <motion.div
              style={{ y: imageY }}
              className="container relative w-[1400px] h-[1200px]"
            >
              <Image alt="" fill src="/images/reports-hero.webp" />
            </motion.div>
          </div>
        }
        description="From real-time executive dashboards to comprehensive operational reports—understand what's working, identify what isn't, and prove ROI with precision. Every conversation generates insights. We make them actionable."
        classNames={{
          wrapper: "relative",
          root: "z-3 container justify-between",
          container:
            "overflow-hidden bg-[url(/images/reports-bg.webp)] flex items-end md:h-screen",
          title: "text-white",
          description: "text-white",
          titleContainer: "w-[60%]",
          descriptionContainer: "w-[50%]",
        }}
      />
      <section ref={containerRef} className="container space-y-8 pt-16">
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
