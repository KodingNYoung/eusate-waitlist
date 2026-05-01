import Typography from "@/components/shared/atoms/Typography";
import { DEVSPACE_ACTIONS } from "@/utils/constants";
import { DevActionCard } from "./DevActionCard";
import Image from "next/image";

export const DevAction = () => {
  return (
    <section className="container relative grid md:grid-cols-2 gap-12 items-start">
      <div className="space-y-10 pt-12 md:pt-24">
        <div className="space-y-4">
          <Typography
            as="h2"
            variant="bold-4xl"
            className="text-bold-2xl md:text-bold-4xl"
          >
            Keep SATE aligned with your system updates
          </Typography>
          <Typography
            as="p"
            variant="regular-xl"
            className="text-regular-sm md:regular-xl"
          >
            Conncect Sate via APIs to your business platforms to perform actions
          </Typography>
        </div>
        <div className="bg-gray-50 p-[4px] space-y-[4px] rounded-lg">
          {DEVSPACE_ACTIONS.map(({ id, title, description }) => (
            <DevActionCard key={id} title={title} description={description} />
          ))}
        </div>
      </div>

      <div></div>

      <div className="hidden md:block absolute inset-0 translate-x-[50%]">
        <div className="sticky top-[130px] self-start relative w-full h-[629px]">
          <Image
            alt="devspace-snapshot"
            src="/images/devspace-snapshot.webp"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
