import Features from "@/components/routes/home/Features";
import HomeHero from "@/components/routes/home/hero";
import Benefits from "@/components/routes/home/Benefits";
import Roadmap from "@/components/routes/home/Roadmap";
import Invite from "@/components/routes/home/Invite";
import Footer from "@/components/shared/organisms/footer";
import Navbar from "@/components/shared/organisms/navbar";

export default function Home() {
  return (
    <div className="bg-white">
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
