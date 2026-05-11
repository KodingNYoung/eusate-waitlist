import Typography from "@/components/shared/atoms/Typography";
import { DEVSPACE_ACTIONS } from "@/utils/constants";
import { DevActionCard } from "./DevActionCard";
import Image from "next/image";

export const DevAction = () => {
  return (
    <section className="relative flex items-start gap-12 justify-around w-full px-5">
      <div className="flex justify-end pt-12 md:pt-24 w-full">
        <div className="w-full md:w-[90%] 2xl:w-[65%] space-y-10 ">
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
              Conncect Sate via APIs to your business platforms to perform
              actions
            </Typography>
          </div>
          <div className="bg-gray-50 p-[4px] space-y-[4px] rounded-lg">
            {DEVSPACE_ACTIONS.map(({ id, title, description }) => (
              <DevActionCard key={id} title={title} description={description} />
            ))}
          </div>
        </div>
      </div>

      {/* <div></div> */}

      <div className="hidden sticky top-[130px] overflow-hidden self-start md:block w-full">
        <div className="relative w-[1200px] h-[629px]">
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
