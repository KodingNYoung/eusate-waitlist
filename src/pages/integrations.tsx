import IntegrationCard from "@/components/routes/integration/IntegrationCard";
import GradientBackground from "@/components/shared/atoms/GradientBackground";
import Typography from "@/components/shared/atoms/Typography";
import Chip from "@/components/shared/molecules/Chip";
import Footer from "@/components/shared/organisms/footer";
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
      <GradientBackground variant="yellow" className="absolute w-full mx-4" />
      <div className="pt-[88px] bg-gradient-to-r from-gray-500 to-white min-h-screen w-full px-4">
        <div className="container flex flex-col items-center justify-center max-w-[80%] py-20 space-y-20 mx-auto">
          <header className="space-y-8 w-[50%]">
            <Chip classNames={{ container: "flex justify-center", base: "bg-gold-100" }}>Integrations</Chip>
            <Typography variant="bold-6xl" className="text-center">We live where your customers live</Typography>
          </header>
          <main className="flex flex-wrap justify-center gap-4">
            {PLATFORMS.map(({ id, ...platform }) => (
              <IntegrationCard key={id} {...platform} />
            ))}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Integrations;
