import { ArrowRightIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { HD_FEATURES } from "@/utils/constants";
import { HDFeatureCard } from "@/components/routes/help-desk/HDFeatureCard";
import { ParallaxHero } from "@/components/shared/organisms/ParallaxHero";
import { BorderGradient } from "@/components/shared/organisms/BorderGradient";
import Typography from "@/components/shared/atoms/Typography";

const HelpDeskPage = () => {
  return (
    <PageTemplate classNames={{ wrapper: "" }}>
      <ParallaxHero
        chipLabel="Helpdesk"
        title={
          <Typography className="text-bold-4xl md:text-bold-6xl text-center text-white leading-[120%]">
            One inbox.
            <br /> Every conversation.
          </Typography>
        }
        classNames={{
          chipContainer: "justify-center",
          description: "text-center",
          descriptionContainer: "items-center",
          container:
            "bg-[url(/images/helpdesk-bg.webp)] bg-center h-[80vh] md:h-[90vh] ",
        }}
        description="Support across email, live chat, social, and monitors AI performance and intervene from one interface."
        cta={
          <BorderGradient>
            <Button
              size="sm"
              variant="outlined"
              className="px-4 md:px-12 py-4"
              endContent={
                <span className="stroke-black">{ArrowRightIcon}</span>
              }
            >
              Get started
            </Button>
          </BorderGradient>
        }
        imgSrc="/images/helpdesk-hero.webp"
      />
      <section className="bg-white relative z-2 pt-20 -translate-y-[3vh] rounded-x20 md:rounded-x40">
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
