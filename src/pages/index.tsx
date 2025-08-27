import Features from "@/components/routes/home/Features";
import HomeHero from "@/components/routes/home/hero";
import Benefits from "@/components/routes/home/Benefits";
import Roadmap from "@/components/routes/home/Roadmap";
import Invite from "@/components/routes/home/Invite";
import Footer from "@/components/shared/organisms/footer";
import Navbar from "@/components/shared/organisms/navbar";
import MetaProps from "@/components/shared/molecules/MetaProps";

export default function Home() {
  return (
    <div className="bg-white">
      <MetaProps
        title="eusate - Customer Support for Fast-Growing Businesses and Startups"
        description="Transform your customer support with SATE. Reduce support costs by 50-70% while scaling. Built specifically for fast-growing businesses and startups."
        path="/"
        jsonLdData={{ type: "homepage" }}
      />
      <Navbar />
      <HomeHero />
      <Features />
      <Benefits />
      <Roadmap />
      <Invite />
      <Footer />
    </div>
  );
}
