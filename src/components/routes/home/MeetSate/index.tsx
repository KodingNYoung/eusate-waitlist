import Image from "next/image"
import Button from "@/components/shared/molecules/Button"
import Typography from "@/components/shared/atoms/Typography"
import { AiPlaygroundIcon, CopilotIcon, CustomerTemperamentIcon, GapAnalysisIcon, TicketContextIcon } from "@/assets/icons"
import { SateFeatureCard } from "./SateFeatureCard"
import { ChatArea } from "./ChatArea"


const sateFeatures = [
  {
    id: 1,
    icon: CopilotIcon,
    title: "Co-pilot",
    description: "Create custom content directly in our built-in text editor or import using links."
  },
  {
    id: 2,
    icon: GapAnalysisIcon,
    title: "Gap Analysis",
    description: "Create custom content directly in our built-in text editor or import using links."
  },
  {
    id: 3,
    icon: AiPlaygroundIcon,
    title: "AI playground",
    description: "Create custom content directly in our built-in text editor or import using links."
  },
  {
    id: 4,
    icon: TicketContextIcon,
    title: "Ticket Context",
    description: "Create custom content directly in our built-in text editor or import using links."
  },
  {
    id: 5,
    icon: CustomerTemperamentIcon,
    title: "Customer Temperament",
    description: "Create custom content directly in our built-in text editor or import using links."
  },
  {
    id: 6,
    icon: CustomerTemperamentIcon,
    title: "Human Agent Handoff",
    description: "Create custom content directly in our built-in text editor or import using links."
  },

]

export const MeetSate = () => {
  return (
    <section className="bg-[url(/home/images/meet-sate-bg.webp)] py-20 mx-4">
      <div className="container flex flex-col items-center gap-8">
        <header className="flex flex-col items-center space-y-4 w-[50%]">
          <div className="p-4 rounded-full bg-brand-gradient">
            <Image width={50} height={50} src="/logos/icon-white.webp" alt="" />
          </div>
          <Typography variant="bold-5xl" className="text-white text-center">Meet Sate. The AI agent that customers love</Typography>
          <Button size="sm" variant="outlined" className="py-4 px-12">Meet Sate</Button>
        </header>
        <div className="bg-white/20 rounded-x24 p-6 space-y-4">
          <div className="flex gap-6 flex-wrap justify-center">
            {
              sateFeatures.map(({ id, ...feature }) => <SateFeatureCard key={id} {...feature} />)
            }
          </div>
          <ChatArea />
        </div>
      </div>

    </section>
  )
}
