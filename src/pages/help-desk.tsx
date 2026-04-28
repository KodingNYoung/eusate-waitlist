import { ArrowRightIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { HD_FEATURES } from "@/utils/constants";
import { HDFeatureCard } from "@/components/routes/help-desk/HDFeatureCard";
import { ParallaxHero } from "@/components/shared/organisms/ParallaxHero";

const HelpDeskPage = () => {
  return (
    <PageTemplate classNames={{ wrapper: "" }}>
      <ParallaxHero
        chipLabel="Helpdesk"
        title="One inbox. Every conversation."
        classNames={{
          container: "bg-[url(/images/helpdesk-bg.webp)] md:h-[920px]",
        }}
        description="Support across email, live chat, social, and monitors AI performance and intervene from one interface."
        cta={
          <Button
            variant="outlined"
            className="px-12 py-4"
            endContent={<span className="stroke-black">{ArrowRightIcon}</span>}
          >
            Get started
          </Button>
        }
        imgSrc="/images/helpdesk-hero.webp"
      />
      <section className="bg-white relative z-2 pt-20 -translate-y-[50px] rounded-[40px]">
        <div className="container space-y-24">
          {HD_FEATURES.map((feature) => (
            <HDFeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </section>
    </PageTemplate>
  );
};

export default HelpDeskPage;
