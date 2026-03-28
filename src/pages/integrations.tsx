import IntegrationCard from "@/components/routes/integration/IntegrationCard";
import Typography from "@/components/shared/atoms/Typography";
import Chip from "@/components/shared/molecules/Chip";
import Navbar from "@/components/shared/organisms/navbar";
import { PublicExtras } from "@/utils/enum";

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
      <Navbar />
      <div className="pt-[88px] bg-gradient-to-r from-gray-500 to-white min-h-screen w-full">
        <div className="container max-w-[80%] py-20 space-y-20">
          <header className="mx-auto">
            <Chip className="bg-gold-100">Integrations</Chip>
            <Typography>We live where your customers live</Typography>
          </header>
          <main className="flex gap-4">
            {PLATFORMS.map(({ id, ...platform }) => (
              <IntegrationCard key={id} {...platform} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
