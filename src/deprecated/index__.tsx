import Features from "./_components/home/Features";
import HomeHero from "./_components/home/hero";
import Benefits from "./_components/home/Benefits";
import Roadmap from "./_components/home/Roadmap";
import Invite from "./_components/home/Invite";
import Footer from "@/components/shared/organisms/footer";
import Navbar from "@/components/shared/organisms/navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="px-4">
        <HomeHero />
        <Features />
        <Benefits />
        <Roadmap />
        <Invite />
        <Footer />
      </div>
    </div>
  );
}
