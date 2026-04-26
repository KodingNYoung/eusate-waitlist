import Image from "next/image";
import Typography from "@/components/shared/atoms/Typography"
import Button from "@/components/shared/molecules/Button"

export const HomeIntegrations = () => {
  return (
    <section className="container py-20">
      <div className="flex relative mx-auto flex-col items-center w-[50%] space-y-4">
        <div className="absolute left-0 -translate-x-[12rem] -translate-y-[2rem]">
          <Image width={200} height={200} className="left-0" src="/images/livechat-integration.webp" alt="" />
        </div>
        <div className="absolute right-0 translate-x-[12rem] -translate-y-[2rem]">
          <Image width={200} height={200} className="left-0" src="/images/discord-integration.webp" alt="" />
        </div>
        <div className="absolute left-0 bottom-0 -translate-x-[12rem] translate-y-[2rem]">
          <Image width={200} height={200} className="left-0" src="/images/whatsapp-integration.webp" alt="" />
        </div>
        <div className="absolute right-0 bottom-0 translate-x-[12rem] translate-y-[2rem]">
          <Image width={200} height={200} className="left-0" src="/images/mail-integration.webp" alt="" />
        </div>
        <Typography variant="bold-5xl" className="text-center leading-[120%]" as="h1">Because Great Support Starts with <span className="text-gradient">Great Tool</span></Typography>
        <Typography variant="medium-lg" className="text-gray-400 leading-[150%] text-center" as="p">Eusate connects to the tools and platforms your customers already use. No channel chaos. No context switching. Just seamless support everywhere.</Typography>
        <Button className="py-2 px-4">View our integrations</Button>
      </div>
    </section>
  )
}

