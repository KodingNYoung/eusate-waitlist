import { Blog } from "@/components/routes/home/Blog";
import { FAQ } from "@/components/routes/home/FAQ";
import { Hero } from "@/components/routes/home/Hero";
import { HowItWorks } from "@/components/routes/home/HowItWorks";
import { HomeIntegrations } from "@/components/routes/home/Integrations";
import { MeetSate } from "@/components/routes/home/MeetSate";
import { OurProducts } from "@/components/routes/home/OurProducts";
import { Pricing } from "@/components/routes/home/Pricing";
import { TeamOfBuilders } from "@/components/routes/home/TeamOfBuilders";
import { Testimonials } from "@/components/routes/home/Testimonials";
import { WeDeliver } from "@/components/routes/home/WeDeliver";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import MetaProps from "@/components/shared/molecules/MetaProps";

const Home = () => {
  return (
    <PageTemplate>
      <MetaProps
        title="AI Customer Support Platform | Eusate"
        description="Deliver faster, smarter customer support with Eusate. Manage conversations across WhatsApp, Email, Live Chat, Voice, and more from one AI-powered platform."
        path="/"
        jsonLdData={{ type: "homepage" }}
      />
      <Hero />
      <WeDeliver />
      <HowItWorks />
      <TeamOfBuilders />
      <OurProducts />
      <HomeIntegrations />
      <MeetSate />
      <Pricing />
      <Testimonials />
      <Blog />
      <FAQ />
    </PageTemplate>
  );
};

export default Home;
