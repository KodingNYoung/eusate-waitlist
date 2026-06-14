import { ArrowRightIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { HD_FEATURES, ROUTES } from "@/utils/constants";
import { HDFeatureCard } from "@/components/routes/help-desk/HDFeatureCard";
import { ParallaxHero } from "@/components/shared/organisms/ParallaxHero";
import { BorderGradient } from "@/components/shared/organisms/BorderGradient";
import Typography from "@/components/shared/atoms/Typography";
import Link from "next/link";
import { GradientIcon } from "@/components/shared/atoms/Icon";

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
          wrapper: "gap-y-20",
          container:
            "bg-[url(/images/helpdesk-bg.webp)] bg-center h-[80vh] md:h-[90vh] ",
        }}
        description="Support across email, live chat, social, and monitors AI performance and intervene from one interface."
        cta={
          <BorderGradient>
            <Link
              aria-label="help-desk-link"
              rel="noreferrer"
              href={process.env.NEXT_PUBLIC_BASE_URL + ROUTES.HELP_DESK}
            >
              <Button
                size="sm"
                variant="outlined"
                className="px-4 md:px-12 py-4 group"
                endContent={<GradientIcon>{ArrowRightIcon}</GradientIcon>}
              >
                Get started
              </Button>
            </Link>
          </BorderGradient>
        }
        imgSrc="/images/helpdesk-hero.webp"
      />
      <section className="bg-white relative z-3 pt-20 -translate-y-[3vh] rounded-x20 md:rounded-x40">
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
