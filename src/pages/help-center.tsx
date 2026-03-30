import GradientBackground from "@/components/shared/atoms/GradientBackground";
import Navbar from "@/components/shared/organisms/navbar";
import { PageHeader } from "@/components/shared/organisms/PageHeader";

const HelpCenterPage = () => {
  return (
    <div>
      <Navbar />
      <GradientBackground variant="yellow" className="absolute" />
      <main className="pt-[88px]">
        <div className="container flex justify-between mx-auto pt-20 max-w-[80%]">
          <PageHeader chipLabel="Help center" title="Everything you need to know" description="Do you hae questons? We'd love to hear from you." />
          <div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HelpCenterPage;
