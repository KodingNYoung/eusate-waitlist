import Image from "next/image";
import { FC } from "@/utils/types";
import Typography from "@/components/shared/atoms/Typography";

type Props = {
  icon: string;
  name: string;
  description: string;
};
const IntegrationCard: FC<Props> = ({ icon, name, description }) => {
  return (
    <section className="flex items-start justify-center self-start border border-gray-100 rounded-x20 py-8 min-w-full md:min-w-[349.33px] h-full">
      <div className="flex flex-col gap-[22px] items-center justify-around w-[83%]">
        <Image width={48} height={48} alt={icon} className="h-12" src={icon} />
        <div className="grid gap-[22px]">
          <Typography
            variant="semibold-lg"
            className="text-black text-center leading-[150%]"
          >
            {name}
          </Typography>
          <Typography
            variant="regular-xl"
            className="text-gray-500 mx-auto text-center leading-[180%]"
          >
            {description}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default IntegrationCard;
