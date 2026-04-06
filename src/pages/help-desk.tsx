import Image from "next/image";
import { ArrowRightIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { HD_FEATURES } from "@/utils/constants";
import { HDFeatureCard } from "@/components/routes/help-desk/HDFeatureCard";

const HelpDeskPage = () => {
  return (
    <PageTemplate>
      <div>
        <PageHeader
          position="center"
          chipLabel="Helpdesk"
          title="One inbox. Every conversation."
          classNames={{
            wrapper: "pt-16 space-y-8",
            container:
              "bg-[url(/images/helpdesk-bg.webp)] overflow-hidden h-[820px] flex items-start",
            root: "w-[40%]",
            title: "text-white",
            description: "leading-[180%] text-white",
          }}
          description="Support across email, live chat, social, and monitors AI performance and intervene from one interface."
          actionBtn={
            <Button
              variant="outlined"
              className="px-12 py-4"
              endContent={
                <span className="stroke-black">{ArrowRightIcon}</span>
              }
            >
              Get started
            </Button>
          }
          extraContent={
            <div className="w-full h-[1000px] relative">
              <Image
                alt="helpdesk-hero"
                fill
                src="/images/helpdesk-hero.webp"
              />
            </div>
          }
        />
        <section className="bg-white pt-20 -translate-y-[50px] mx-4 rounded-[40px]">
          <div className="container space-y-24">
            {
              HD_FEATURES.map((feature) => <HDFeatureCard key={feature.id} {...feature} />)
            }
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default HelpDeskPage;
