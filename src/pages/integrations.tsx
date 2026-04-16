import { PublicExtras } from "@/utils/enum";
import IntegrationCard from "@/components/routes/integration/IntegrationCard";
import {
  PageTemplate,
  SectionTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { PageHeader } from "@/components/shared/organisms/PageHeader";

const PLATFORMS = [
  {
    id: 1,
    name: "WhatsApp",
    icon: PublicExtras.WHATSAPP_ICON,
    description: "A brief description of this integration",
  },
  {
    id: 2,
    name: "Discord",
    icon: PublicExtras.DISCORD_ICON,
    description: "A brief description of this integration",
  },
  {
    id: 3,
    name: "Email",
    icon: PublicExtras.MAIL_ICON,
    description: "A brief description of this integration",
  },
  {
    id: 4,
    name: "Live chat",
    icon: PublicExtras.LIVESTREAM_ICON,
    description: "A brief description of this integration",
  },
];

const Integrations = () => {
  return (
    <div>
      <PageTemplate
        gradientVariant="yellow"
        classNames={{
          container: "pt-[88px]",
          wrapper: "container md:py-12 space-y-12",
        }}
      >
        <PageHeader
          position="center"
          chipLabel="Integrations"
          title="We live where your customers live"
          classNames={{
            container: "px-2 h-auto",
            wrapper: "w-full md:w-[80%]",
            chipContainer: "justify-start",
          }}
        />
        <SectionTemplate>
          <div className="flex flex-wrap justify-center gap-8">
            {PLATFORMS.map(({ id, ...platform }) => (
              <IntegrationCard key={id} {...platform} />
            ))}
          </div>
        </SectionTemplate>
      </PageTemplate>
    </div>
  );
};

export default Integrations;
