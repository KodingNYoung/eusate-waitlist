import Image from "next/image";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { REPORTS_FEATURES } from "@/utils/constants";
import { ReportCard } from "@/components/routes/reports/ReportCard";

const Reports = () => {
  return (
    <PageTemplate>
      <div>
        <PageHeader
          chipLabel="Reports"
          orientation="horizontal"
          title="Know what, Understand why."
          extraContent={
            <div className="absolute top-[0%] -translate-y-[280px] z-1">
              <div className="absolute z-3 bg-[linear-gradient(180deg,_transparent_0%,_#000000_40%,_#000000_100%)] h-[900px] w-[1400px]" />
              <div className="container relative w-[1400px] h-[1200px]">
                <Image alt="" fill src="/images/reports-hero.webp" />
              </div>
            </div>
          }
          description="From real-time executive dashboards to comprehensive operational reports—understand what's working, identify what isn't, and prove ROI with precision. Every conversation generates insights. We make them actionable."
          classNames={{
            wrapper: "relative",
            root: "z-3 container flex-1",
            container:
              "overflow-hidden bg-[url(/images/reports-bg.webp)] flex items-end",
            title: "text-white w-[70%]",
            description: "text-white",
          }}
        />
        <section className="container space-y-8 mt-16">
          {
            REPORTS_FEATURES.map(({ id, ...feature }) => <ReportCard key={id} {...feature} />)
          }
        </section>
      </div>
    </PageTemplate>
  );
};

export default Reports;
