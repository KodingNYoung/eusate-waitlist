import { Blog } from "@/components/routes/home/Blog";
import { FAQ } from "@/components/routes/home/FAQ";
import { Hero } from "@/components/routes/home/Hero";
import { HomeIntegrations } from "@/components/routes/home/Integrations";
import { MeetSate } from "@/components/routes/home/MeetSate";
import { OurProducts } from "@/components/routes/home/OurProducts";
import { Pricing } from "@/components/routes/home/Pricing";
import { TeamOfBuilders } from "@/components/routes/home/TeamOfBuilders";
import { Testimonials } from "@/components/routes/home/Testimonials";
import { WeDeliver } from "@/components/routes/home/WeDeliver";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";

const Home = () => {
  return (
    <PageTemplate>
      <div className="space-y-16">
        <Hero />
        <WeDeliver />
        <TeamOfBuilders />
        <OurProducts />
        <HomeIntegrations />
        <MeetSate />
        <Pricing />
        <Testimonials />
        <Blog />
        <FAQ />
      </div>
    </PageTemplate>
  );
};

export default Home;
