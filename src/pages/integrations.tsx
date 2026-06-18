import { PublicExtras } from "@/utils/enum";
import IntegrationCard from "@/components/routes/integration/IntegrationCard";
import {
  PageSection,
  PageTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageHero } from "@/components/shared/organisms/PageHero";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";

export const PLATFORMS = [
  {
    id: 1,
    name: "WhatsApp",
    icon: PublicExtras.WHATSAPP_ICON,
    description:
      "Setup a whatsapp number to pull converstaions as tickets from your customers",
  },
  {
    id: 2,
    name: "Discord",
    icon: PublicExtras.DISCORD_ICON,
    description:
      "Connect a Discord account to capture conversations as support tickets from your community members",
  },
  {
    id: 3,
    name: "Email",
    icon: PublicExtras.MAIL_ICON,
    description:
      "Set up an email address to receive customer conversations as support tickets.",
  },
  {
    id: 4,
    name: "Live chat",
    icon: PublicExtras.LIVESTREAM_ICON,
    description:
      "Integrate our live chat widget on customer-facing interfaces to turn customer conversations into manageable tickets.",
  },
];

const Integrations = () => {
  return (
    <div>
      <PageTemplate
        classNames={{
          wrapper: "px-5 grid gap-y-12 md:gap-y-20 pb-20",
        }}
      >
        <PageHero
          classNames={{
            container: "md:pt-24 pt-20",
          }}
        >
          <AnimatedBlock>
            <PageHeader
              position="center"
              chipLabel="Integrations"
              title="We live where your customers live"
              classNames={{
                container: "md:h-auto",
                titleContainer:
                  "gap-y-6 md:gap-y-10 justify-items-start md:justify-items-center",
                title: "w-full md:w-[80%] !text-left md:!text-center",
              }}
            />
          </AnimatedBlock>
        </PageHero>
        <PageSection>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORMS.map(({ id, ...platform }) => (
              <AnimatedBlock key={id} delay={id / 10} duration={2}>
                <IntegrationCard {...platform} />
              </AnimatedBlock>
            ))}
          </div>
        </PageSection>
      </PageTemplate>
    </div>
  );
};

export default Integrations;
